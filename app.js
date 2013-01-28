
//The main application! It will simply load the testmodules for coffeescript and sweet makros, and execute them.

define(["cs!coffeetest","sweeten!sweettest","backbone"],function(coffee,sweet,Backbone){
	return {
		start: function(){
			console.log("...START CALL!");
			sweet();
			coffee();
		}
	};
});