const getPlaceholderSvgSrc = (width, ratio) => {
	var height = Math.round(width / ratio);
	return `data:image/svg+xml,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20${width}%20${height}'></svg>`;
};

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

const getMqForSizes = width => (width ? `(min-width: ${width}px)` : "");

const getSizeInVw_blurry = mediaQuery => {
	const percentage = 100 / mediaQuery.columns;
	const vwValue = Math.ceil(percentage * 100) / 100;
	return vwValue + "vw";
};

const getSizeInPx = (width, columns) => {
	if (!columns) return "100%";
	const pxValue = Math.ceil(width / columns);
	return pxValue + "px";
};

const getSize_blurry = mediaQuery => {
	if (!mediaQuery.columns) return "100vw";
	if (!mediaQuery.grow)
		return getSizeInPx(mediaQuery.minWidth, mediaQuery.columns);
	return getSizeInVw_blurry(mediaQuery);
};

const getSizes_blurry = media =>
	media
		.slice()
		.reverse()
		.map(
			mediaQuery =>
				getMqForSizes(mediaQuery.minWidth) +
				" " +
				getSize_blurry(mediaQuery)
		)
		.join();

const getSizes_sharp = viewportColumnsMap =>
	Object.keys(viewportColumnsMap)
		.reverse()
		.map(viewportWidth => {
			const columnCount = viewportColumnsMap[viewportWidth];
			return (
				getMqForSizes(viewportWidth) +
				" " +
				getSizeInPx(viewportWidth, columnCount)
			);
		})
		.join();

const getCalculatedImagesWidths = (
	viewportsToOptimizeFor,
	viewportColumnsMap
) => {
	var imageWidths = viewportsToOptimizeFor
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
	var viewportColumnsMap = getViewportColumnsMap(settings);
	var imagesWidths = getCalculatedImagesWidths(
		settings.viewportsToOptimizeFor,
		viewportColumnsMap
	);

	var sizes = settings.blurry
		? getSizes_blurry(settings.media)
		: getSizes_sharp(viewportColumnsMap);

	for (let i = 0; i < settings.numberOfProducts; i++) {
		products.push({
			alt: "Product " + (i + 1) + " image",
			placeholderSrc: getPlaceholderSvgSrc(
				imagesWidths[0],
				settings.imageRatio
			),
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
