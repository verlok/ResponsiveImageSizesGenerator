import {
	productMediaQueries,
	maxContainerWidth,
	productHoldHeight
} from "./templates/style.js";

export default settings =>
	maxContainerWidth(settings) +
	"\n" +
	productHoldHeight(settings) +
	"\n" +
	productMediaQueries(settings.media);
