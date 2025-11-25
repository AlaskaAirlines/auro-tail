import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { LitElement, html, nothing } from 'lit';
import { GROUPS_SIZES } from './constants';
import { isAuroTailElement } from './utils';
import groupStyleCss from './styles/auro-tail-group.scss';

/**
 * @typedef {Element & {size: string}} AuroTailElement
 */

/**
 * The `<auro-tail-group>` element displays multiple `<auro-tail>` elements in a grouped layout.
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
      layout: { type: String, attribute: 'layout', reflect: true },
      size: { type: String, attribute: 'size', reflect: true }
    };
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-tail-group"] - The name of element that you want to register to.
   *
   * @example
   * AuroTailGroup.register("custom-tail-group") // this will register this element to <custom-tail-group/>
   *
   */
  static register(name = "auro-tail-group") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroTailGroup);
  }

  constructor() {
    super();
    /**
     * Sets the layout direction for the group. Valid values: `horizontal`, `diagonal`
     * @type {string}
     */
    this.layout = 'horizontal';
    /**
     * Sets the size for all child tails in the group. Valid values: `xs`, `sm`, `md`, `lg`
     * @type {string}
     */
    this.size = 'lg';

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
   * @param {Map<string, any>} changedProperties - Changed properties
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
   * Handle slot changes to update tails.
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
