import { AuroTail } from "../../src/auro-tail.js";
import { AuroTailGroup } from "../../src/auro-tail-group.js";

/**
 * The auro-tail element displays Alaska, Hawaiian, and partner airline tail graphics for consistent visual representation across Alaska applications.
 */
class AuroTailWCA extends AuroTail {}

/**
 * The auro-tail-group element displays multiple auro-tail elements in a grouped layout.
 */
class AuroTailGroupWCA extends AuroTailGroup {}

if (!customElements.get("auro-tail")) {
  customElements.define("auro-tail", AuroTailWCA);
}

if (!customElements.get("auro-tail-group")) {
  customElements.define("auro-tail-group", AuroTailGroupWCA);
}
