const getCalculatedImagesWidths = config => {
	var imageWidths = config.viewportsToOptimizeFor
		.map(viewport =>
			Math.round(
				(viewport.width / viewport.columns) * viewport.pixelDensity
			)
		)
		.sort();
	return [...new Set(imageWidths)]; // <-- Dedupe
};

const baseImageUrl = `https://via.placeholder.com`;
const imageRatio = 0.78;

const getImageUrl = (width, text) => {
	const height = Math.round(width / imageRatio);
	return `${baseImageUrl}/${width}x${height}?text=${text}`;
};

const getSrcSet = (position, widths) => {
	return widths
		.map(width => {
			const descriptor = width + "w";
			const text = position + "-" + descriptor;
			return getImageUrl(width, text) + " " + descriptor;
		})
		.join(", ");
};

const getSrc = (position, widths) => {
	const width = widths[widths.length - 1];
	const descriptor = width + "w";
	const text = position + "-" + descriptor;
	return getImageUrl(width, text);
};

export default config => {
	var products = [];
	var imagesWidths = getCalculatedImagesWidths(config);

	for (let i = 0; i < config.numberOfProducts; i++) {
		products.push({
			alt: "Product " + (i + 1) + " image",
			src: getSrc(i + 1, imagesWidths),
			srcset: getSrcSet(i + 1, imagesWidths),
			name: "Product " + (i + 1)
		});
	}

	console.log(products);

	return products;
};
