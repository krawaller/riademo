define(["jQ"],function(jQ){
	console.log("WTF",jQ);
	return function log(arg){
		jQ("body").append("<p>"+arg+"</p>");
		console && console.log(arg);
	}
});
