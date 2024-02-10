import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../canvas/canvas.js";
import { init } from "./init.js";

const matrix = [];

init(matrix);

export function fillRandom() {
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

export function clear() {
	for (let i = 0; i < CANVAS_HEIGHT / 10; i++) {
		for (let j = 0; j < CANVAS_WIDTH / 10; j++) {
			matrix[i][j].stroke();
			matrix[i][j].clear();
			matrix[i][j].draw();
		}
	}
}
