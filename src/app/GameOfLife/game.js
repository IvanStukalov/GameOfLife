export function next(matrix) {
	const virtualMatrix = getMatrixFromCanvas(matrix);
	const tmpMatrix = structuredClone(virtualMatrix)

	for (let row in tmpMatrix) {
		for (let col in tmpMatrix[row]) {
			transformSquare(virtualMatrix, tmpMatrix, Number(row), Number(col));
		}
	}

	transformCanvasMatrix(matrix, virtualMatrix);
}

function getMatrixFromCanvas(canvasMatrix) {
	let matrix = [];

	for (let row in canvasMatrix) {
		matrix.push([]);
		for (let col in canvasMatrix[row]) {
			matrix[row].push(canvasMatrix[row][col].isFilled)
		}
	}

	return matrix;
}

function transformSquare(virtualMatrix, tmpMatrix, row, col) {
	let aliveNum = 0;

	if (row > 0 && col > 0 && tmpMatrix[row - 1][col - 1]) {
		aliveNum++;
	}
	if (row > 0 && tmpMatrix[row - 1][col]) {
		aliveNum++;
	}
	if (row > 0 && col < tmpMatrix[0].length - 1 && tmpMatrix[row - 1][col + 1]) {
		aliveNum++;
	}
	if (col > 0 && tmpMatrix[row][col - 1]) {
		aliveNum++;
	}
	if (col < tmpMatrix[0].length - 1 && tmpMatrix[row][col + 1]) {
		aliveNum++;
	}
	if (row < tmpMatrix.length - 1 && col > 0 && tmpMatrix[row + 1][col - 1]) {
		aliveNum++;
	}
	if (row < tmpMatrix.length - 1 && tmpMatrix[row + 1][col]) {
		aliveNum++;
	}
	if (row < tmpMatrix.length - 1 && col < tmpMatrix[0].length - 1 && tmpMatrix[row + 1][col + 1]) {
		aliveNum++;
	}

	if (virtualMatrix[row][col] && !(aliveNum >= 2 && aliveNum <= 3)) {
		virtualMatrix[row][col] = false;
	} else if (!virtualMatrix[row][col] && aliveNum === 3) {
		virtualMatrix[row][col] = true;
	}
}

function transformCanvasMatrix(canvas, virtual) {
	for (let row in canvas) {
		for (let col in canvas[row]) {
			if (virtual[row][col]) {
				canvas[row][col].fill();
			} else {
				canvas[row][col].stroke();
			}
			canvas[row][col].clear();
			canvas[row][col].draw();
		}
	}
}
