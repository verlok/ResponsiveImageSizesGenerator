import { productTemplate } from "./templates/product.js";

export default products =>
	products.reduce(
		(previousHtml, product) =>
			previousHtml + "\n" + productTemplate(product),
		""
	);
