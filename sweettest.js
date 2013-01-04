define(["logger"],function(log){

	macro fn {
		// this case matches a named function definition
		case $name:ident $params $body => {
			function $name $params $body
		}
		// this matches an anonymous function
		case $params $body => {
			function $params $body
		}
	}

	// this would be much better as a utility function, but it is a nice easy makro demonstration.
	macro swap {
		case $x:ident $y:ident => {
			var temp; temp=$x; $x=$y; $y=temp;
		}
	}

	// the `sayer` function tests the named func makro
	fn sayer(arg) { log(arg+"."); }
	// the `screamer` function tests the anonymous func makro
	var screamer = fn(arg) {log(arg+"!!!");}

	// we return a function that will execute our tests, proving that this makro code has been converted to pure javascript.
	return function(){
		sayer("i am a function defined via a macro");
		screamer("me too");
		log("some macro-defined variable swapping:")
		var x = 5, y = 3;
		log("x"+x+"y"+y);
		swap x y
		log("x"+x+"y"+y);
	}
});