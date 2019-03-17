import config from "./config.js";
import buildProductsModel from "./buildProductsModel.js";
import { productTemplate } from "./templates/product.js";

var products = buildProductsModel(config);

// DOM CREATION

var $products = document.querySelector(".products");
$products.innerHTML = products.reduce((previousHtml, product) => {
	return previousHtml + productTemplate(product);
}, "");
