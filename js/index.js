import config from "./config.js";
import productsModelBuilder from "./productsModelBuilder.js";
import { productTemplate } from "./templates/product.js";

var products = productsModelBuilder(config);

// DOM CREATION

var $products = document.querySelector(".products");
$products.innerHTML = products.reduce((previousHtml, product) => {
	return previousHtml + productTemplate(product);
}, "");
