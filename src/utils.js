/**
 * Replaces `{key}` placeholders in a template string with the provided values, for internationalization (i18n).
 * @param {string} template - The template string with placeholders.
 * @param {Record<string, string>} values - The key-value pairs to use for replacement.
 * @returns {string} The template with placeholders replaced.
 */
export function i18nTemplate(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return key in values ? values[key] : match;
  });
}

/**
 * Checks whether an element is an `AuroTail`.
 * @param {Element} element - The element to check.
 * @returns {boolean} True if the element is an `AuroTail`; false otherwise.
 */
export function isAuroTailElement(element) {
  return element.constructor?.isAuroTail === true;
}

/**
 * Checks whether an element is an `AuroTailGroup`.
 * @param {HTMLElement} element - The element to check.
 * @returns {boolean} True if the element is an `AuroTailGroup`; false otherwise.
 */
export function isAuroTailGroupElement(element) {
  return element.constructor?.isAuroTailGroup === true;
}
