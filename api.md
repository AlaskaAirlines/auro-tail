<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-tail

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                          | Default | Description                                                                               |
| ---------- | ---------- | --------- | --------------------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| badge      | badge      |           | string                                        |         | Sets the badge type to display (e.g., `oneworld`).                                        |
| href       | href       |           | string                                        |         | Sets the href for the tail.                                                               |
| size       | size       |           | `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `2xl` | `lg`    | Sets the size of the tail.                                                                |
| tail       | tail       |           | string                                        | `AS`    | Sets the airline tail based on the tail codes used in auro-icon (e.g., `AS`, `HA`, `PR`). |
| variant    | variant    |           | `outline`                                     |         | Sets the visual variant of the tail.                                                      |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

# auro-tail-group

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                         | Default      | Description                                     |
| ---------- | ---------- | --------- | ---------------------------- | ------------ | ----------------------------------------------- |
| layout     | layout     |           | `horizontal` \| `diagonal`   | `horizontal` | Sets the layout direction for the group.        |
| size       | size       |           | `xs` \| `sm` \| `md` \| `lg` | `lg`         | Sets the size for all child tails in the group. |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic.html -->
  <auro-tail tail="AS"></auro-tail>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic.html -->

```html
<auro-tail tail="AS"></auro-tail>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Badge

Display predefined badges such as OneWorld Alliance using the `badge` attribute.

### Supported sizes:
- `md`, `lg`, `xl`, `2xl`

> `badge` prop is not displayed when in an `<auro-tail-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/badges.html) -->
  <!-- The below content is automatically added from ../apiExamples/badges.html -->
  <auro-tail tail="AS" size="md" badge="oneworld"></auro-tail>
  <auro-tail tail="AS" size="lg" badge="oneworld"></auro-tail>
  <auro-tail tail="AS" size="xl" badge="oneworld"></auro-tail>
  <auro-tail tail="AS" size="2xl" badge="oneworld"></auro-tail>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/badges.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/badges.html -->

```html
<auro-tail tail="AS" size="md" badge="oneworld"></auro-tail>
<auro-tail tail="AS" size="lg" badge="oneworld"></auro-tail>
<auro-tail tail="AS" size="xl" badge="oneworld"></auro-tail>
<auro-tail tail="AS" size="2xl" badge="oneworld"></auro-tail>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Href

Make tails clickable by adding an `href` attribute. This displays a clickable link below the tail using the `<auro-hyperlink>` component.

### Supported sizes:
- `md`, `lg`, `xl`, `2xl`

### Customizing the label:
- Use the `display` slot to provide custom link text
- If no `slot` is provided, a default label is inserted automatically

```html
<auro-tail tail="HA" size="md" href="https://hawaiianairlines.com/">
  <span>Hawaiian Airlines</span>
</auro-tail>
```

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/href.html) -->
  <!-- The below content is automatically added from ../apiExamples/href.html -->
  <auro-tail tail="HA" size="md" href="https://hawaiianairlines.com/">
    <span>Hawaiian Airlines</span>
  </auro-tail>
  <auro-tail tail="PR" size="lg" href="https://philippineairlines.com/">
    <span>Philippine Airlines</span>
  </auro-tail>
  <auro-tail tail="AS" size="xl" href="https://hawaiianairlines.com/">
    <span>Alaska Airlines</span>
  </auro-tail>
  <auro-tail tail="HA" size="2xl" href="https://hawaiianairlines.com/">
    <span>Custom Label</span>
  </auro-tail>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/href.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/href.html -->

