<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Attribute Examples

## Tail
       
Set the `tail` prop to insert a tail graphic from the `<auro-icon>` repository with the corresponding icon code.

Tail codes from `<auro-icon>` are expected to be UPPERCASE (e.g., `AS`, not `as`).

> For a full list of available tail graphics & corresponding codes, click here.
 
Certain properties are not available for all `tail` codes. See the table below for details.

| `tail` | Airline Name        | `outline` | CSS Drop-shadow |
|---------|---------------------|---------|-------------|
| AS      | Alaska Airlines     | ✗       | ✓           |
| HA      | Hawaiian Airlines   | ✗       | ✓           |
| PR, FI, etc | Other airline (OA)  | ✓       | ✗           |

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/tail.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/tail.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Size

Control the size of `<auro-tail>` with the `size` attribute.

Certain properties are not available for all `<auto-tail>` sizes. See the table below for details.

| Size | `href` | `badge` |
|------|-----------------|------------------|
| xs   | ✗               | ✗                |
| sm   | ✗               | ✗                |
| md   | ✓               | ✓                |
| lg   | ✓               | ✓                |
| xl   | ✓               | ✓                |
| 2xl  | ✓               | ✓                |

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/sizes.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/sizes.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Badge

Display predefined badges such as OneWorld Alliance using the `badge` attribute.

### Supported sizes:
- `md`, `lg`, `xl`, `2xl`

> `badge` prop is not displayed when in an `<auro-tail-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/badges.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/badges.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Borders

Optional border ring around `<auro-tail>`.

- Displays if either are set:
  - `border-width`
    - Aaccepts pixel values, with or without the `px` unit (e.g., `"4"` or `"4px"`)
      - Other units (rem, em, %, CSS variables) are ignored
    - Default width: `4px` when `border-color` is specified
  - `border-color`
    - Accepts any valid CSS color value:
      - Hex: `#FF1493`
      - Named colors: `"hotpink"`
      - RGB/RGBA: `rgb(255, 20, 147)`, `rgba(255, 20, 147, 0.5)`
      - HSL: `hsl(328, 100%, 54%)`
      - CSS variables: `var(--custom-color)`
    - Default color: `rgba(88, 94, 103, 1)` when `border-width` is specified
- `border-width` & `border-color` can be used in combination

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/borders.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/borders.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Outline

Set the `outline` boolean prop to add an outline around the tail graphic.

- Outlines apply only to partner (OA) tails
  - AAG tails (AS & HA) never feature outlines
- Width & color are predefined and not customizable

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/outline.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/outline.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Hyperlink

Make tails clickable by adding an `href` attribute. This displays a clickable link below the tail using the `<auro-hyperlink>` component.

### Supported sizes:
- `md`, `lg`, `xl`, `2xl`

### Customizing the label:
- Use the `display` slot to provide custom link text
- If no `slot` is provided, a default label is inserted automatically

```html
<auro-tail tail="HA" size="md" href="https://hawaiianairlines.com/">
  <span slot="display">Hawaiian Airlines</span>
</auro-tail>
```

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/links.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/links.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Group
Use `<auro-tail-group>` to display paired `<auro-tail>` components in a group layout with specific behavioral constraints and visual treatments.

### Supported sizes:
- `xs`, `sm`, `md`, `lg`

### Limitations
* **Maximum Display Count:** Only 2 avatars will be displayed in any group
* **Size Override:** The group's `size` property will override individual `<auro-tail>` `size` properties
* **Suppressed Features:**
   * `badge` will not be shown
   * `href` will not be displayed

### Diagonal

> `border-width`, and `border-color` props are not applicable and will be ignored.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/group-diagonal.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/group-diagonal.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Horizontal

> `border-width` prop is not applicable and will be ignored.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/group-horizontal.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/group-horizontal.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Horizontal with `border-color`:

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/group-horizontal-border.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/group-horizontal-border.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>



### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
