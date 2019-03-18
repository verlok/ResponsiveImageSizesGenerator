export const productTemplate = product => `<li class="product">
    <img
        src="${product.src}"
        srcset="${product.srcset}"
        sizes="${product.sizes}"
        alt="${product.alt}"
    />
    <div class="title">${product.name}</div>
</li>`;
