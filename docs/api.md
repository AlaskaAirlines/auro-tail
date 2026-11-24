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
```html
<auro-tail tail="AS"></auro-tail>
```

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

| Name      | Relevant when | Description                                                                |
| --------- | ------------- | -------------------------------------------------------------------------- |
| (default) | `href`        | Text label shown below the tail when `href` is set. Defaults to "Airline". |

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
```html
<auro-tail-group layout="horizontal">
  <auro-tail tail="AS"></auro-tail>
  <auro-tail tail="HA"></auro-tail>
</auro-tail-group>
```

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