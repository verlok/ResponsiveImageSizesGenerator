export default {
	numberOfProducts: 20,
	viewportsToOptimizeFor: [
		{
			name: "iPhone 5/SE",
			width: 320,
			pixelDensity: 2
		},
		{
			name: "iPhone 6/7/8",
			width: 375,
			pixelDensity: 2
		},
		{
			name: "iPhone X / Xs",
			width: 375,
			pixelDensity: 3
		},
		{
			name: "iPhone Xr",
			width: 414,
			pixelDensity: 2
		},
		{
			name: "iPhone 6/7/8 plus",
			width: 414,
			pixelDensity: 3
		},
		{
			name: "iPad portrait",
			width: 768,
			pixelDensity: 2
		},
		{
			name: "iPad landscape",
			width: 1024,
			pixelDensity: 2
		},
		{
			name: "Laptop MDpi",
			width: 1280,
			pixelDensity: 1
		},
		{
			name: "iPad Pro landscape",
			width: 1366,
			pixelDensity: 2
		},
		{
			name: "Laptop HiDpi",
			width: 1440,
			pixelDensity: 2
		}
	],
	media: [
		{
			minWidth: 0,
			columns: 2
		},
		{
			minWidth: 768,
			columns: 3
		},
		{
			minWidth: 1024,
			columns: 4
		}
	]
};
