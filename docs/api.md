# auro-tail

The auro-tail element displays Alaska, Hawaiian, and partner airline tail graphics for consistent visual representation across Alaska applications.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                | Default   | Description                                                                               |
| ---------- | ---------- | --------- | ------------------- | --------- | ----------------------------------------------------------------------------------------- |
| badge      | badge      |           | string \| undefined | undefined | Sets the badge type to display (e.g., `oneworld`).                                        |
| href       | href       |           | string \| undefined | undefined | Sets the href for the tail.                                                               |
| size       | size       |           | string              | 'lg'      | Sets the size of the tail. Valid values: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`              |
| tail       | tail       |           | string              | 'AS'      | Sets the airline tail based on the tail codes used in auro-icon (e.g., `AS`, `HA`, `PR`). |
| variant    | variant    |           | string \| undefined | undefined | Sets the visual variant of the tail. Valid values: `outline`                              |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### Events

| Name       | Description                               |
| ---------- | ----------------------------------------- |
| href-click | Fired when the auro-hyperlink is clicked. |

# auro-tail-group

The auro-tail-group element displays multiple auro-tail elements in a grouped layout.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type   | Default      | Description                                                                          |
| ---------- | ---------- | --------- | ------ | ------------ | ------------------------------------------------------------------------------------ |
| layout     | layout     |           | string | 'horizontal' | Sets the layout direction for the group. Valid values: `horizontal`, `diagonal`      |
| size       | size       |           | string | 'lg'         | Sets the size for all child tails in the group. Valid values: `xs`, `sm`, `md`, `lg` |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |