<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Tail

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-tail>` custom element displays Alaska, Hawaiian, and partner airline tail graphics for consistent visual representation across Alaska applications.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
`<auro-tail>` can be used to:

- Display airline branding in booking flows
- Show partner airline liveries or indicate operating carrier
- Create visual representations of relationships
- Group multiple airlines together in a unified display

### Features

- **AAG & Partner Airlines**: Logos provided by the `<auro-icon>` repository
- **Flexible Sizing**: Offers a flexible size scale to accommodate various design requirements
- **Group Layout**: Display multiple tails together in paired layouts
- **Badge Support**: Display badges like OneWorld Alliance
- **Custom Borders**: Add colored borders with customizable widths
- **Clickable Links**: Make tails clickable with `<auro-hyperlink>`
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Overview of Tails

This example shows a variety of `auro-tail` usages.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/overview.html) -->
  <!-- The below content is automatically added from ./../apiExamples/overview.html -->
  <auro-tail tail="AS" badge="oneworld"></auro-tail>
  <auro-tail tail="HA" size="lg"></auro-tail>
  <auro-tail-group layout="horizontal" size="lg" style="--ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail-group layout="diagonal" size="sm">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail tail="PR" size="xl" variant="outline"></auro-tail>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/overview.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/overview.html -->

```html
<auro-tail tail="AS" badge="oneworld"></auro-tail>
<auro-tail tail="HA" size="lg"></auro-tail>
<auro-tail-group layout="horizontal" size="lg" style="--ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail-group layout="diagonal" size="sm">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail tail="PR" size="xl" variant="outline"></auro-tail>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
