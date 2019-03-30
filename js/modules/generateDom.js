import buildProductsModel from "./buildProductsModel.js";
import getProductsHtml from "./getProductsHtml.js";
import getStylesheetHtml from "./getStylesheetHtml.js";

const $stylesheet = document.getElementById("generatedStylesheet");
const $products = document.querySelector(".products");

export default settings => {
	const products = buildProductsModel(settings);
	$stylesheet.innerHTML = getStylesheetHtml(settings);
	$products.innerHTML = getProductsHtml(settings, products);
};
