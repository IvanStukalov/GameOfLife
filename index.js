import { Square } from "./src/components/Square/Square.js";

let x = 10;
let y = 10;
let width = 30;

const square = new Square(x, y, width, "orange");
square.stroke()

setInterval(() => {
	x += 1;
	y += 1;
	square.moveTo(x, y);
}, 100)
