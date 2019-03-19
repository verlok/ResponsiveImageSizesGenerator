export const productTemplate = (product, index) => {
	const lazyProduct = index >= 8;
	const lazyData = lazyProduct ? "data-" : "";
	const lazyClass = lazyProduct ? "lazy" : "";

	return `<li class="product">
    <div class="product-images">
        <img class="${lazyClass}"
            ${lazyData}src="${product.src}"
            ${lazyData}srcset="${product.srcset}"
            ${lazyData}sizes="${product.sizes}"
            alt="${product.alt}"
        />
    </div>
    <div class="title">${product.name}</div>
</li>`;
};
