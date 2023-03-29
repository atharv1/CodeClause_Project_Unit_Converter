const millimeterUl = document.querySelector("#millimeter");
const centimeterUl = document.querySelector("#centimeter");
const meterUl = document.querySelector("#meter");
const kilometerUl = document.querySelector("#kilometer");

function millimeter(value) {
	centimeterUl.value = value / 10;
	meterUl.value = value / 1000;
	kilometerUl.value = value / 1000000;
}

function centimeter(value) {
	millimeterUl.value = value * 10;
	meterUl.value = value / 100;
	kilometerUl.value = value / 100000;
}

function meter(value) {
	millimeterUl.value = value * 1000;
	centimeterUl.value = value * 100;
	kilometerUl.value = value / 1000;
}

function kilometer(value) {
	millimeterUl.value = value * 1000000;
	centimeterUl.value = value * 10000;
	meterUl.value = value * 1000;
}
