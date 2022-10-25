//3?4a// get play button element

const button1 = document.getElementById("button1");

//1// get basic elements

const spanMinute = document.querySelector(".minute");
const spanSecond = document.querySelector(".second");
const spanCentes = document.querySelector(".centes");

let minute = 0;
let second = 0;
let centes = 0;

//2a// create displayTime function

function displayTime(){

	spanMinute.innerHTML = minute;
	spanSecond.innerHTML = second;
	spanCentes.innerHTML = centes;
}

displayTime();