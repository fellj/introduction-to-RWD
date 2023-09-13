# Fluid Images

## Introduction

Fluid inline images can be **created using a single, powerful CSS declaration**.


### Example 1: Fluid image max size
```css


# No image can be resized greater than it's full size
img
{

max-width: 100%;

}



```

### Principle 1: Inline images and white space gap underneath

The gap represents the portion under the baseline. This is solved by ```vertical:align-middle``` declaration.

### Example 1
```css

# No image can be resized greater than it's full size
img
{

max-width: 100%;
vertical-align:middle;
border: 0;

}

>

```

### Principle 2: Image rendering improves with image-rendering property

The possible values for the ```image-rendering``` property are:

- optimizeQuality - higher quality
- optimizedSpeed - lower quality

```css

img
{

image-rendering: optimizeQuality;

}


```

