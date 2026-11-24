<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-tail

Displays an Alaska, Hawaiian, or partner airline tail graphic, so every airline looks the same across Alaska applications.

**Key capabilities**
- **Airline tails**: Set `tail` to a tail code such as `AS`, `HA`, or `PR` to choose the airline.
- **Sizes**: Set `size` from `xs` to `2xl` to fit the layout.
- **Badges**: Set `badge="oneworld"` to add the OneWorld Alliance badge at `md` and larger sizes.
- **Links**: Set `href` to make the tail and its label a link at `md` and larger sizes.
- **Outline**: Set `variant="outline"` to outline partner airline tails.
- **Borders**: Set `--ds-auro-tail-border-width` and `--ds-auro-tail-border-color` to add a border ring.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;</code></pre>

### Properties and attributes

| Properties | Attributes | Modifiers | Type                                          | Default | Relevant when                    | Description                                                                                                                                                                                             |
| ---------- | ---------- | --------- | --------------------------------------------- | ------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| badge      | badge      |           | string                                        |         | `size !== "xs' && size !== 'sm"` | Sets the badge to show on the tail, such as `oneworld` for the OneWorld Alliance badge. Shows only at sizes `md` through `2xl`, and never inside an `auro-tail-group`.                                  |
| href       | href       |           | string                                        |         | `size !== "xs' && size !== 'sm"` | Sets the URL the tail and its label link to, such as `https://www.alaskaair.com/` (the link's `href`). Applies only at sizes `md` through `2xl`, and never inside an `auro-tail-group`.                 |
| size       | size       |           | `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `2xl` | `lg`    |                                  | Sets the tail's size, from `xs` for the smallest to `2xl` for the largest. Use `md` or larger to show an `href` link or a `badge`. Inside an `auro-tail-group`, the group's `size` replaces this value. |
| tail       | tail       |           | string                                        |         |                                  | Sets the airline whose tail shows, using a tail code from `auro-icon` such as `AS`, `HA`, or `PR`. Shows a default tail when the code is missing or not recognized. Codes aren't case sensitive.        |
| variant    | variant    |           | `outline`                                     |         |                                  | Sets the tail's visual style. Use `outline` to outline partner airline tails. Alaska and Hawaiian tails (`AS` and `HA`) never show an outline.                                                          |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name      | Description                                                                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | Text label shown below the tail when `href` is set. Defaults to "Airline". Shows only at sizes `md` through `2xl`, and never inside an `auro-tail-group`. |

### CSS shadow parts

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| container | The circular element that holds the tail graphic. |

### CSS custom properties

| Name                        | Description                                                                                                                         |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| --ds-auro-tail-border-width | Width of the border ring around the tail. Groups in `horizontal` layout set it themselves, and `diagonal` groups remove it.         |
| --ds-auro-tail-border-color | Color of the border ring around the tail. Set it on an `auro-tail-group` to color the borders of both tails in `horizontal` layout. |

# auro-tail-group

Shows two airline tails together as a pair, either side by side with an overlap or stacked at opposite corners.

**Key capabilities**
- **Layouts**: Set `layout` to `horizontal` or `diagonal`.
- **Shared size**: Set `size` to size both tails at once.
- **Pairs only**: The group supports two tails.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-tail-group layout="horizontal"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;</code></pre>

### Properties and attributes

| Properties | Attributes | Modifiers | Type                         | Default      | Description                                                                                                                                                                                         |
| ---------- | ---------- | --------- | ---------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| layout     | layout     |           | `horizontal` \| `diagonal`   | `horizontal` | Sets how the two tails sit together. Use `horizontal` (the default) for tails that overlap side by side, or `diagonal` for tails at opposite corners. Borders show only in the `horizontal` layout. |
| size       | size       |           | `xs` \| `sm` \| `md` \| `lg` | `lg`         | Sets the size of every `auro-tail` in the group, from `xs` to `lg`. The group's size replaces any `size` set on the tails, and the group shows nothing at other sizes.                              |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name      | Description                           |
| --------- | ------------------------------------- |
| (default) | The two `auro-tail` elements to show. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<auro-tail tail="AS"></auro-tail>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-tail tail="AS" size="md" badge="oneworld"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="AS" size="lg" badge="oneworld"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="AS" size="xl" badge="oneworld"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="AS" size="2xl" badge="oneworld"&gt;&lt;/auro-tail&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Href

Make tails clickable by adding an `href` attribute. This displays a clickable link below the tail using the `<auro-hyperlink>` component.

#### Supported sizes:
- `md`, `lg`, `xl`, `2xl`

#### Customizing the label:
- Use the default slot (no `slot` attribute) to provide custom link text
- If no slotted content is provided, a default label is inserted automatically

<pre class="language-html"><code class="language-html">&lt;auro-tail tail="HA" size="md" href="https://hawaiianairlines.com/"&gt;
  &lt;span&gt;Hawaiian Airlines&lt;/span&gt;
&lt;/auro-tail&gt;</code></pre>

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/href.html) -->
<!-- The below content is automatically added from ../apiExamples/href.html -->
<auro-tail tail="HA" size="md" href="https://hawaiianairlines.com/">
<span>Hawaiian Airlines</span>
</auro-tail>
<auro-tail tail="PR" size="lg" href="https://philippineairlines.com/">
<span>Philippine Airlines</span>
</auro-tail>
<auro-tail tail="AS" size="xl" href="https://www.alaskaair.com/">
<span>Alaska Airlines</span>
</auro-tail>
<auro-tail tail="HA" size="2xl" href="https://hawaiianairlines.com/">
<span>Custom label</span>
</auro-tail>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/href.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/href.html -->

<pre class="language-html"><code class="language-html">&lt;auro-tail tail="HA" size="md" href="https://hawaiianairlines.com/"&gt;
  &lt;span&gt;Hawaiian Airlines&lt;/span&gt;
&lt;/auro-tail&gt;
&lt;auro-tail tail="PR" size="lg" href="https://philippineairlines.com/"&gt;
  &lt;span&gt;Philippine Airlines&lt;/span&gt;
&lt;/auro-tail&gt;
&lt;auro-tail tail="AS" size="xl" href="https://www.alaskaair.com/"&gt;
  &lt;span&gt;Alaska Airlines&lt;/span&gt;
&lt;/auro-tail&gt;
&lt;auro-tail tail="HA" size="2xl" href="https://hawaiianairlines.com/"&gt;
  &lt;span&gt;Custom label&lt;/span&gt;
&lt;/auro-tail&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-tail tail="AS" size="xs"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="AS" size="sm"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="HA" size="md"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="PR" size="lg"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="AS" size="xl"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="HA" size="2xl"&gt;&lt;/auro-tail&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Tail

Set the `tail` attribute to insert a tail graphic from the `<auro-icon>` repository with the corresponding icon code.

Tail codes aren't case sensitive. The examples use uppercase, such as `AS`.

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

<pre class="language-html"><code class="language-html">&lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="PR"&gt;&lt;/auro-tail&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Fallback

When the `tail` attribute is omitted or an unrecognized tail code is provided, `<auro-tail>` falls back to a default tail livery graphic rather than showing a broken icon.

- **No `tail` attribute**: renders the default tail livery.
- **Invalid tail code** (for example, `tail="INVALID"`): falls back to the default tail livery.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/fallback.html) -->
<!-- The below content is automatically added from ../apiExamples/fallback.html -->
<!-- No tail attribute: renders the default tail livery -->
<auro-tail></auro-tail>
<!-- Invalid tail code: falls back to the default tail livery -->
<auro-tail tail="INVALID"></auro-tail>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/fallback.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/fallback.html -->

<pre class="language-html"><code class="language-html">&lt;!-- No tail attribute: renders the default tail livery --&gt;
&lt;auro-tail&gt;&lt;/auro-tail&gt;
&#10;&lt;!-- Invalid tail code: falls back to the default tail livery --&gt;
&lt;auro-tail tail="INVALID"&gt;&lt;/auro-tail&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-tail tail="S7" variant="outline"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="KE" variant="outline"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="AS" variant="outline"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="HA" variant="outline"&gt;&lt;/auro-tail&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-tail tail="AS" style="--ds-auro-tail-border-width: 3px; --ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)"&gt;&lt;/auro-tail&gt;</code></pre>

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

<pre class="language-html"><code class="language-html">&lt;auro-tail tail="HA" style="--ds-auro-tail-border-width: 2px"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="AS" style="--ds-auro-tail-border-width: 3px; --ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="HA" style="--ds-auro-tail-border-width: 4px; --ds-auro-tail-border-color: #FF1493"&gt;&lt;/auro-tail&gt;
&lt;auro-tail tail="PR" style="--ds-auro-tail-border-width: 5px; --ds-auro-tail-border-color: red"&gt;&lt;/auro-tail&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-tail-group layout="horizontal" style="--ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;</code></pre>

Border styling availability varies by layout type (see sections below).

### Diagonal

- Border styles (`--ds-auro-tail-border-width` and `--ds-auro-tail-border-color`) aren't applicable to diagonal groups and are ignored.

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

<pre class="language-html"><code class="language-html">&lt;auro-tail-group layout="diagonal" size="xs"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;
&#10;&lt;auro-tail-group layout="diagonal" size="sm"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;
&#10;&lt;auro-tail-group layout="diagonal" size="md"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;
&#10;&lt;auro-tail-group layout="diagonal" size="lg"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Horizontal

- Border width (`--ds-auro-tail-border-width`) isn't customizable.

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

<pre class="language-html"><code class="language-html">&lt;auro-tail-group layout="horizontal" size="xs"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;
&#10;&lt;auro-tail-group layout="horizontal" size="sm"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;
&#10;&lt;auro-tail-group layout="horizontal" size="md"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;
&#10;&lt;auro-tail-group layout="horizontal" size="lg"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-tail-group layout="horizontal" size="sm" style="--ds-auro-tail-border-color: var(--ds-basic-color-brand-secondary-bold)"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;
&#10;&lt;auro-tail-group layout="horizontal" size="md" style="--ds-auro-tail-border-color: #FF69B4"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;
&#10;&lt;auro-tail-group layout="horizontal" size="xs" style="--ds-auro-tail-border-color: red"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;
&#10;&lt;auro-tail-group layout="horizontal" size="lg" style="--ds-auro-tail-border-color: rgba(70, 60, 143, 1)"&gt;
  &lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;
  &lt;auro-tail tail="HA"&gt;&lt;/auro-tail&gt;
&lt;/auro-tail-group&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">/* Public API Tokens - Consumer Customizable */
&#10;:host {
  /* Border tokens */
  --ds-auro-tail-border-color: var(--ds-auro-tail-border-color-default);
  --ds-auro-tail-border-width: var(--ds-auro-tail-border-w-default);
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
