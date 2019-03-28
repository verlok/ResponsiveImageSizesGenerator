import { productTemplate } from "./templates/product.js";

export default (settings, products) => {
	return products.reduce(
		(previousHtml, product, index) =>
			previousHtml + "\n" + productTemplate(product, index, settings),
		""
	);
};
