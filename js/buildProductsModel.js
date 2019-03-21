const getNextMqMinWidth = (media, m) => {
	var nextMedia = media[m + 1];
	if (!nextMedia) return 99999;
	return nextMedia.minWidth;
};

const getViewportColumnsMap = config => {
	const media = config.media;
	const vports = config.viewportsToOptimizeFor;
	var mqIndex = 0;
	var nextTick;
	var ret = {};

	nextTick = getNextMqMinWidth(media, mqIndex);
	vports.forEach(vport => {
		if (vport.width >= nextTick) {
			mqIndex += 1;
			nextTick = getNextMqMinWidth(media, mqIndex);
		}
		ret[vport.width] = media[mqIndex].columns;
	});

	return ret;
};

const getSizes_media = mediaQuery =>
	mediaQuery.minWidth ? `(min-width: ${mediaQuery.minWidth}px)` : "";

const getSize_vw = mediaQuery => {
	const percentage = 100 / mediaQuery.columns;
	const vwValue = Math.ceil(percentage * 100) / 100;
	return vwValue + "vw";
};

const getSize_px = mediaQuery => {
	if (!mediaQuery.columns) return "100%";
	const pxValue = Math.ceil(mediaQuery.minWidth / mediaQuery.columns);
	return pxValue + "px";
};

const getSize = mediaQuery => {
	if (!mediaQuery.columns) return "100vw";
	if (!mediaQuery.grow) return getSize_px(mediaQuery);
	return getSize_vw(mediaQuery);
};

const getSizes = config => {
	return config.media
		.slice()
		.reverse()
		.map(
			mediaQuery => getSizes_media(mediaQuery) + " " + getSize(mediaQuery)
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

	return products;
};
