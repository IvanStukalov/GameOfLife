import { Rectangle } from "../Rectangle/Rectangle.js"

export class Square extends Rectangle {
	constructor(x, y, width, color) {
		super(x, y, width, width, color);
	}

	setWidth(width) {
		this.width = width;
	}
}
