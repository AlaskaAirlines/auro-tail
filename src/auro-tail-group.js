import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { LitElement, html, nothing } from 'lit';
import { GROUPS_SIZES } from './constants';
import { isAuroTailElement } from './utils';
import groupStyleCss from './styles/auro-tail-group.scss';

/**
 * @typedef {Element & {size: string}} AuroTailElement
 */

/**
 * Shows two airline tails together as a pair, either side by side with an overlap or stacked at opposite corners.
 *
 * **Key capabilities**
 * - **Layouts**: Set `layout` to `horizontal` or `diagonal`.
 * - **Shared size**: Set `size` to size both tails at once.
 * - **Pairs only**: The group supports two tails.
 *
 * **Example**
 * ```html
 * <auro-tail-group layout="horizontal">
 *   <auro-tail tail="AS"></auro-tail>
 *   <auro-tail tail="HA"></auro-tail>
 * </auro-tail-group>
 * ```
 *
 * @summary A pair of airline tails in a horizontal or diagonal layout.
 * @slot - The two `auro-tail` elements to show.
 * @customElement auro-tail-group
 */
export class AuroTailGroup extends LitElement {
  /**
   * Identifies this element as an auro-tail-group.
   * Used by auro-tail to identify when it's inside an auro-tail-group.
   * @private
   * @type {boolean}
   */
  static isAuroTailGroup = true;

  static get styles() {
    return [groupStyleCss];
  }

  static get properties() {
    return {
      /**
       * Sets how the two tails sit together. Use `horizontal` (the default) for tails that overlap side by side, or `diagonal` for tails at opposite corners. Borders show only in the `horizontal` layout.
       * @type {'horizontal' | 'diagonal'}
       * @default 'horizontal'
       */
      layout: { type: String, attribute: 'layout', reflect: true },

      /**
       * Sets the size of every `auro-tail` in the group, from `xs` to `lg`. The group's size replaces any `size` set on the tails, and the group shows nothing at other sizes.
       * @type {'xs' | 'sm' | 'md' | 'lg'}
       * @default 'lg'
       */
      size: { type: String, attribute: 'size', reflect: true }
    };
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-tail-group"] - The tag name to register the element under.
   *
   * @example
   * AuroTailGroup.register("custom-tail-group") // Registers the element as <custom-tail-group>
   *
   */
  static register(name = "auro-tail-group") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroTailGroup);
  }

  // Initialize default property values
  // Necessary to avoid type errors
  #setDefaults() {
    this.layout = 'horizontal';
    this.size = 'lg'
  }

  constructor() {
    super();
    this.#setDefaults();

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateChildTails();
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name.
    this.runtimeUtils.handleComponentTagRename(this, "auro-tail-group");
  }

  /**
   * @param {Map<string, any>} changedProperties - The properties that changed.
   */
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('size')) {
      this.updateChildTails();
    }
  }

  /**
   * Updates the size of child tails to match the group size.
   * @private
   */
  updateChildTails() {
    // Small delay to ensure slotted content is available
    setTimeout(() => {
      if (!GROUPS_SIZES.includes(this.size)) {
        return;
      }

      const allChildren = Array.from(this.children);
      const tails = allChildren.filter(isAuroTailElement);

      tails.forEach((tail) => {
        tail.size = this.size;
      });
    }, 0);
  }

  /**
   * Handles slot changes by updating the tails.
   * @private
   */
  handleSlotChange() {
    this.updateChildTails();
  }

  render() {
    // Don't render unsupported sizes.
    if (!GROUPS_SIZES.includes(this.size)) {
      return nothing;
    }

    return html`
      <div class="group ${this.layout}">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}
