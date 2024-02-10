import { fillRandom, clear, step, start, stop } from "./GameOfLife/index.js"

const fillRandBtn = document.getElementById("fillRandom");
fillRandBtn.addEventListener("click", fillRandom);

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);

const stepBtn = document.getElementById("step");
stepBtn.addEventListener("click", step);

const startBtn = document.getElementById("start");
startBtn.addEventListener("click", start);

const stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", stop);

