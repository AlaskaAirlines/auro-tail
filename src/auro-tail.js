import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import { LitElement } from 'lit';
import { html } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/class";
import { AuroIcon } from "@aurodesignsystem/auro-icon/class";
import hyperlinkVersion from "./hyperlinkVersion.js";
import iconVersion from "./iconVersion.js";
import { BADGE_LOGOS, LINKS_SIZES, BADGES_SIZES, ARIA_LABELS, DEFAULT_AIRLINE_NAME } from './constants';
import { i18nTemplate } from './utils';
import styleCss from './styles/auro-tail.scss';

/**
 * @typedef {Object} BadgeConfig
 * @property {Function} icon - Function that returns the badge icon template
 * @property {string} alt - Alt text for the badge
 */

/**
 * Checks if an element is an AuroTailGroup
 * @param {HTMLElement} element - The element to check
 * @returns {boolean}
 */
function isAuroTailGroupElement(element) {
  return element.constructor?.isAuroTailGroup === true;
}

/**
 * @callback HrefClickCallback
 * @param {Event} event - The click event
 * @returns {void}
 */

/**
 * The auro-tail element displays Alaska, Hawaiian, and partner airline tail graphics for consistent visual representation across Alaska applications.
 *
 * @fires {CustomEvent<{ href: string }>} href-click - Fired when the auro-hyperlink is clicked.
 */
export class AuroTail extends LitElement {
  /**
   * Identifies this element as an auro-tail.
   * @private
   * @type {boolean}
   */
  static isAuroTail = true;

  static get styles() {
    return [styleCss];
  }

