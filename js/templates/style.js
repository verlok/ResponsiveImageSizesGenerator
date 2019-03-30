const productStyleTemplate = widthPercent => `.product {
	width: ${widthPercent}%;
}`;
export const productMediaQueries = media =>
	media.reduce(
		(previousHtml, mediaQ) =>
			previousHtml + "\n" + mediaQueryTemplate(mediaQ),
		""
	);

export const maxContainerWidth = settings => {
	return `.container {
		max-width: ${settings.maxWidth}px;
	}`;
};

export const imagesWidth = settings => {
	return `.product-images img { 
		${settings.blurry ? "width" : "max-width"}: 100%;
	}`;
};

const mediaQueryTemplate = mediaQ => {
	const { minWidth, columns } = mediaQ;
	const compiledStyleTemplate = productStyleTemplate(100 / columns);
	return minWidth
		? `@media (min-width: ${minWidth}px) {${compiledStyleTemplate}}`
		: compiledStyleTemplate;
};
