define(["jQ"],function(jQ){
	return function log(arg){
		jQ("#logger").append("<p>"+arg+"</p>");
		console && console.log(arg);
	}
});
