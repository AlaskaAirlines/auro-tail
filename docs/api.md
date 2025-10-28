# auro-tail

The auro-tail element displays Alaska, Hawaiian, and partner airline tail graphics for consistent visual representation across Auro applications.

## Properties

| Property              | Attribute      | Modifiers | Type                                  | Default     | Description                                      |
|-----------------------|----------------|-----------|---------------------------------------|-------------|--------------------------------------------------|
| `badge`               | `badge`        |           | `String`                              | "undefined" | Sets the badge type to display (e.g., 'oneworld'). Only shown when not in a group. |
| `badgeConfig`         |                | readonly  | `BadgeConfig \| undefined`            |             | Returns badge config when eligible (not grouped and size supports badges). |
| `borderColor`         | `border-color` |           | `String`                              | "undefined" | Sets the border color around the tail.           |
| `borderWidth`         | `border-width` |           | `String`                              | "undefined" | Sets the border width around the tail.           |
| `hasBorder`           |                | readonly  | `boolean`                             |             | Checks if tail has border properties defined.    |
| `href`                | `href`         |           | `String`                              | "undefined" | When provided, makes the tail clickable using auro-hyperlink. |
| `isInGroup`           |                | readonly  | `boolean`                             |             | Checks if this tail is inside an auro-tail-group element. |
| `isInHorizontalGroup` |                | readonly  | `boolean`                             |             | Checks if this tail is in a horizontal group layout. |
| `labelTypeClass`      |                | readonly  | `string`                              |             | Gets the appropriate CSS type class based on tail size. |
| `outline`             | `outline`      |           | `Boolean`                             | false       | Renders the tail with an outline style.          |
| `shouldShowLink`      |                | readonly  | `boolean`                             |             | Checks if the tail should display as a clickable link. |
| `size`                | `size`         |           | `'xs'\|'sm'\|'md'\|'lg'\|'xl'\|'2xl'` | "lg"        | Sets the size of the tail.                       |
| `tail`                | `tail`         |           | `String`                              | "AS"        | Sets the airline tail based on the tail codes used in auro-icon (e.g., AS, AA, PH). |
| `variant`             |                | readonly  | `"aag" \| "oa"`                       |             | Gets the carrier variant based on the current tail code, mapping tail codes to carrier types for styling purposes. |

## Events

| Event        | Type                            | Description                               |
|--------------|---------------------------------|-------------------------------------------|
| `href-click` | `CustomEvent<{ href: string }>` | Fired when the auro-hyperlink is clicked. |


# auro-tail-group

The auro-tail-group element displays multiple auro-tail elements in a grouped layout.

## Properties

| Property      | Attribute      | Type                       | Default      | Description                                      |
|---------------|----------------|----------------------------|--------------|--------------------------------------------------|
| `borderColor` | `border-color` | `String`                   | "undefined"  | Sets the border color for all child tails in the group. Does not apply to diagonal layout. |
| `layout`      | `layout`       | `'horizontal'\|'diagonal'` | "horizontal" | Sets the layout direction for the group.         |
| `size`        | `size`         | `'xs'\|'sm'\|'md'\|'lg'`   | "lg"         | Sets the size for all child tails in the group.  |
