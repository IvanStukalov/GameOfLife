import { Square } from "./src/components/Square/Square.js";
import { Dot } from "./src/components/Dot/Dot.js";

let x = 10;
let y = 10;

const dot = new Dot(x, y, "green");
dot.draw()

setInterval(() => {
	x += 1;
	y += 1;
	dot.moveTo(x, y);
}, 100)
