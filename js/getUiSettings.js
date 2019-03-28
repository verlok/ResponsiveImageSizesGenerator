const blurryEl = document.getElementById("blurry");
const useWebPEl = document.getElementById("useWebP");

export default () => ({
	blurry: blurryEl.checked,
	useWebP: useWebPEl.checked
});
