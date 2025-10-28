/**
 * Normalizes border width to a px length.
 * Accepts:
 * - number => "<n>px"
 * - "<number>" => "<number>px"
 * - "<number>px" => passthrough
 * Ignores any other units or tokens and returns undefined.
 * @param {number|string|undefined|null} value - The border width value to normalize
 * @returns {string|undefined} The normalized border width or undefined
 */
export function normalizeBorderWidth(value) {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'number') return value === 0 ? '0' : `${value}px`;
  const v = String(value).trim();
  if (!v) return undefined;
  // Numeric string -> px
  if (/^-?\d*\.?\d+$/.test(v)) return v === '0' ? '0' : `${v}px`;
  // px unit only
  if (/^-?\d*\.?\d+px$/.test(v)) return v;
  // Non-px inputs are ignored
  return undefined;
}

/**
 * Pass through border-related overrides while enforcing px-only widths.
 *
 * Behavior:
 * - `borderColor` is returned as-is when provided.
 * - `borderWidth` accepts only numbers, numeric strings, or px strings and normalizes via `normalizeBorderWidth`.
 *   • number -> "<n>px" (e.g., 2 -> "2px").
 *   • "<number>" -> "<number>px" (e.g., "2" -> "2px").
 *   • "<number>px" -> passthrough.
 *   • Zero is returned as "0px".
 *   • Any other units/tokens (e.g., "0.125rem", "var(--w)") are ignored (treated as undefined).
 *
 * @param {object} props - The props object
 * @param {string|undefined} props.borderColor - Optional CSS color value for the border.
 * @param {number|string|undefined} props.borderWidth - Optional border width as a number, numeric string, or px string. Other units are ignored.
 * @returns {{borderColor: string|undefined, borderWidth: string|undefined}} Object with optional `borderColor` and px-only `borderWidth`.
 */
export function resolveBorderProps(props) {
  const { borderColor, borderWidth } = props;
  // Prefer centralized normalization and enforce px-only outputs.
  const normalized = normalizeBorderWidth(borderWidth);
  let resolvedBorderWidth;

  if (normalized !== undefined) {
    resolvedBorderWidth = normalized === '0' ? '0px' : normalized;
  } else {
    // Non-px inputs or empty strings are ignored
    resolvedBorderWidth = undefined;
  }

  return { borderColor, borderWidth: resolvedBorderWidth };
}
