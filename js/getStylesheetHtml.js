import { mediaQueryTemplate } from "./templates/style.js";

const productMediaQueries = mediaConfig =>
	mediaConfig.reduce(
		(previousHtml, mediaQ) =>
			previousHtml + "\n" + mediaQueryTemplate(mediaQ),
		""
	);

const productHoldHeight = config => {
	return `.product-images {
		padding-bottom: ${100 / config.imageRatio}%;
	}`;
};

export default config => {
	return productHoldHeight(config) + "\n" + productMediaQueries(config.media);
};
