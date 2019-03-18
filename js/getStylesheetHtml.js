import { mediaQueryTemplate } from "./templates/style.js";

export default config =>
	config.media.reduce(
		(previousHtml, mediaQ) =>
			previousHtml + "\n" + mediaQueryTemplate(mediaQ),
		""
	);
