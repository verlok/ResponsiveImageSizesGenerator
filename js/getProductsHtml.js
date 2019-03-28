import { productTemplate } from "./templates/product.js";

export default (config, products) => {
	return products.reduce(
		(previousHtml, product, index) =>
			previousHtml + "\n" + productTemplate(product, index, config),
		""
	);
};
