import {
	productMediaQueries,
	maxContainerWidth,
	imagesWidth,
	productHoldHeight
} from "../templates/style.js";

export default settings =>
	maxContainerWidth(settings) +
	productHoldHeight(settings) +
	imagesWidth(settings) +
	productMediaQueries(settings.media);
