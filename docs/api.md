# auro-tail

The `auro-tail` custom element displays Alaska, Hawaiian, and partner airline tail graphics for consistent visual representation across Alaska applications.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                          | Default | Description                                        |
| ---------- | ---------- | --------- | --------------------------------------------- | ------- | -------------------------------------------------- |
| badge      | badge      |           | string                                        |         | Sets the badge type to display (e.g., `oneworld`). |
| href       | href       |           | string                                        |         | Sets the href for the tail.                        |
| size       | size       |           | `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `2xl` | `lg`    | Sets the size of the tail.                         |
| tail       | tail       |           | string                                        | `AS`    | Sets the airline tail based on IATA airline codes. |
| variant    | variant    |           | `outline`                                     |         | Sets the visual variant of the tail.               |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

# auro-tail-group

The `auro-tail-group` element displays multiple `auro-tail` elements in a grouped layout.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                         | Default      | Description                                     |
| ---------- | ---------- | --------- | ---------------------------- | ------------ | ----------------------------------------------- |
| layout     | layout     |           | `horizontal` \| `diagonal`   | `horizontal` | Sets the layout direction for the group.        |
| size       | size       |           | `xs` \| `sm` \| `md` \| `lg` | `lg`         | Sets the size for all child tails in the group. |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |