import { Rectangle } from "./src/components/Rectangle/Rectangle.js";
import { Square } from "./src/components/Square/Square.js";

let x = 10;
let y = 10;

const square = new Square(x, y, 10, "green");
square.draw()
square.onClick()

const sq2 = new Rectangle(30, 50, 30, 50, "orange");
sq2.draw()
sq2.onClick()

const sq3 = new Rectangle(50, 55, 30, 50, "blue");
sq3.draw()
sq3.onClick()