```html
<auro-tail tail="HA" size="md" href="https://hawaiianairlines.com/">
  <span>Hawaiian Airlines</span>
</auro-tail>
<auro-tail tail="PR" size="lg" href="https://philippineairlines.com/">
  <span>Philippine Airlines</span>
</auro-tail>
<auro-tail tail="AS" size="xl" href="https://hawaiianairlines.com/">
  <span>Alaska Airlines</span>
</auro-tail>
<auro-tail tail="HA" size="2xl" href="https://hawaiianairlines.com/">
  <span>Custom Label</span>
</auro-tail>
```
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
  <!-- The below content is automatically added from ../apiExamples/sizes.html -->
  <auro-tail tail="AS" size="xs"></auro-tail>
  <auro-tail tail="AS" size="sm"></auro-tail>
  <auro-tail tail="HA" size="md"></auro-tail>
  <auro-tail tail="PR" size="lg"></auro-tail>
  <auro-tail tail="AS" size="xl"></auro-tail>
  <auro-tail tail="HA" size="2xl"></auro-tail>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/sizes.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/sizes.html -->

```html
<auro-tail tail="AS" size="xs"></auro-tail>
<auro-tail tail="AS" size="sm"></auro-tail>
<auro-tail tail="HA" size="md"></auro-tail>
<auro-tail tail="PR" size="lg"></auro-tail>
<auro-tail tail="AS" size="xl"></auro-tail>
<auro-tail tail="HA" size="2xl"></auro-tail>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Tail

Set the `tail` attribute to insert a tail graphic from the `<auro-icon>` repository with the corresponding icon code.

Tail codes from `<auro-icon>` are expected to be UPPERCASE (e.g., `AS`, not `as`).

The `tail` attribute is required.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/tail.html) -->
  <!-- The below content is automatically added from ../apiExamples/tail.html -->
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
  <auro-tail tail="PR"></auro-tail>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/tail.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/tail.html -->

```html
<auro-tail tail="AS"></auro-tail>
<auro-tail tail="HA"></auro-tail>
<auro-tail tail="PR"></auro-tail>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Variant

Set the `variant` attribute to change the visual style of the tail.

### Available variants:
- `outline` - Adds an outline around the tail graphic
  - Outlines apply only to partner (OA) tails
    - AAG tails (`AS` & `HA`) never feature outlines
  - Width & color are predefined and not customizable

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/variant.html) -->
  <!-- The below content is automatically added from ../apiExamples/variant.html -->
  <auro-tail tail="S7" variant="outline"></auro-tail>
  <auro-tail tail="KE" variant="outline"></auro-tail>
  <auro-tail tail="AS" variant="outline"></auro-tail>
  <auro-tail tail="HA" variant="outline"></auro-tail>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/variant.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/variant.html -->

```html
<auro-tail tail="S7" variant="outline"></auro-tail>
<auro-tail tail="KE" variant="outline"></auro-tail>
<auro-tail tail="AS" variant="outline"></auro-tail>
<auro-tail tail="HA" variant="outline"></auro-tail>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## CSS Customization

## Borders

Optional border ring around `<auro-tail>`.

Use CSS custom properties to style borders:

- `--ds-auro-tail-border-width`
  - Set the border width (e.g., `3px`, `4px`)
- `--ds-auro-tail-border-color`
  - Set the border color (any valid CSS color value)

### Styling individual tails:

Set CSS custom properties directly on the `<auro-tail>` element:

```html
<auro-tail tail="AS" style="--ds-auro-tail-border-width: 3px; --ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)"></auro-tail>
```

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/borders.html) -->
  <!-- The below content is automatically added from ../apiExamples/borders.html -->
  <auro-tail tail="HA" style="--ds-auro-tail-border-width: 2px"></auro-tail>
  <auro-tail tail="AS" style="--ds-auro-tail-border-width: 3px; --ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)"></auro-tail>
  <auro-tail tail="HA" style="--ds-auro-tail-border-width: 4px; --ds-auro-tail-border-color: #FF1493"></auro-tail>
  <auro-tail tail="PR" style="--ds-auro-tail-border-width: 5px; --ds-auro-tail-border-color: red"></auro-tail>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/borders.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/borders.html -->

```html
<auro-tail tail="HA" style="--ds-auro-tail-border-width: 2px"></auro-tail>
<auro-tail tail="AS" style="--ds-auro-tail-border-width: 3px; --ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)"></auro-tail>
<auro-tail tail="HA" style="--ds-auro-tail-border-width: 4px; --ds-auro-tail-border-color: #FF1493"></auro-tail>
<auro-tail tail="PR" style="--ds-auro-tail-border-width: 5px; --ds-auro-tail-border-color: red"></auro-tail>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## auro-tail-group
Use `<auro-tail-group>` to display paired `<auro-tail>` components in a group layout with specific behavioral constraints and visual treatments.

