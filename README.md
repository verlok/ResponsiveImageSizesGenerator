# ResponsiveImageSizesGenerator

Image sizes generator for optimized responsive images on product listing pages (and detail page)

This web app does:

- Generate the basic stylesheet for the grid and the images
- Generate the responsive image tags with the best `src`, `srcset` and `sizes`
- Integrate LazyLoad, but only from the Nth image on

## Idea

Based on the `config.js` configuration and the UI settings, this webapp uses javascript to calculate and generate the best HTML and CSS.

It will be possible to easily copy the HTML and the CSS in order to use it on your website.

## Configuration 

The "hard" configuration has to be placed in the `config.js` file and it's made of:

| value                  | meaning                                                                            | example     |
| ---------------------- | ---------------------------------------------------------------------------------- | ----------- |
| numberOfProducts       | the number of product to show in the listing page                                  | `20`        |
| lazyFrom               | the 0-based-index of the first image that needs to be loaded lazily                | `8`         |
| imageRatio             | the width/height ratio of the images                                               | `0.78`      |
| maxWidth               | The maximum width of the main page container                                       | `1280`      |
| viewportsToOptimizeFor | an array of viewports you want your images to be optimized for                     | (see below) |
| media                  | an array of media queries to change the number of colums you display you images in | (see below) |

### `viewportsToOptimizeFor` element detail

Each object of the `viewportsToOptimizeFor` array should have the following properties

| value        | meaning                         | example     |
| ------------ | ------------------------------- | ----------- |
| name         | the name of the viewport        | `iPhone 5S` |
| width        | the width of the viewport       | `320`       |
| pixelDensity | the pixel density of the device | `2`         |

### `media` element detail

Each object of the `media` array should have the following properties

| value    | meaning                                                                      | example |
| -------- | ---------------------------------------------------------------------------- | ------- |
| minWidth | the minimum width this media query is valid from                             | `1024`  |
| columns  | the number of columns to display at media query                              | `2`     |
| grow     | boolean value to set if the images should stop growing over this media query | `false` |

## TO DO

### Max container width*

Currently, to set a max container width, you should put "grow: false" in the last media query. 

Remember that, in order to optimize for the max container width, you must put that width and pixelRatio in the "viewportsToOptimizeFor" configuration

Is there a better way to do that?

### Image slot padding

Allow images to have internal paddings, to:

- Generate the `.product` CSS
- Optimize the `sizes`, subtracting the padding with a `calc()` 
- Consider the padding in the srcset calculation

### Settings (UI)

- Stretched images (blurry images) / Optimized image dimensions (crisper images)
- Use webP
