//3?4a// get play button element

const button1 = document.getElementById("button1");

//7a// Get button0 element

const button0 = document.getElementById("button0");

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

//4d// Create action1 function

function action1(){

	if(playing){
      
		stop();
	}

	else{		

      play();
	}
}

//5// Create play function

function play(){

	const addMinute = () => {

		if(minute < 99) minute++;
	}

	const addSecond = () => {

		if(second === 59){
			second = 0;
			addMinute();
		}
		else{
			second++;
		}
	}

	const addCentes = () => {

		if(centes === 99){
			centes = 0;
			addSecond();
		}
		else{
			centes++;
		}
         
		displayTime();
	}

   //6a// Get interval number and change play name button

   playing = setInterval(addCentes, 10);
   button1.innerHTML = "stop";
}

//6b// Create stop function

function stop(){

	clearInterval(playing);
	playing = null;
	button1.innerHTML = "play";
}

displayTime();

