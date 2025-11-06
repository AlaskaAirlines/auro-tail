import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { LitElement, html } from 'lit';
import { MAX_TAILS_IN_GROUP, GROUPS_SIZES } from './constants';
import groupStyleCss from './styles/auro-tail-group.scss';

/**
 * The auro-tail-group element displays multiple auro-tail elements in a grouped layout. When tails are placed within a group, labels/links and badge logos are not displayed, and only two tails can be paired together.
 */
export class AuroTailGroup extends LitElement {
  static get properties() {
    return {
      /**
       * Sets the layout direction for the group.
       */
      layout: { type: String, attribute: 'layout', reflect: true },
      /**
       * Sets the size for all child tails in the group.
       */
      size: { type: String, attribute: 'size', reflect: true },
      /**
       * Sets the border color for all child tails in the group. Does not apply to diagonal layout.
       */
      borderColor: { type: String, attribute: 'border-color', reflect: true }
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
    /** @type {'horizontal' | 'diagonal'} */
    this.layout = 'horizontal';
    /** @type {'xs' | 'sm' | 'md' | 'lg'} */
    this.size = 'lg';
    /** @type {string | undefined} */
    this.borderColor = undefined;

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  /**
   * Prevent shadow DOM creation for unsupported sizes.
   * @protected
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createRenderRoot() {
    if (!GROUPS_SIZES.includes(this.size)) {
      return this;
    }
    return super.createRenderRoot();
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
    if (changedProperties.has('size') || changedProperties.has('borderColor')) {
      this.updateChildTails();
    }
  }

  /**
   * Manages child tails - removes excess tails and updates sizes.
   * @private
   */
  updateChildTails() {
    // Small delay to ensure slotted content is available
    setTimeout(() => {
      const tails = this.querySelectorAll('auro-tail');
      
      // If size is not supported, remove all child tails from light DOM.
      if (!GROUPS_SIZES.includes(this.size)) {
        tails.forEach((tail) => {
          tail.remove();
        });
        return;
      }

      // Remove excess tails from DOM completely.
      tails.forEach((tail, index) => {
        if (index >= MAX_TAILS_IN_GROUP) {
          tail.remove();
        } else {
          // Update size for allowed tails
          /** @type {any} */ (tail).size = this.size;
          
          // Update border-color for allowed tails
          if (this.borderColor !== undefined) {
            /** @type {any} */ (tail).borderColor = this.borderColor;
          }
        }
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
      return html``;
    }

    return html`
      <div class="group ${this.layout}">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }

  static get styles() {
    return [groupStyleCss];
  }
}
