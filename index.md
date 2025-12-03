<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Auro Tail

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-tail>` custom element displays Alaska, Hawaiian, and partner airline tail graphics for consistent visual representation across Alaska applications.
<!-- AURO-GENERATED-CONTENT:END --> 

 ## Use cases

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

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/overview.html) -->
  <!-- The below content is automatically added from ./../apiExamples/overview.html -->
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA" size="lg" badge="oneworld"></auro-tail>
  <auro-tail-group layout="horizontal" size="lg" style="--ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail-group layout="diagonal" size="sm">
    <auro-tail tail="AS"></auro-tail>
    <auro-tail tail="HA"></auro-tail>
  </auro-tail-group>
  <auro-tail tail="PR" size="xl" variant="outline" style="--ds-auro-tail-border-width: 3px; --ds-auro-tail-border-color: red"></auro-tail>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/overview.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/overview.html -->

```html
<auro-tail tail="AS"></auro-tail>
<auro-tail tail="HA" size="lg" badge="oneworld"></auro-tail>
<auro-tail-group layout="horizontal" size="lg" style="--ds-auro-tail-border-color: var(--ds-basic-color-brand-primary)">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail-group layout="diagonal" size="sm">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
<auro-tail tail="PR" size="xl" variant="outline" style="--ds-auro-tail-border-width: 3px; --ds-auro-tail-border-color: red"></auro-tail>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-tail` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroTail.register(name)` method and pass in a unique name.

```js
import { AuroTail, AuroTailGroup }  from '@aurodesignsystem/auro-tail/class';

AuroTail.register();
AuroTailGroup.register();

AuroTail.register("custom-tail");
AuroTailGroup.register("custom-tail-group");
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-tail>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../apiExamples/custom.html -->
  <custom-tail tail="AS" size="2xl"></custom-tail>
  <custom-tail-group size="lg">
    <custom-tail tail="HA"></custom-tail>
    <custom-tail tail="DL"></custom-tail>
  </custom-tail-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/custom.html -->

```html
<custom-tail tail="AS" size="2xl"></custom-tail>
<custom-tail-group size="lg">
  <custom-tail tail="HA"></custom-tail>
  <custom-tail tail="DL"></custom-tail>
</custom-tail-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
