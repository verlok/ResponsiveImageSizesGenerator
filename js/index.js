import config from "./config.js";
import productsModelBuilder from "./productsModelBuilder.js";

var products = productsModelBuilder(config);

// DOM CREATION

var $products = document.querySelector(".products");
import { productTemplate } from "./templates/product.js";
$products.innerHTML = products.reduce((previousHtml, product) => {
	return previousHtml + productTemplate(product);
}, "");
