const getViewportColumnsMap = config => {
	var ret = {};
	var m = 0;
	var v = 0;
	const media = config.media;
	const vports = config.viewportsToOptimizeFor;
	var nextTick = media[m + 1].minWidth;

	vports.forEach(vport => {
		if (vport.width >= nextTick) {
			m += 1;
			nextTick = media[m + 1] ? media[m + 1].minWidth : 9999;
		}
		ret[vport.width] = media[m].columns;
	});

	console.log(ret);
	return ret;
};

const getSizes_media = mediaQuery =>
	mediaQuery.minWidth ? `(min-width: ${mediaQuery.minWidth}px)` : "";

const getSizes_vw = mediaQuery => {
	if (!mediaQuery.columns) return "100vw";
	const percentage = 100 / mediaQuery.columns;
	const vwValue = Math.ceil(percentage * 100) / 100;
	return vwValue + "vw";
};

const getSizes = config => {
	return config.media
		.slice()
		.reverse()
		.map(
			mediaQuery =>
				getSizes_media(mediaQuery) + " " + getSizes_vw(mediaQuery)
		);
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

const getSrc = (position, widths, imageRatio) => {
	const width = widths[widths.length - 1];
	const descriptor = width + "w";
	const text = position + "-" + descriptor;
	return getImageUrl(width, imageRatio, text);
};

export default config => {
	var products = [];
	var imagesWidths = getCalculatedImagesWidths(config);
	var sizes = getSizes(config);

	for (let i = 0; i < config.numberOfProducts; i++) {
		products.push({
			alt: "Product " + (i + 1) + " image",
			src: getSrc(i + 1, imagesWidths, config.imageRatio),
			srcset: getSrcSet(i + 1, imagesWidths, config.imageRatio),
			sizes: sizes,
			name: "Product " + (i + 1)
		});
	}

	console.log(products);

	return products;
};
