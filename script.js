//3?4a// get play button element

const button1 = document.getElementById("button1");

//1// get basic elements

const spanMinute = document.querySelector(".minute");
const spanSecond = document.querySelector(".second");
const spanCentes = document.querySelector(".centes");

//4b// create action1 event

button1.addEventListener("click", action1);

let minute = 0;
let second = 0;
let centes = 0;

//4c// Create playing variable

let playing = null

//2a// create displayTime function

function displayTime(){

	spanMinute.innerHTML = minute;
	spanSecond.innerHTML = second;
	spanCentes.innerHTML = centes;
}



displayTime();

