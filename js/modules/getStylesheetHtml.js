import {
	productMediaQueries,
	maxContainerWidth,
	blurryImages,
	productHoldHeight
} from "../templates/style.js";

export default settings =>
	maxContainerWidth(settings) +
	productHoldHeight(settings) +
	blurryImages(settings) +
	productMediaQueries(settings.media);