### Supported sizes:
- `xs`, `sm`, `md`, `lg`

### Limitations
* **Maximum Display Count:** Only 2 tails are supported in any group.
* **Size Override:** The group's `size` property will override individual `<auro-tail>` `size` properties
* **Suppressed Features:**
   * `badge` will not be shown
   * `href` will not be displayed

### Styling tails in a group

CSS custom properties set on the `<auro-tail-group>` element will automatically apply to all child `<auro-tail>` elements:

```html
<auro-tail-group layout="horizontal" style="--ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
```

Border styling availability varies by layout type (see sections below).

### Diagonal

- Border styles (`--ds-auro-tail-border-width` and `--ds-auro-tail-border-color`) are not applicable to diagonal groups and will be ignored.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/group-diagonal.html) -->
  <!-- The below content is automatically added from ../apiExamples/group-diagonal.html -->
  <auro-tail-group layout="diagonal" size="xs">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail-group layout="diagonal" size="sm">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail-group layout="diagonal" size="md">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail-group layout="diagonal" size="lg">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/group-diagonal.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/group-diagonal.html -->

```html
<auro-tail-group layout="diagonal" size="xs">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail-group layout="diagonal" size="sm">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail-group layout="diagonal" size="md">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail-group layout="diagonal" size="lg">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Horizontal

- Border width (`--ds-auro-tail-border-width`) is not customizable.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/group-horizontal.html) -->
  <!-- The below content is automatically added from ../apiExamples/group-horizontal.html -->
  <auro-tail-group layout="horizontal" size="xs">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail-group layout="horizontal" size="sm">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail-group layout="horizontal" size="md">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail-group layout="horizontal" size="lg">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/group-horizontal.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/group-horizontal.html -->

```html
<auro-tail-group layout="horizontal" size="xs">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail-group layout="horizontal" size="sm">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail-group layout="horizontal" size="md">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail-group layout="horizontal" size="lg">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Horizontal with custom border color:

- Set `--ds-auro-tail-border-color` on the group element to customize border color for all child tails.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/group-horizontal-border.html) -->
  <!-- The below content is automatically added from ../apiExamples/group-horizontal-border.html -->
  <auro-tail-group layout="horizontal" size="sm" style="--ds-auro-tail-border-color: var(--ds-basic-color-brand-secondary-bold)">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail-group layout="horizontal" size="md" style="--ds-auro-tail-border-color: #FF69B4">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail-group layout="horizontal" size="xs" style="--ds-auro-tail-border-color: red">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail-group layout="horizontal" size="lg" style="--ds-auro-tail-border-color: rgba(70, 60, 143, 1)">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/group-horizontal-border.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/group-horizontal-border.html -->

```html
<auro-tail-group layout="horizontal" size="sm" style="--ds-auro-tail-border-color: var(--ds-basic-color-brand-secondary-bold)">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail-group layout="horizontal" size="md" style="--ds-auro-tail-border-color: #FF69B4">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail-group layout="horizontal" size="xs" style="--ds-auro-tail-border-color: red">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail-group layout="horizontal" size="lg" style="--ds-auro-tail-border-color: rgba(70, 60, 143, 1)">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ../src/styles/tokens.scss -->

```scss
/* Public API Tokens - Consumer Customizable */

:host {
  /* Border tokens */
  --ds-auro-tail-border-color: var(--ds-auro-tail-border-color-default);
  --ds-auro-tail-border-width: var(--ds-auro-tail-border-w-default);
}
```
<!-- AURO-GENERATED-CONTENT:END -->
