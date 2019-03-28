import config from "/config.js";

import { watchForUiSettings, getMergedSettings } from "./modules/uiSettings.js";
import generateDom from "./modules/generateDom.js";
import LazyLoad from "https://cdn.jsdelivr.net/npm/vanilla-lazyload@11.0.6/dist/lazyload.esm.js";

var settings = getMergedSettings(config);
watchForUiSettings(() => {
	settings = getMergedSettings(config);
	generateDom(settings);
});

generateDom(settings);

// Show page
document.body.classList.remove("hide");

const pageLL = new LazyLoad({
	elements_selector: ".lazy"
});
