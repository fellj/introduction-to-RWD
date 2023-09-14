# Measurements

## Percentage Units



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

These units are very useful because they scale with the font size.

```css

h1 { font-size: 3em; }
 .row-padding { padding: 2.5em 0; }

```

Most browsers display the default font size at approximately 16px. With CSS, we will increase this to the equivalent of 18px.

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
 

The goal is to abstract as much as possible so that components can be reused.
