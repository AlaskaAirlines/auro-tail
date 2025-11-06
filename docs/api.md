# auro-tail-group

The auro-tail-group element displays multiple auro-tail elements in a grouped layout.

### Properties & Attributes

| Properties  | Attributes   | Type                         | Default      | Description                                                                                |
| ----------- | ------------ | ---------------------------- | ------------ | ------------------------------------------------------------------------------------------ |
| borderColor | border-color | string \| undefined          | undefined    | Sets the border color for all child tails in the group. Does not apply to diagonal layout. |
| layout      | layout       | 'horizontal' \| 'diagonal'   | 'horizontal' | Sets the layout direction for the group.                                                   |
| size        | size         | 'xs' \| 'sm' \| 'md' \| 'lg' | 'lg'         | Sets the size for all child tails in the group.                                            |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

---

# auro-tail

The auro-tail element displays Alaska, Hawaiian, and partner airline tail graphics for consistent visual representation across Auro applications.

### Properties & Attributes

| Properties          | Attributes   | Type                                          | Default   | Description                                                                         |
| ------------------- | ------------ | --------------------------------------------- | --------- | ----------------------------------------------------------------------------------- |
| badge               | badge        | string \| undefined                           | undefined | Sets the badge type to display (e.g., 'oneworld').                                  |
| badgeConfig         |              |                                               |           | Returns badge config when eligible.                                                 |
| borderColor         | border-color | string \| undefined                           | undefined | Sets the border color around the tail.                                              |
| borderWidth         | border-width | string \| undefined                           | undefined | Sets the border width around the tail.                                              |
| hasBorder           |              |                                               |           | Checks if tail has border properties defined.                                       |
| href                | href         | string \| undefined                           | undefined | Sets the href for the tail.                                                         |
| isInGroup           |              |                                               |           | Checks if this tail is inside an auro-tail-group element.                           |
| isInHorizontalGroup |              |                                               |           | Checks if this tail is in a horizontal group layout.                                |
| labelTypeClass      |              |                                               |           | Gets the appropriate CSS type class based on tail size.                             |
| outline             | outline      | boolean                                       | false     | Renders the tail with an outline style.                                             |
| shouldShowLink      |              |                                               |           | Checks if the tail should display as a clickable link.                              |
| size                | size         | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' | 'lg'      | Sets the size of the tail.                                                          |
| tail                | tail         | string                                        | 'AS'      | Sets the airline tail based on the tail codes used in auro-icon (e.g., AS, HA, PR). |
| variant             |              |                                               |           | Gets the carrier variant based on the current tail code.                            |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### Events

| Name       | Description                               |
| ---------- | ----------------------------------------- |
| href-click | Fired when the auro-hyperlink is clicked. |