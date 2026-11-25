<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/README.md`
and copied to `./componentDocs/README.md` each time the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component example code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Tail

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
Displays Alaska, Hawaiian, and partner airline tail graphics for consistent visual representation across Alaska applications.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->
<!-- AURO-GENERATED-CONTENT This file is to be used for any additional content that should be included in the README.md which is specific to this component. -->
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
`<auro-tail>` can be used to:

- Display airline branding in booking flows
- Show partner airline liveries or indicate operating carrier
- Create visual representations of relationships
- Group multiple airlines together in a unified display

### Features

- **Alaska, Hawaiian, and partner airlines**: Logos provided by the `<auro-icon>` repository
- **Flexible sizing**: Offers a flexible size scale to accommodate various design requirements
- **Group layout**: Display multiple tails together in paired layouts
- **Badge support**: Display badges, such as the OneWorld Alliance badge
- **Custom borders**: Add colored borders with customizable widths
- **Clickable links**: Make tails clickable with `<auro-hyperlink>`
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-tail/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-tail/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-tail?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-tail)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-tail?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

<pre class="language-shell"><code class="language-shell">$ npm i @aurodesignsystem/auro-tail</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Import the component in each project that uses `<auro-tail>`.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

<pre class="language-js"><code class="language-js">import "@aurodesignsystem/auro-tail";</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
If your project can't process JS assets, use the pre-processed assets. Legacy browsers, such as IE11, aren't supported.

<pre class="language-html"><code class="language-html">&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-tail@latest/+esm"&gt;&lt;/script&gt;</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

## Basic example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-tail tail="AS"&gt;&lt;/auro-tail&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->

## Custom component registration for version management

Every Auro component has two key parts: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

Installing the component as described in the Install section imports the class and registers the component globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), register the class manually under a custom element name to avoid conflicts.

To do this, import only the component class and call the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

<pre class="language-js"><code class="language-js">// Import the classes only
import { AuroTail, AuroTailGroup } from '@aurodesignsystem/auro-tail/class';
// Register with custom names if desired
AuroTail.register('custom-tail');
AuroTailGroup.register('custom-tail-group');</code></pre>

This registers new custom elements `<custom-tail>` and `<custom-tail-group>` that behave exactly like `<auro-tail>` and `<auro-tail-group>`, so both sets can coexist on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
<!-- The below content is automatically added from ./apiExamples/custom.html -->
<custom-tail tail="AS" size="2xl"></custom-tail>
<custom-tail-group size="lg">
<custom-tail tail="HA"></custom-tail>
<custom-tail tail="AA"></custom-tail>
</custom-tail-group>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

<pre class="language-html"><code class="language-html">&lt;custom-tail tail="AS" size="2xl"&gt;&lt;/custom-tail&gt;
&#10;&lt;custom-tail-group size="lg"&gt;
  &lt;custom-tail tail="HA"&gt;&lt;/custom-tail&gt;
  &lt;custom-tail tail="AA"&gt;&lt;/custom-tail&gt;
&lt;/custom-tail-group&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
