import {fillRandom, clear} from "./GameOfLife/index.js"

const fillRandBtn = document.getElementById("fillRandom");
fillRandBtn.addEventListener("click", fillRandom);

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);
