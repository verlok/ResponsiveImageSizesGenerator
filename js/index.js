import config from "./config.js";
import buildProductsModel from "./buildProductsModel.js";
import { productTemplate } from "./templates/product.js";

// MODEL CREATION

const products = buildProductsModel(config);

// DOM CREATION

const $products = document.querySelector(".products");
$products.innerHTML = products.reduce(
	(previousHtml, product) => previousHtml + "\n" + productTemplate(product),
	""
);

// STYLE CREATION

const $stylesheet = document.getElementById("generatedStylesheet");
const styleTemplate = widthPercent => `.product {
	width: ${widthPercent}%;
}`;
const mediaTemplate = mediaQ => {
	const { minWidth, columns } = mediaQ;
	const compiledStyleTemplate = styleTemplate(100 / columns);
	return minWidth
		? `@media (min-width: ${minWidth}px) {${compiledStyleTemplate}}`
		: compiledStyleTemplate;
};

$stylesheet.innerHTML = config.media.reduce(
	(previousHtml, mediaQ) => previousHtml + "\n" + mediaTemplate(mediaQ),
	""
);
