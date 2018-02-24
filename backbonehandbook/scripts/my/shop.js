define(["./shirt", "./shoe"], function (shirt, shoe) {
	var shop = {
		name: "Shop",
		stocks: [shirt, shoe]
	};
	return shop;
});
