require.config({
	paths: {
		jQ: "lib/jquery/jquery",
		sweet: "lib/sweet/sweet",
		"coffee-script": "lib/coffee-script",
		sweeten: "lib/require/sweeten",
		cs: "lib/require/cs",
		parser: "lib/sweet/parser",
		expander: "lib/sweet/expander",
		escodegen: "lib/sweet/escodegen",
		"es6-collections": "lib/sweet/es6-collections",
		underscore: "lib/underscore-amd"
	}
});

define(["sweeten!sweettest","cs!coffeetest"],function(sweet,coffee){
	sweet();
	coffee();
});