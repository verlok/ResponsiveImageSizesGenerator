const blurryEl = document.getElementById("blurry");
const useWebPEl = document.getElementById("useWebP");

const getUiSettings = () => ({
	blurry: blurryEl.checked,
	useWebP: useWebPEl.checked
});

export const watchForUiSettings = () => {
	var uiSettingsEl = document.getElementById("uiSettings");
	uiSettingsEl.addEventListener("click", e => {
		if (e.target.tagName !== "INPUT") return;
		const mergedSettings = getMergedSettings();
		// TODO: Simplify with event utility functions
		const event = new CustomEvent("settingsChanged", {
			detail: { settings: mergedSettings }
		});
		document.body.dispatchEvent(event);
	});
};

export const getMergedSettings = config => {
	var uiSettings = getUiSettings();
	return Object.assign({}, config, uiSettings);
};
