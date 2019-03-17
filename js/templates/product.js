export const productTemplate = product => `<li class="product">
    <img
        src="${product.src}"
        srcset="${product.srcset}"
        sizes="(min-width: 1280px) 305px, 50vw"
        alt="${product.alt}"
    />
    <div class="title">${product.name}</div>
</li>`;
