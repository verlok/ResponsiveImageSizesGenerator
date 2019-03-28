import config from "/config.js";
import { watchForUiSettings, getMergedSettings } from "./modules/uiSettings.js";
import generateDom from "./modules/generateDom.js";
import LazyLoad from "https://cdn.jsdelivr.net/npm/vanilla-lazyload@11.0.6/dist/lazyload.esm.js";

var lazyLoad = new LazyLoad({
	elements_selector: ".lazy"
});

const updatePage = () => {
	var settings = getMergedSettings(config);
	generateDom(settings);
	lazyLoad.update();
};

watchForUiSettings(updatePage);
updatePage();

// Show page
document.body.classList.remove("hide");
