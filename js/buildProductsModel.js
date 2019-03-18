const getViewportColumnsMap = config => {
	var ret = {};
	let mediaIndex = 0;
	let viewportIndex = 0;

	/// TODO: GENERATE MAP

	return {
		320: 2,
		375: 2,
		414: 2,
		768: 3,
		1024: 4,
		1280: 4,
		1366: 4,
		1440: 4
	};
};

const getSizes_media = mediaQuery =>
	mediaQuery.minWidth ? `(min-width: ${mediaQuery.minWidth})` : "";

const getSizes_vw = mediaQuery =>
	mediaQuery.columns ? `${100 / mediaQuery.columns}vw` : "100vw";

const getSizes = config => {
	var ret = [];
	config.media
		.reverse()
		.forEach(mediaQuery =>
			ret.push(getSizes_media(mediaQuery) + " " + getSizes_vw(mediaQuery))
		);
	return ret.join();
};

const getCalculatedImagesWidths = config => {
	var viewportColumnsMap = getViewportColumnsMap(config);
	var imageWidths = config.viewportsToOptimizeFor
		.map(viewport =>
			Math.round(
				(viewport.width / viewportColumnsMap[viewport.width]) *
					viewport.pixelDensity
			)
		)
		.sort();
	return [...new Set(imageWidths)]; // <-- Dedupe
};

const baseImageUrl = `https://via.placeholder.com`;

const getImageUrl = (width, imageRatio, text) => {
	const height = Math.round(width / imageRatio);
	return `${baseImageUrl}/${width}x${height}?text=${text}`;
};

const getSrcSet = (position, widths, imageRatio) => {
	return widths
		.map(width => {
			const descriptor = width + "w";
			const text = position + "-" + descriptor;
			return getImageUrl(width, imageRatio, text) + " " + descriptor;
		})
		.join();
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
	var sizes = getSizes(config);

	for (let i = 0; i < config.numberOfProducts; i++) {
		products.push({
			alt: "Product " + (i + 1) + " image",
			src: getSrc(i + 1, imagesWidths),
			srcset: getSrcSet(i + 1, imagesWidths, config.imageRatio),
			sizes: sizes,
			name: "Product " + (i + 1)
		});
	}

	console.log(products);

	return products;
};
