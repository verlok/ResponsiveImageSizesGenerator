import config from "/config.js";
import buildProductsModel from "./modules/buildProductsModel.js";
import getProductsHtml from "./modules/getProductsHtml.js";
import getStylesheetHtml from "./modules/getStylesheetHtml.js";
import { watchForUiSettings, getMergedSettings } from "./modules/uiSettings.js";
import LazyLoad from "https://cdn.jsdelivr.net/npm/vanilla-lazyload@11.0.6/dist/lazyload.esm.js";

var settings = getMergedSettings(config);
watchForUiSettings(() => {
	settings = getMergedSettings(config);
	// TODO: Regenerate DOM
});

const $stylesheet = document.getElementById("generatedStylesheet");
$stylesheet.innerHTML = getStylesheetHtml(settings);

const products = buildProductsModel(settings);
const $products = document.querySelector(".products");
$products.innerHTML = getProductsHtml(settings, products);

// Show page
document.body.classList.remove("hide");

const pageLL = new LazyLoad({
	elements_selector: ".lazy"
});
