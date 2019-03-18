import config from "./config.js";
import buildProductsModel from "./buildProductsModel.js";
import getProductsHtml from "./getProductsHtml.js";
import getStylesheetHtml from "./getStylesheetHtml.js";

// MODEL CREATION

const products = buildProductsModel(config);

// DOM CREATION

const $products = document.querySelector(".products");
$products.innerHTML = getProductsHtml(products);

// STYLE CREATION

const $stylesheet = document.getElementById("generatedStylesheet");
$stylesheet.innerHTML = getStylesheetHtml(config);
