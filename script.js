var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

h3.textContent = body.style.background + ";";

var a = color1.value;
var b = color2.value;

function setGradient() {
	body.style.background = 
	"Linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	h3.textContent = body.style.background + ";";
}

function change() {
	setGradient();
}

function check() {
	var c = `#BE1E73`;
	var d = `#121259`;
	if ((c !== a  || d !== b )) {
		return true;
	}
	return false;
}

function change2() {
	if (check()) {
		color1.value = "#BE1E73";
		color2.value = "#121259";
		setGradient();
	}	
}

color1.addEventListener("input", change);

color2.addEventListener("input", change);

button.addEventListener("click", change2);
