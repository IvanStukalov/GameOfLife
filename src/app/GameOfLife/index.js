import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../canvas/canvas.js";
import { next } from "./game.js";
import { init } from "./init.js";

const matrix = [];
let intervalId;

export function start() {
	if (!intervalId) {
		intervalId = setInterval(() => {
			next(matrix);
		}, 30); // Запуск интервала каждую секунду
	}
}

export function stop() {
	if (intervalId) {
		clearInterval(intervalId); // Остановка интервала
		intervalId = null; // Очистка ID интервала
	}
}

export function fillRandom() {
	for (let i = 0; i < CANVAS_HEIGHT / 10; i++) {
		for (let j = 0; j < CANVAS_WIDTH / 10; j++) {
			const randInt = Math.random();
			if (randInt < 0.5) {
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

export function step() {
	next(matrix);
}

init(matrix);
