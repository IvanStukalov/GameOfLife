import { fillRandom, clear, step, start, stop } from "./GameOfLife/index.js"

const clearBtn = document.getElementById("clear");
const fillRandBtn = document.getElementById("fillRandom");
const stepBtn = document.getElementById("step");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");


clearBtn.addEventListener("click", () => {
	startBtn.classList.remove("inactive");
	startBtn.classList.add("access");

	stopBtn.classList.remove("danger");
	stopBtn.classList.add("inactive");
	
	clear();
	stop();
});

fillRandBtn.addEventListener("click", () => {
	fillRandom();
});

stepBtn.addEventListener("click", () => {
	startBtn.classList.remove("inactive");
	startBtn.classList.add("access");

	stopBtn.classList.remove("danger");
	stopBtn.classList.add("inactive");

	stop();
	step();
});

startBtn.addEventListener("click", () => {
	startBtn.classList.remove("access");
	startBtn.classList.add("inactive");

	stopBtn.classList.remove("inactive");
	stopBtn.classList.add("danger");

	start();
});

stopBtn.addEventListener("click", () => {
	startBtn.classList.remove("inactive");
	startBtn.classList.add("access");

	stopBtn.classList.remove("danger");	
	stopBtn.classList.add("inactive");

	stop();
});

