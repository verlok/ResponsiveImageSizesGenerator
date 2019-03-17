# ResponsiveImageSizesGenerator

Image sizes generator for optimized responsive images on product listing pages (and detail page)

This web app will:

- Generate the basic stylesheet for the grid and the images
- Generate the responsive image tags with the best `src`, `srcset` and `sizes`
- Integrate LazyLoad, but only from the Nth image on

## Idea

Based on the configuration and the settings, the webapp will use javascript to do the math and generate the recommended HTML and CSS.

It will be possible to easily copy the HTML and the CSS in order to use it on your website.

## Configurations (config.json)

- List of devices to optimize for, for each one
  - Viewport
  - Pixel density
- List of media queries, for each one
  - Number of columns
- Image ratio
- Image slot padding

(Only on version 2)

- Image slot margin, if any
- Max container width, if any

## Settings (UI)

- Stretched images (blurry images) / Optimized image dimensions (crisper images)
