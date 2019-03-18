import config from "./config.js";
import buildProductsModel from "./buildProductsModel.js";
import { productTemplate } from "./templates/product.js";
import { mediaQueryTemplate } from "./templates/style.js";

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
$stylesheet.innerHTML = config.media.reduce(
	(previousHtml, mediaQ) => previousHtml + "\n" + mediaQueryTemplate(mediaQ),
	""
);
