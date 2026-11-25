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
import { i18nTemplate, isAuroTailGroupElement } from './utils';
import styleCss from './styles/auro-tail.scss';

/**
 * @typedef {Object} BadgeConfig
 * @property {Function} icon - The function that returns the badge icon template.
 * @property {string} alt - The alt text for the badge.
 */

/**
 * Displays an Alaska, Hawaiian, or partner airline tail graphic, so every airline looks the same across Alaska applications.
 *
 * **Key capabilities**
 * - **Airline tails**: Set `tail` to a tail code such as `AS`, `HA`, or `PR` to choose the airline.
 * - **Sizes**: Set `size` from `xs` to `2xl` to fit the layout.
 * - **Badges**: Set `badge="oneworld"` to add the OneWorld Alliance badge at `md` and larger sizes.
 * - **Links**: Set `href` to make the tail and its label a link at `md` and larger sizes.
 * - **Outline**: Set `variant="outline"` to outline partner airline tails.
 * - **Borders**: Set `--ds-auro-tail-border-width` and `--ds-auro-tail-border-color` to add a border ring.
 *
 * **Example**
 * ```html
 * <auro-tail tail="AS"></auro-tail>
 * ```
 *
 * @summary An airline tail graphic with sizes, links, badges, and grouped layouts for Alaska, Hawaiian, and partner carriers.
 * @slot - Text label shown below the tail when `href` is set. Defaults to "Airline". Shows only at sizes `md` through `2xl`, and never inside an `auro-tail-group`. {@relevantWhen href && size !== 'xs' && size !== 'sm'}
 * @csspart container - The circular element that holds the tail graphic.
 * @cssprop --ds-auro-tail-border-width - Width of the border ring around the tail. Groups in `horizontal` layout set it themselves, and `diagonal` groups remove it.
 * @cssprop --ds-auro-tail-border-color - Color of the border ring around the tail. Set it on an `auro-tail-group` to color the borders of both tails in `horizontal` layout.
 * @customElement auro-tail
 */
export class AuroTail extends LitElement {
  /**
   * Identifies this element as an auro-tail.
   * Used by auro-tail-group to identify valid child elements.
   * @private
   * @type {boolean}
   */
  static isAuroTail = true;

  static get styles() {
    return [styleCss];
  }

  static get properties() {
    return {
      /**
       * Sets the badge to show on the tail, such as `oneworld` for the OneWorld Alliance badge. Shows only at sizes `md` through `2xl`, and never inside an `auro-tail-group`.
       * @relevantWhen size !== 'xs' && size !== 'sm'
       */
      badge: { type: String },

      /**
       * Sets the URL the tail and its label link to, such as `https://www.alaskaair.com/` (the link's `href`). Applies only at sizes `md` through `2xl`, and never inside an `auro-tail-group`.
       * @relevantWhen size !== 'xs' && size !== 'sm'
       */
      href: { type: String, attribute: 'href' },

      /**
       * Sets the tail's size, from `xs` for the smallest to `2xl` for the largest. Use `md` or larger to show an `href` link or a `badge`. Inside an `auro-tail-group`, the group's `size` replaces this value.
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'}
       * @default 'lg'
       */
      size: { type: String, reflect: true },

      /**
       * Sets the airline whose tail shows, using a tail code from `auro-icon` such as `AS`, `HA`, or `PR`. Shows a default tail when the code is missing or not recognized. Codes aren't case sensitive.
       */
      tail: { type: String },

      /**
       * Sets the tail's visual style. Use `outline` to outline partner airline tails. Alaska and Hawaiian tails (`AS` and `HA`) never show an outline.
       * @type {'outline'}
       */
      variant: { type: String, reflect: true }
    };
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-tail"] - The tag name to register the element under.
   *
   * @example
   * AuroTail.register("custom-tail") // Registers the element as <custom-tail>
   *
   */
  static register(name = "auro-tail") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroTail);
  }

  // Initialize default property values
  // Necessary to avoid type errors
  #setDefaults() {
    this.size = 'lg';
  }

  constructor() {
    super();
    this.#setDefaults();

    /**
     * Determines the carrier type based on tail code. Valid values: `aag`, `oa`.
     * Used internally for styling.
     * @private
     * @type {string}
     */
    this._carrierType = 'oa';

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
   * Gets the carrier type based on the current tail code. Returns `aag` or `oa`.
   * @private
   * @returns {string} The carrier type.
   */
  get carrierType() {
    // Carrier mappings
    const carriers = {
      'aag': ['as', 'ha'],
      'oa': ['oa']
    };

    // Auro Icon uses capitalized tail codes, convert to lowercase for matching
    const tailCode = this.tail?.toLowerCase();

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
   * @returns {HTMLElement|null} The parent tail group, or null if there isn't one.
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
   * Checks whether this tail is inside an `auro-tail-group` element.
   * @private
   * @returns {boolean} True if the tail is in a group; false otherwise.
   */
  get isInGroup() {
    return !!this._findParentGroup();
  }

  /**
   * Checks whether this tail is in a horizontal group layout.
   * @private
   * @returns {boolean} True if the tail's group uses the `horizontal` layout; false otherwise.
   */
  get isInHorizontalGroup() {
    const group = this._findParentGroup();
    return !!group && group.getAttribute('layout') === 'horizontal';
  }

  /**
   * Checks whether this tail is in a diagonal group layout.
   * @private
   * @returns {boolean} True if the tail's group uses the `diagonal` layout; false otherwise.
   */
  get isInDiagonalGroup() {
    const group = this._findParentGroup();
    return !!group && group.getAttribute('layout') === 'diagonal';
  }

  /**
   * Gets the badge config when the tail can show a badge.
   * @private
   * @returns {BadgeConfig | undefined} The badge config, or undefined if no badge applies.
   */
  get badgeConfig() {
    return this.badge && !this.isInGroup && BADGES_SIZES.includes(this.size)
      ? BADGE_LOGOS[this.badge]
      : undefined;
  }

  /**
   * Checks whether the tail should display as a clickable link.
   * @private
   * @returns {boolean} True if the tail shows as a link; false otherwise.
   */
  get shouldShowLink() {
    return !!this.href && !this.isInGroup && LINKS_SIZES.includes(this.size);
  }

  /**
   * Gets the CSS type class that matches the tail size.
   * @private
   * @returns {string} The CSS type class name.
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
   * @param {Map<string, any>} changedProperties - The properties that changed.
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
          <${this.iconTag} category="logos" name=${this.tail ? `tail-${this.tail.toUpperCase()}` : 'tail-DEFAULT'}></${this.iconTag}>
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
          >
            ${tailContent}
            <slot class="label ${this.labelTypeClass}">${DEFAULT_AIRLINE_NAME}</slot>
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