  static get properties() {
    return {
      tail: { type: String },
      badge: { type: String },
      size: { type: String, reflect: true },
      variant: { type: String, reflect: true },
      href: { type: String, attribute: 'href' }
    };
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-tail"] - The name of element that you want to register to.
   *
   * @example
   * AuroTail.register("custom-tail") // this will register this element to <custom-tail/>
   *
   */
  static register(name = "auro-tail") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroTail);
  }

  constructor() {
    super();
    /**
     * Sets the airline tail based on the tail codes used in auro-icon (e.g., `AS`, `HA`, `PR`).
     * @type {string}
     */
    this.tail = 'AS';
    /**
     * Sets the badge type to display (e.g., `oneworld`).
     * @type {string | undefined}
     */
    this.badge = undefined;
    /**
     * Sets the size of the tail. Valid values: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`
     * @type {string}
     */
    this.size = 'lg';
    /**
     * Sets the visual variant of the tail. Valid values: `outline`
     * @type {string | undefined}
     */
    this.variant = undefined;
    /**
     * Sets the href for the tail.
     * @type {string | undefined}
     */
    this.href = undefined;
    
    /**
     * Determines the carrier type based on tail code. Valid values: `aag`, `oa`
     * Used internally for styling.
     * @private
     * @type {string}
     */
    this._carrierType = 'oa';
    
    /**
     * Optional internal callback invoked on hyperlink click before the custom
     * event is dispatched.
     * @private
     * @type {HrefClickCallback | undefined}
     */
    this.onHrefClick = undefined;

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.iconTag = versioning.generateTag("auro-icon", iconVersion, AuroIcon);

    /**
     * @private
     */
    this.hyperlinkTag = versioning.generateTag("auro-hyperlink", hyperlinkVersion, AuroHyperlink);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  /**
   * Handles clicks on the href prop, invokes optional callback, and
   * dispatches a cancelable custom event `href-click`.
   * 
   * If the event is canceled by a consumer, navigation is prevented.
   *
   * @private
   * @param {Event} ev - The click event
   */
  _handleLinkClick(ev) {
    // Invoke optional internal callback first
    if (this.onHrefClick) {
      this.onHrefClick(ev);
    }

    const proceed = this.dispatchEvent(
      new CustomEvent('href-click', {
        detail: { href: this.href },
        bubbles: true,
        composed: true,
        cancelable: true,
      })
    );

    // If any listener called event.preventDefault() on the custom event,
    // prevent the anchor's default navigation.
    if (!proceed) {
      ev.preventDefault();
    }
  }

  /**
   * Gets the carrier type based on the current tail code. Returns `aag` or `oa`
   * @private
   * @returns {string} The carrier type
   */
  get carrierType() {
    // Carrier mappings
    const carriers = {
      'aag': ['as', 'ha'],
      'oa': ['oa']
    };

    // Auro Icon uses capitalized tail codes, convert to lowercase for matching
    const tailCode = this.tail.toLowerCase();

    // Find which carrier group contains this tail code
    for (const [variant, codes] of Object.entries(carriers)) {
      if (codes.includes(tailCode)) {
        return variant;
      }
    }
    
    // Default to 'oa' for unknown tail codes
    return 'oa';
  }

  /**
   * Finds the parent tail group element.
   * @private
   * @returns {HTMLElement|null}
   */
  _findParentGroup() {
    let parent = this.parentElement;
    while (parent) {
      // Check if parent is a tail group
      if (isAuroTailGroupElement(parent)) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }

  /**
   * Checks if this tail is inside an auro-tail-group element.
   * @private
   * @returns {boolean}
   */
  get isInGroup() {
    return !!this._findParentGroup();
  }

  /**
   * Checks if this tail is in a horizontal group layout.
   * @private
   * @returns {boolean}
   */
  get isInHorizontalGroup() {
    const group = this._findParentGroup();
    return !!group && group.getAttribute('layout') === 'horizontal';
  }

  /**
   * Checks if this tail is in a diagonal group layout.
   * @private
   * @returns {boolean}
   */
  get isInDiagonalGroup() {
    const group = this._findParentGroup();
    return !!group && group.getAttribute('layout') === 'diagonal';
  }

  /**
   * Returns badge config when eligible.
   * @private
   * @returns {BadgeConfig | undefined}
   */
  get badgeConfig() {
    return this.badge && !this.isInGroup && BADGES_SIZES.includes(this.size)
      ? BADGE_LOGOS[this.badge]
      : undefined;
  }

  /**
   * Checks if the tail should display as a clickable link.
   * @private
   * @returns {boolean}
   */
  get shouldShowLink() {
    return !!this.href && !this.isInGroup && LINKS_SIZES.includes(this.size);
  }

  /**
   * Gets the appropriate CSS type class based on tail size.
   * @private
   * @returns {string}
   */
  get labelTypeClass() {
    const sizeToTypeClassMap = {
      'md': 'body-xs',
      'lg': 'body-sm',
      'xl': 'body-default', 
      '2xl': 'body-lg'
    };
    
    return sizeToTypeClassMap[this.size] || 'body-sm';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name.
    this.runtimeUtils.handleComponentTagRename(this, "auro-tail");
  }

  /**
   * @param {Map<string, any>} changedProperties - Changed properties
   */
  updated(changedProperties) {
    // Update internal carrier type when tail changes
    if (changedProperties.has('tail')) {
      this._carrierType = this.carrierType;
      // Set carrier type as data attribute for CSS targeting.
      this.dataset.carrierType = this.carrierType;
    }
    super.updated(changedProperties);
  }

  render() {
    const badge = this.badgeConfig;

    // Accessible name
    const ariaLabel = badge
      ? i18nTemplate(ARIA_LABELS.tailLiveryWithBadge, { badgeAlt: badge.alt })
      : ARIA_LABELS.tailLivery;

    // Tail content
    const tailContent = html`
      <div class="border">
        <div class="container" part="container" role="img" aria-label=${ariaLabel}>
          <${this.iconTag} category="logos" name="tail-${this.tail.toUpperCase()}"></${this.iconTag}>
        </div>
        ${badge?.icon ? html`<div class="badge">${badge.icon()}</div>` : null}
      </div>
    `;

    // When href is provided and otherwise permitted, wrap tail and label in a single hyperlink.
    if (this.shouldShowLink) {
      return html`
        <div class="tail">
          <${this.hyperlinkTag}
            class="tail-hyperlink"
            href=${ifDefined(this.href)}
            @click=${this._handleLinkClick}
          >
            ${tailContent}
            <slot name="display" class="label ${this.labelTypeClass}">${DEFAULT_AIRLINE_NAME}</slot>
          </${this.hyperlinkTag}>
        </div>
      `;
    }

    // Default: no hyperlink or when otherwise prevented.
    return html`
      <div class="tail">
        ${tailContent}
      </div>
    `;
  }
}
