import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./src/canvas/canvas.js";
import { Square } from "./src/components/Square/Square.js";

const matrix = [];

for (let i = 0; i < CANVAS_HEIGHT / 10; i++) {
	matrix.push([]);

	for (let j = 0; j < CANVAS_WIDTH / 10; j++) {
		const sq = new Square(10 * j, 10 * i, 10, "black");
		sq.stroke();
		sq.draw();
		matrix[i].push(sq);
	}
}
