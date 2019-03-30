const getNextMqMinWidth = (media, m) => {
	var nextMedia = media[m + 1];
	if (!nextMedia) return 99999;
	return nextMedia.minWidth;
};

const getViewportColumnsMap = settings => {
	const media = settings.media;
	const vports = settings.viewportsToOptimizeFor;
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

const getMqForSizes = mediaQuery =>
	mediaQuery.minWidth ? `(min-width: ${mediaQuery.minWidth}px)` : "";

const getSizeInVw = mediaQuery => {
	const percentage = 100 / mediaQuery.columns;
	const vwValue = Math.ceil(percentage * 100) / 100;
	return vwValue + "vw";
};

const getSizeInPx = mediaQuery => {
	if (!mediaQuery.columns) return "100%";
	const pxValue = Math.ceil(mediaQuery.minWidth / mediaQuery.columns);
	return pxValue + "px";
};

const getSize = mediaQuery => {
	if (!mediaQuery.columns) return "100vw";
	if (!mediaQuery.grow) return getSizeInPx(mediaQuery);
	return getSizeInVw(mediaQuery);
};

const getSizes_blurry = media =>
	media
		.slice()
		.reverse()
		.map(
			mediaQuery => getMqForSizes(mediaQuery) + " " + getSize(mediaQuery)
		);

const getSizes_sharp = settings => {
	return ""; //TODO: SIZE ME USING ACTUAL IMAGE SIZES AND MEDIA QUERIES
};

const getSizes = settings => {
	return settings.blurry ? getSizes_blurry(settings.media) : getSizes_sharp();
};

const getCalculatedImagesWidths = settings => {
	var viewportColumnsMap = getViewportColumnsMap(settings);
	var imageWidths = settings.viewportsToOptimizeFor
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

const getImageUrl = (width, imageRatio, text, useWebP) => {
	const ext = useWebP ? "webp" : "jpg";
	const height = Math.round(width / imageRatio);
	return `${baseImageUrl}/${width}x${height}.${ext}?text=${text}`;
};

const getSrcSet = (position, widths, imageRatio, useWebP) => {
	return widths
		.map(width => {
			const descriptor = width + "w";
			const text = position + "-" + descriptor;
			return (
				getImageUrl(width, imageRatio, text, useWebP) + " " + descriptor
			);
		})
		.join();
};

const getSrc = (position, widths, imageRatio) => {
	const width = widths[widths.length - 1];
	const descriptor = width + "w";
	const text = position + "-" + descriptor;
	return getImageUrl(width, imageRatio, text);
};

export default settings => {
	var products = [];
	var imagesWidths = getCalculatedImagesWidths(settings);
	var sizes = getSizes(settings);

	for (let i = 0; i < settings.numberOfProducts; i++) {
		products.push({
			alt: "Product " + (i + 1) + " image",
			src: getSrc(i + 1, imagesWidths, settings.imageRatio),
			srcsetWebp: getSrcSet(
				i + 1,
				imagesWidths,
				settings.imageRatio,
				true
			),
			srcset: getSrcSet(i + 1, imagesWidths, settings.imageRatio, false),
			sizes: sizes,
			name: "Product " + (i + 1)
		});
	}

	return products;
};
