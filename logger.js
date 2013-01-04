define(["jQ"],function(jQ){
	return function log(arg){
		// we add the log message to the `#logger` div in the body
		jQ("#logger").append("<p>"+arg+"</p>");
		// ...and we also pipe it out to the `console`, if one is defined
		console && console.log(arg);
	}
});
