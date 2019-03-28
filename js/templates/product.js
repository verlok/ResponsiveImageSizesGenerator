const imageTemplate = (product, lazyData, lazyClass) => {
	return `<img class="${lazyClass}"
        ${lazyData}src="${product.src}"
        ${lazyData}srcset="${product.srcset}"
        ${lazyData}sizes="${product.sizes}"
        alt="${product.alt}"
    />`;
};

const pictureTemplate = (product, lazyData, lazyClass) => {
	return `<picture>
        <source type="image/webp" 
            ${lazyData}srcset="${product.srcsetWebp}" 
            ${lazyData}sizes="${product.sizes}">
        ${imageTemplate(product, lazyData, lazyClass)}
    </picture>`;
};

export const productTemplate = (product, index, settings) => {
	const lazyProduct = index >= settings.lazyFrom;
	const lazyData = lazyProduct ? "data-" : "";
	const lazyClass = lazyProduct ? "lazy" : "";

	var imageDom = settings.useWebP
		? pictureTemplate(product, lazyData, lazyClass)
		: imageTemplate(product, lazyData, lazyClass);

	return `<li class="product">
    <div class="product-images">
        ${imageDom}
    </div>
    <div class="title">${product.name}</div>
</li>`;
};
