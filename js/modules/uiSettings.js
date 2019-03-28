const blurryEl = document.getElementById("blurry");
const useWebPEl = document.getElementById("useWebP");
var uiSettings = getUiSettings();

export const watchForUiSettings = callback => {
	var uiSettingsEl = document.getElementById("uiSettings");
	uiSettingsEl.addEventListener("click", e => {
		if (e.target.tagName !== "INPUT") return;
		uiSettings = getUiSettings();
		callback();
	});
};

const getUiSettings = () => ({
	blurry: blurryEl.checked,
	useWebP: useWebPEl.checked
});

export const getMergedSettings = config => {
	return Object.assign({}, config, uiSettings);
};
