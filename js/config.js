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
			name: "iPhone X",
			width: 375,
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
			name: "iPad Pro landscape",
			width: 1366,
			pixelDensity: 2
		},
		{
			name: "Laptop MDpi",
			width: 1280,
			pixelDensity: 1
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
			productWidth: "50%"
		},
		{
			minWidth: "768px",
			productWidth: "33.33333%"
		},
		{
			minWidth: "1024px",
			productWidth: "25%"
		}
	]
};
