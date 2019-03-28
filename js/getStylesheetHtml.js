import {
	productMediaQueries,
	maxContainerWidth,
	productHoldHeight
} from "./templates/style.js";

export default config =>
	maxContainerWidth(config) +
	"\n" +
	productHoldHeight(config) +
	"\n" +
	productMediaQueries(config.media);
