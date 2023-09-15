# Measurements

## Percentage Units

This is the only option available when trying to create flexible columns within an overall grid.

```css

@media (min0width:45em)
{

	.w-4col { width: 100%; }
	.w-3col { width: 74.5%; }
	.w-2col { width: 49%; }
	.w-1col { width: 23.5%; }

}

```

## EM Units

These are used to help define **font-size** and **padding** elements.

These units are very useful because they scale with the font size.

```css

h1 { font-size: 3em; }
 .row-padding { padding: 2.5em 0; }

```

Most browsers display the default font size at approximately **_16px_**. With CSS, we will increase this to the equivalent of **_18px_**.

The quickest way to do this is to set the body element with a slightly larger font-size, and this new font-size will be inherited by all descendant elements.

```css

body
{
	margin: 0;
	padding: 0;
	font: 1.125em/1.4 'Kameron', Georgia,'Times New Roman', Times, serif;
}

/* 16 x 1.125 = 18 */

```
This means that in most cases, 1em will now equal 18px - unless it is overwritten at some point.

# Slowcube Layout Example

We will start with the same four, two and one column grid that we set up for the last lesson (with some minor tweaks) and then add to it.

There are two aims:

1. abstract this alyout as much as possible
1. tweak aspects of the layout so that they work at different screen sizes
 

The goal is to **abstract as much as possible** so that components can be reused.

Following this principle the following will be possible:

* Greater flexibility
* Less CSS
* Faster development
* Easiser maintenance

## Containers

Two different widths for the content inside each row:

1. container - this is a wide width container
1. container-narrow - this is a narrow width container

```html
<!-- HTML markup -->

<div class="row">
	<div class="container">Header</div>
</div>
<div class="row">
	<div class="container-narrow">Banner</div>
</div>
<div class="row">
	<div class="container-narrow">Intro</div>
</div>
<div class="row">
	<div class="container">Grids</div>
</div>
```

The css will be formatted as follows:

```css

/* CSS rule */

.container { max-width: 44em; }
.container-narrow { max-width: 33em; }

```

## Individual Rows

Each row seems to be unique (i.e., unique color, background-color, padding, and text-styles). So each row could have it's own unique class, in addition to the row class.

For example:

| Unique Row Name | Unique Row Description     |
|-------------|--------------------------------|
| row-header  | The header row                 |
| row-banner  | The banner row                 |
| row-intro   | The intro row                  |
| row-grid    | The grid row                   |
| row-feature | The feature row                |
| row-footer  | The footer row                 |

Here are only six reusable components, but we may need more. Row concepts could be distinguished further into padding, background-color and special needs.

By mixing and matching these components as needed, the developer gains more flexibility and further control of the layout.

For example:

| Unique Row Component | Unique Row Component Description|
|------|------|
|row-padding-small | Small row padding  |
|row-padding       | Medium row padding |
|row-padding-large | Large row padding  |
|row-gray          | Gray row background color  |
|row-white         | White row background color |
|row-black         | Black row background color |


```html

<!-- HTML Markup -->

<div class="row row-padding-small row-white">
<div class="row row-padding-large row-banner">
<div class="row row-padding row-black">
<div class="row row-padding row-gray">		
<div class="row row-padding row-white">
<div class="row row-padding row-black">	

```

This type of approach, historically, was considered bad practice due to the large number of class names. In today's development circles, this is considered best practice.

## Selectors

For styling these elements, you could use the following selectors:


```css

/* flexible selector */

.row-banner h1 { }
.row-black h2 { }
.row-black p { }


```

How do we leverage using a different element in these instances at a future point in time?

It is safer and more flexible to use **classes** in lieu of descendant selectors.

```css 

/* flexible selectors */

.banner-text { }
.intro-text { }
.footer-text { }

```

## Increasing Padding and Text Size

In many instances in the slowcube layout we need to increase the top and bottom padding options at medium and wide screen sizes.

For the **row-padding-small** the padding will always be small.

```css

1em 

/* 18px * 1 = 18px */

```

For the **row-padding** we need to increase the top and bottom padding in the following ways:

```css

2em 

/* 18px * 2 = 36px ------ small screen */

2.5em 

/* 18px * 2.5 = 45px ------ medium screen */

3em 

/* 18px * 3 = 54px ------ wide screen */



```


For the **row-padding-large** we need to increase the top and bottom padding in the following ways:

```css

2em 

/* 18px * 2 = 36px ------ small screen */

3.33333em 

/* 18px * 3.33333 = 60px ------ medium screen */

4em 

/* 18px * 4 = 72px ------ wide screen */



```

We also need to increase the **font-size** of the **banner-text**.

```css

2em 

/* 18px * 2 = 36px ------ small screen */

2.44444em 

/* 18px * 2.44444 = 44px ------ medium screen */

3em 

/* 18px * 3 = 72px ------ wide screen */



```

We also need to increase the **font-size** of the **banner-text**.

```css

1.22222em 

/* 18px * 1.22222 = 36px ------ small screen */

1.33333em

/* 18px * 1.33333 = 44px ------ medium screen */

1.5em 

/* 18px * 1.5 = 72px ------ wide screen */



```
