import {
	productMediaQueries,
	maxContainerWidth,
	imagesWidth
} from "../templates/style.js";

export default settings =>
	maxContainerWidth(settings) +
	imagesWidth(settings) +
	productMediaQueries(settings.media);
