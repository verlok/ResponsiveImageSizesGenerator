const productStyleTemplate = widthPercent => `.product {
	width: ${widthPercent}%;
}`;
export const productMediaQueries = mediaConfig =>
	mediaConfig.reduce(
		(previousHtml, mediaQ) =>
			previousHtml + "\n" + mediaQueryTemplate(mediaQ),
		""
	);

export const productHoldHeight = config => {
	return `.product-images {
		padding-bottom: ${100 / config.imageRatio}%;
	}`;
};

export const maxContainerWidth = config => {
	return `.container {
		max-width: ${config.maxWidth}px;
	}`;
};
const mediaQueryTemplate = mediaQ => {
	const { minWidth, columns } = mediaQ;
	const compiledStyleTemplate = productStyleTemplate(100 / columns);
	return minWidth
		? `@media (min-width: ${minWidth}px) {${compiledStyleTemplate}}`
		: compiledStyleTemplate;
};
