import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../canvas/canvas.js";
import { Square } from "../components/Square/Square.js";

const matrix = [];

for (let i = 0; i < CANVAS_HEIGHT / 10; i++) {
	matrix.push([]);

	for (let j = 0; j < CANVAS_WIDTH / 10; j++) {
		const sq = new Square(10 * j, 10 * i, 10, "black");

		const randInt = Math.random();
		if (randInt > 0.9) {
			sq.fill()
		} else {
			sq.stroke();
		}
		sq.draw();
		matrix[i].push(sq);
	}
}

function fillRandom() {
	for (let i = 0; i < CANVAS_HEIGHT / 10; i++) {
		for (let j = 0; j < CANVAS_WIDTH / 10; j++) {
			const randInt = Math.random();
			if (randInt > 0.9) {
				matrix[i][j].fill()
			} else {
				matrix[i][j].stroke();
			}
			matrix[i][j].clear();
			matrix[i][j].draw();
		}
	}
}

function clear() {
	for (let i = 0; i < CANVAS_HEIGHT / 10; i++) {
		for (let j = 0; j < CANVAS_WIDTH / 10; j++) {
			matrix[i][j].stroke();
			matrix[i][j].clear();
			matrix[i][j].draw();
		}
	}
}

const fillRandBtn = document.getElementById("fillRandom");
fillRandBtn.addEventListener("click", fillRandom);

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);
