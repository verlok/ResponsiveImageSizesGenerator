export default config => {
	var products = [];

	for (let i = 0; i < config.numberOfProducts; i++) {
		products.push({
			name: "Product " + (i + 1)
		});
	}

	return products;
};
