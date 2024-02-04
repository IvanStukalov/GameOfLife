import { Rectangle } from "./src/components/Rectangle/Rectangle.js";
import { Square } from "./src/components/Square/Square.js";

const rectangle = new Rectangle("green")

rectangle.draw(20, 20, 10, 10)
rectangle.stroke(10, 10, 10, 10)

const square = new Square("orange");
square.draw(40, 40, 20)
square.clear(50, 50, 10, 10)