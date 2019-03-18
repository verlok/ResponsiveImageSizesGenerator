import config from "./config.js";
import buildProductsModel from "./buildProductsModel.js";
import { productTemplate } from "./templates/product.js";

// MODEL CREATION

var products = buildProductsModel(config);

// DOM CREATION

var $products = document.querySelector(".products");
$products.innerHTML = products.reduce((previousHtml, product) => {
	return previousHtml + productTemplate(product);
}, "");

// STYLE CREATION

var $stylesheet = document.getElementById("generatedStylesheet");
$stylesheet.innerHTML = `.product {
	width: 50%;
}
@media (min-width: 768px) {
	.product {
		width: 33.333%;
	}
}
@media (min-width: 1024px) {
	.product {
		width: 25%;
	}
}`;
