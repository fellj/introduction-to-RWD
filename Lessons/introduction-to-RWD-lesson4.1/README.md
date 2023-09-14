# Meta Viewport


## Viewport Meta Tag

Allows web developers to **control the viewport's size and scale.** A wide range of other mobile devices now support this element.

This element is nested within the **head** html tag.

```html

<body>
    <head>
        <meta></meta>
    </head>
</body>


```

Here us the full css definition.

```css

<meta name="viewport" content="width=device-width, initial-scale=1">

```

By default, most websites **are scaled down to fit the size of most mobile screens.** The viewport meta element allows developers to determine the width, height, initial-scale, minimum-scale and maximum-scale of the layout.

Ideally, the **initial scale** should be set to ```1``` so that the layout will be viewed as intended in all devices.

The minimum-scale and maximum-scale should be avoided. These values can present accessibility issues for some users as they are **not able to rescale the layout to suite their needs**.

## Pattern Libraries

A few years ago, many front end develoeprs approached websites and web applications as a series of **pages**.

Pagers were often **designed and built as complete entities**. This meant that page components were often closely tied to their relevant pages.

Focus has shifted to **re-usable components**. These could be the overall layout grid structure, a button, an input, a drop-down or even a pullquote.

These re-usable components are often combined into HTML/CSS pattern libraries.

These are built to resolve **commonly used interface components**.

Why use a pattern library?

- Easier to **build** sites
- Essier to **maintain** sites
- Easier to **hand over**
- Better **workflow**
- Shared **vocabulary**
- Promotes **consistency**

There are a wide range of pattern libraries today. Some have a simple purpose, such as **responsive-grid** systems.

Others are considered to be **frameworks** that are more of a full or wide-range pattern library.

Some caveats to these are:
- May not suit your project
- No need for a complex library
- Someone else's conventions
- Generic look

Should you use a pre-existing pattern library or not? It can depend on the needs of your team or how complex your site will be.

## The Grid

The following is a very simple example of a RWD grid. The grid changes depending on the width of the viewport, from narrow to medium and then wide.


| Screen Type    | Num of Columns         |
|----------------|------------------------|
|Narrow Screen   |   1 column only        |
|Medium Screen   |   2 column layout      |
|Wide Screen     |   4 column layout      |

```html

<!-- HTML markup --> 

<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col"></div>
    </div>
    <div class="row">
        <div class="col"></div>
        <div class="col"></div>
    </div>
</div>

```

```html

<!-- HTML markup (in widescreen) --> 

<div class="container">
    <div class="row">
        <div class="col w-1col m-1col"></div>
        <div class="col w-3col m-1col"></div>
    </div>
    <div class="row">
        <div class="col w-4col m-2col"></div>
    </div>
</div>

```
Before building any page layout, the first step is to try to determine if there are any **repeating patterns** within the layout.

### Pattern 1
Rows need to solve two related problems:
- Rows must clear both rows (clear:both;)
- Must contain any floated items ( overflow:hidden;)

### Pattern 2
Narrow columns that look like rows 
- Need to wrap around floated items (overflow:hidden;)
- Needs some space below to space from column above (margin-bottom: 1em;)

### Pattern 3
Medium screen grids have two and one column containers
- float to the left (float:left;)
- margin right

### Pattern 4
Wide screen grids have four, three, two and one column containers
- Have a gutter of 2%
- Percents are fluid grids not based on pixel (px) or em size


# Breakpoints

Breakpoints are locations where the grid will change from a single column (narrow) to two columns (medium) and then four columns (wide).

|Patterns  | Styles         |
|----------|----------------|
|Narrow    | Up to 30 em    |
|Medium    | 30 em to 45 em |
|Wide      | 45 and above   |