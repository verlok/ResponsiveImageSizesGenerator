const productStyleTemplate = widthPercent => `.product {
	width: ${widthPercent}%;
}`;
export const productMediaQueries = media =>
	media.reduce(
		(previousHtml, mediaQ) =>
			previousHtml + "\n" + mediaQueryTemplate(mediaQ),
		""
	);

export const productHoldHeight = settings => {
	return `.product-images {
		padding-bottom: ${100 / settings.imageRatio}%;
	}`;
};

export const maxContainerWidth = settings => {
	return `.container {
		max-width: ${settings.maxWidth}px;
	}`;
};
const mediaQueryTemplate = mediaQ => {
	const { minWidth, columns } = mediaQ;
	const compiledStyleTemplate = productStyleTemplate(100 / columns);
	return minWidth
		? `@media (min-width: ${minWidth}px) {${compiledStyleTemplate}}`
		: compiledStyleTemplate;
};
