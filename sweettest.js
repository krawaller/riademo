macro fn {
	case $name:ident $body => {
		function $name () $body
	}
	case $name:ident $params $body => {
		function $name $params $body
	}
	case $params $body => {
		function $params $body
	}
	case $body => {
		function () $body
	}
}

macro swap {
	case $x:ident $y:ident => {
		var temp; temp=$x; $x=$y; $y=temp;
	}
}

fn sayer(arg) { console.log(arg+"."); }
var screamer = fn(arg) {console.log(arg+"!!!");}

sayer("i am a function defined via a macro");
screamer("me too");

console.log("some macro-defined variable swapping:")
var x = 5, y = 3;
console.log("x",x,"y",y);
swap x y
console.log("x",x,"y",y);