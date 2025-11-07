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
import { resolveBorderProps, normalizeBorderWidth, i18nTemplate } from './utils';
import styleCss from './styles/auro-tail.scss';

/**
 * @typedef {Object} BadgeConfig
 * @property {Function} icon - Function that returns the badge icon template
 * @property {string} alt - Alt text for the badge
 */

/**
 * @callback HrefClickCallback
 * @param {Event} event - The click event
 * @returns {void}
 */

/**
 * The auro-tail element displays Alaska, Hawaiian, and partner airline tail graphics for consistent visual representation across Auro applications.
 *
 * @fires {CustomEvent<{ href: string }>} href-click - Fired when the auro-hyperlink is clicked.
 */
export class AuroTail extends LitElement {
  static get properties() {
    return {
      tail: { type: String },
      badge: { type: String },
      size: { type: String, reflect: true },
      outline: { type: Boolean, reflect: true },
      borderWidth: { attribute: 'border-width', reflect: true },
      borderColor: { type: String, attribute: 'border-color', reflect: true },
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
     * Sets the airline tail based on the tail codes used in auro-icon (e.g., AS, HA, PR).
     * @type {string}
     */
    this.tail = 'AS';
    /**
     * Sets the badge type to display (e.g., 'oneworld').
     * @type {string | undefined}
     */
    this.badge = undefined;
    /**
     * Sets the size of the tail.
     * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'}
     */
    this.size = 'lg';
    /**
     * Renders the tail with an outline style.
     * @type {boolean}
     */
    this.outline = false;
    /**
     * Sets the border width around the tail.
     * @type {string | undefined}
     */
    this.borderWidth = undefined;
    /**
     * Sets the border color around the tail.
     * @type {string | undefined}
     */
    this.borderColor = undefined;
    /**
     * Sets the href for the tail.
     * @type {string | undefined}
     */
    this.href = undefined;
    
    /**
     * Determines the carrier variant based on tail code.
     * Used internally for styling.
     * @private
     * @type {'aag'|'oa'}
     */
    this._variant = 'oa';
    
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
   * Gets the carrier variant based on the current tail code.
   * @readonly
   * @returns {'aag'|'oa'} The carrier variant
   */
  get variant() {
    // Carrier mappings
    const carriers = {
      'aag': ['as', 'ha'],
      'oa': ['oa']
    };
    
    const tailCode = this.tail.toLowerCase();
    
    // Find which carrier group contains this tail code
    for (const [variant, codes] of Object.entries(carriers)) {
      if (codes.includes(tailCode)) {
        return /** @type {'aag'|'oa'} */ (variant);
      }
    }
    
    // Default to 'oa' for unknown tail codes
    return 'oa';
  }

  /**
   * Checks if this tail is inside an auro-tail-group element.
   * @readonly
   * @returns {boolean}
   */
  get isInGroup() {
    return !!this.closest('auro-tail-group');
  }

  /**
   * Checks if this tail is in a horizontal group layout.
   * @readonly
   * @returns {boolean}
   */
  get isInHorizontalGroup() {
    const group = /** @type {HTMLElement|null} */ (this.closest('auro-tail-group'));
    return !!group && group.getAttribute('layout') === 'horizontal';
  }

  /**
   * Checks if this tail is in a diagonal group layout.
   * @readonly
   * @returns {boolean}
   */
  get isInDiagonalGroup() {
    const group = /** @type {HTMLElement|null} */ (this.closest('auro-tail-group'));
    return !!group && group.getAttribute('layout') === 'diagonal';
  }

  /**
   * Returns badge config when eligible.
   * @readonly
   * @returns {BadgeConfig | undefined}
   */
  get badgeConfig() {
    return this.badge && !this.isInGroup && BADGES_SIZES.includes(this.size) 
      ? BADGE_LOGOS[/** @type {keyof typeof BADGE_LOGOS} */ (this.badge)] 
      : undefined;
  }

  /**
   * Checks if tail has border properties defined.
   * @readonly
   * @returns {boolean}
   */
  get hasBorder() {
    return this.borderColor !== undefined || this.borderWidth !== undefined;
  }

  /**
   * Checks if the tail should display as a clickable link.
   * @readonly
   * @returns {boolean}
   */
  get shouldShowLink() {
    return !!this.href && !this.isInGroup && LINKS_SIZES.includes(this.size);
  }

  /**
   * Gets the appropriate CSS type class based on tail size.
   * @readonly
   * @returns {string}
   */
  get labelTypeClass() {
    const sizeToTypeClassMap = {
      'md': 'body-xs',
      'lg': 'body-sm',
      'xl': 'body-default', 
      '2xl': 'body-lg'
    };
    
    return sizeToTypeClassMap[/** @type {keyof typeof sizeToTypeClassMap} */ (this.size)] || 'body-sm';
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
    // Update internal variant when tail changes
    if (changedProperties.has('tail')) {
      this._variant = this.variant;
    }
    
    // Reflect props to CSS custom properties on host.
    this.applyCSSProperties();
    super.updated(changedProperties);
  }

  /**
   * Determines the border width value to set as a CSS custom property.
   * Returns null if border-width should not be set.
   * @private
   * @param {string|undefined} resolvedBorderWidth - Normalized border width from props
   * @returns {string|null} The border width value to set, or null to remove
   */
  _getBorderWidthValue(resolvedBorderWidth) {
    // Horizontal groups: CSS manages border-width
    if (this.isInHorizontalGroup) {
      return null;
    }

    // Valid width provided: use it
    if (resolvedBorderWidth) {
      return resolvedBorderWidth;
    }

    // No width but color provided: use default width
    if (this.borderColor && this.borderWidth === undefined) {
      return 'var(--border-width-default)';
    }

    // Otherwise: don't set
    return null;
  }

  /**
   * Applies border styles and variant from props to CSS custom properties.
   * @private
   */
  applyCSSProperties() {
    const normalizedWidth = normalizeBorderWidth(this.borderWidth);
    const { borderColor, borderWidth } = resolveBorderProps({
      borderColor: this.borderColor,
      borderWidth: normalizedWidth,
    });

    // Skip setting border properties for diagonal groups (CSS handles them)
    if (!this.isInDiagonalGroup) {
      // Set border-color
      if (borderColor) {
        this.style.setProperty('--border-color', borderColor);
      } else {
        this.style.removeProperty('--border-color');
      }

      // Set border-width (with group-specific logic)
      const widthValue = this._getBorderWidthValue(borderWidth);
      if (widthValue) {
        this.style.setProperty('--border-width', widthValue);
      } else {
        this.style.removeProperty('--border-width');
      }
    }

    // Set variant as data attribute for CSS targeting.
    this.dataset.variant = this.variant;
  }

  render() {
    const badge = this.badgeConfig;

    // Accessible name
    const ariaLabel = badge
      ? i18nTemplate(ARIA_LABELS.tailLiveryWithBadge, { badgeAlt: badge.alt })
      : ARIA_LABELS.tailLivery;

    // Tail content
    const tailContent = html`
      <div class="border ${(this.hasBorder || this.isInHorizontalGroup) ? 'has-border' : ''}">
        <div class="container" part="container" role="img" aria-label=${ariaLabel}>
          <${this.iconTag} category="logos" name="tail-${this.tail.toUpperCase()}"></${this.iconTag}>
        </div>
        ${badge && typeof badge.icon === 'function' ? html`<div class="badge">${badge.icon()}</div>` : null}
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

  static get styles() {
    return [styleCss];
  }
}
