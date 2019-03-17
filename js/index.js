// CONFIG -- Get from external file

var config = {
	numberOfProducts: 20
};

// PRODUCTS BUILDER

var products = [];

for (let i = 0; i < config.numberOfProducts; i++) {
	products.push({
		name: "Product " + (i + 1)
	});
}

// VIEW

const getProduct = product => `<li>
    <img
        src="https://via.placeholder.com/305"
        srcset="
            https://via.placeholder.com/305?text=01-305w.jpg 305w,
            https://via.placeholder.com/610?text=01-610w.jpg 610w
        "
        sizes="(min-width: 1280px) 305px, 50vw"
        alt="Image 01"
    />
    <div class="title">${product.name}</div>
</li>`;

// DOM CREATION

var $products = document.querySelector(".products");

$products.innerHTML = products.reduce((previousHtml, product) => {
	return previousHtml + getProduct(product);
}, "");
