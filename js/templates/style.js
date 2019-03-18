const productStyleTemplate = widthPercent => `.product {
	width: ${widthPercent}%;
}`;
export const mediaQueryTemplate = mediaQ => {
	const { minWidth, columns } = mediaQ;
	const compiledStyleTemplate = productStyleTemplate(100 / columns);
	return minWidth
		? `@media (min-width: ${minWidth}px) {${compiledStyleTemplate}}`
		: compiledStyleTemplate;
};
