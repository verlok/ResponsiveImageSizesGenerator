import {
	productMediaQueries,
	maxContainerWidth,
	productHoldHeight
} from "./templates/style.js";

export default config => {
	return (
		maxContainerWidth(config) +
		"\n" +
		productHoldHeight(config) +
		"\n" +
		productMediaQueries(config.media)
	);
};
