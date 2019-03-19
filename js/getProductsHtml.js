import config from "./config.js";
import { productTemplate } from "./templates/product.js";

export default products => {
	return products.reduce(
		(previousHtml, product, index) =>
			previousHtml + "\n" + productTemplate(product, index, config),
		""
	);
};
