document.getElementById("myslide").onmousemove = function(event) {
	var x = event.offsetX;
	/*console.log(x);*/
	document.getElementById("two").style.width = x + "px";
}
document.getElementById("myslide").onmouseleave = function() {
	document.getElementById("two").style.width = "600px";
}
