const imageTemplate = (product, lazyProduct, lazyClass) => {
	return lazyProduct
		? `<img class="${lazyClass}"
        src="${product.placeholderSrc}"
        data-src="${product.src}"
        data-srcset="${product.srcset}"
        data-sizes="${product.sizes}"
        alt="${product.alt}"
    />`
		: `<img class="${lazyClass}"
        src="${product.src}"
        srcset="${product.srcset}"
        sizes="${product.sizes}"
        alt="${product.alt}"
    />`;
};

const pictureTemplate = (product, lazyProduct, lazyClass) => {
	var img = imageTemplate(product, lazyProduct, lazyClass);
	return lazyProduct
		? `<picture>
        <source type="image/webp" 
            data-srcset="${product.srcsetWebp}" 
            data-sizes="${product.sizes}">
        ${img}
    </picture>`
		: `<picture>
        <source type="image/webp" 
            srcset="${product.srcsetWebp}" 
            sizes="${product.sizes}">
        ${img}
    </picture>`;
};

export const productTemplate = (product, index, settings) => {
	const lazyProduct = index >= settings.lazyFrom;
	const lazyClass = "lazy";

	var imageDom = settings.useWebP
		? pictureTemplate(product, lazyProduct, lazyClass)
		: imageTemplate(product, lazyProduct, lazyClass);

	return `<li class="product">
    <div class="product-images">
        ${imageDom}
    </div>
    <div class="title">${product.name}</div>
</li>`;
};
