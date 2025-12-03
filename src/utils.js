/**
 * Template for internationalization (i18n).
 * Replaces placeholders in the format {key} with provided values.
 * @param {string} template - The template string with placeholders
 * @param {Record<string, string>} values - Object with key-value pairs for replacement
 * @returns {string} The template with placeholders replaced
 */
export function i18nTemplate(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return key in values ? values[key] : match;
  });
}

/**
 * Checks if an element is an AuroTail
 * @param {Element} element - The element to check
 * @returns {boolean}
 */
export function isAuroTailElement(element) {
  return element.constructor?.isAuroTail === true;
}

/**
 * Checks if an element is an AuroTailGroup
 * @param {HTMLElement} element - The element to check
 * @returns {boolean}
 */
export function isAuroTailGroupElement(element) {
  return element.constructor?.isAuroTailGroup === true;
}
