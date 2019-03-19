import config from "./config.js";
import buildProductsModel from "./buildProductsModel.js";
import getProductsHtml from "./getProductsHtml.js";
import getStylesheetHtml from "./getStylesheetHtml.js";
import LazyLoad from "https://cdn.jsdelivr.net/npm/vanilla-lazyload@11.0.5/dist/lazyload.esm.js";

const products = buildProductsModel(config);

const $stylesheet = document.getElementById("generatedStylesheet");
$stylesheet.innerHTML = getStylesheetHtml(config);

const $products = document.querySelector(".products");
$products.innerHTML = getProductsHtml(products);

// Show page
document.body.classList.remove("hide");

const pageLL = new LazyLoad({
	elements_selector: ".lazy"
});
