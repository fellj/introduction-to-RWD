# Fluid Background Images

##

### Background size property

**contain** - scales the image while keeping it's aspect ratio. Entire image fits inside the background area.

**cover** - scales the image while keeping it's aspect ratio to the smallest size that will completely cover the background area.

```css

div { background-size: cover; }

```

### There are two methods for creating fluid background images

**Fixed-height method** - Place background images inside an html container. Sets a height on the container, and lets the background image "crop" as the layout is reduced in width

**Scaled-height method**

### Example 1

```html

<!-- HTML markup -->
<div class="responsive-image1"></div>
<div class="responsive-image2"></div>

```
##
```css

/* CSS rule */

.responsive-image1
{
    width: 100%;
    height: 300px;
    background-image: url(background-image.jpg);
    background-size: cover;
    background-position: center;


}

```

### Empty Containers

A div element with not content inside will spread to the width of it's parent container. If not height is defined, it will collapse and have no height.

Padding is added to the overall height. Using percentage values for padding will be based on the total width of the div. 

This helps the div become scaleable.

### Step 1: Calculate the divisor between height and width to get a ratio

define1 the ratio between width and height
<height> + <width> = <ratio>
300px + 600px = 0.5 = 50%

### Step 2: Add this percentage as padding to the container

The div will always remain in the correct aspect ratio, no matter how wide or narrow the container becomes

##
```css

/* CSS rule */

.responsive-image2
{
    width: 100%;
    /* height: 300px; */
    padding-bottom: 50%;
    background-image: url(background-image.jpg);
    background-size: cover;
    background-position: center;


}

```