<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Auro-tail property and attribute examples

### Badge

Display predefined badges such as OneWorld Alliance using the `badge` attribute.

#### Supported sizes:
- `md`, `lg`, `xl`, `2xl`

> The `badge` attribute isn't shown inside an `<auro-tail-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/badges.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/badges.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Href

Make tails clickable by adding an `href` attribute. This displays a clickable link below the tail using the `<auro-hyperlink>` component.

#### Supported sizes:
- `md`, `lg`, `xl`, `2xl`

#### Customizing the label:
- Use the default slot (no `slot` attribute) to provide custom link text
- If no slotted content is provided, a default label is inserted automatically

```html
<auro-tail tail="HA" size="md" href="https://hawaiianairlines.com/">
  <span>Hawaiian Airlines</span>
</auro-tail>
```

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/href.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/href.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Size

Control the size of `<auro-tail>` with the `size` attribute.

Certain properties aren't available for all `<auro-tail>` sizes. See the table below for details.

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

### Tail
       
Set the `tail` attribute to insert a tail graphic from the `<auro-icon>` repository with the corresponding icon code.

Tail codes aren't case sensitive. The examples use uppercase, such as `AS`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/tail.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/tail.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Fallback

When the `tail` attribute is omitted or an unrecognized tail code is provided, `<auro-tail>` falls back to a default tail livery graphic rather than showing a broken icon.

- **No `tail` attribute**: renders the default tail livery.
- **Invalid tail code** (for example, `tail="INVALID"`): falls back to the default tail livery.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/fallback.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/fallback.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variant

Set the `variant` attribute to change the visual style of the tail.

#### Available variants:
- `outline`: Adds an outline around the tail graphic
  - Outlines apply only to partner airline tails
    - Alaska and Hawaiian tails (`AS` and `HA`) never show an outline
  - Width and color are predefined and not customizable

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/variant.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/variant.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns and functional examples

### Borders

Optional border ring around `<auro-tail>`.

Use CSS custom properties to style borders:

- `--ds-auro-tail-border-width`
  - Set the border width, such as `3px` or `4px`
- `--ds-auro-tail-border-color`
  - Set the border color (any valid CSS color value)

#### Styling individual tails:

Set CSS custom properties directly on the `<auro-tail>` element:

```html
<auro-tail tail="AS" style="--ds-auro-tail-border-width: 3px; --ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)"></auro-tail>
```

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/borders.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/borders.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Auro-tail-group property and attribute examples

### Supported sizes:
- `xs`, `sm`, `md`, `lg`

### Limitations
* **Maximum display count:** Only 2 tails are supported in any group.
* **Size override:** The group's `size` property overrides individual `<auro-tail>` `size` properties.
* **Suppressed features:**
   * `badge` isn't shown
   * `href` isn't displayed

### Styling tails in a group

CSS custom properties set on the `<auro-tail-group>` element automatically apply to all child `<auro-tail>` elements:

```html
<auro-tail-group layout="horizontal" style="--ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
```

Border styling availability varies by layout type (see sections below).

### Diagonal

- Border styles (`--ds-auro-tail-border-width` and `--ds-auro-tail-border-color`) aren't applicable to diagonal groups and are ignored.

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

- Border width (`--ds-auro-tail-border-width`) isn't customizable.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/group-horizontal.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/group-horizontal.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Horizontal with custom border color:

- Set `--ds-auro-tail-border-color` on the group element to customize border color for all child tails.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/group-horizontal-border.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/group-horizontal-border.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
