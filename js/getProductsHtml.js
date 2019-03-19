import { productTemplate } from "./templates/product.js";

export default products =>
	products.reduce(
		(previousHtml, product, index) =>
			previousHtml + "\n" + productTemplate(product, index),
		""
	);
