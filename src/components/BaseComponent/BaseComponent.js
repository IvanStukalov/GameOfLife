import { canvas } from "../../canvas/canvas.js";

export class BaseComponent {
	ctx;

	x;
	y;
	color;
	isFilled = true;

	#handlers = {
		"swapColor": () => {
			if (this.isFilled) {
				this.clear();
				this.stroke();
			} else {
				this.fill();
			}
			this.draw();
		},
	}

	constructor(x, y, color) {
		if (canvas.canvas.getContext) {
			this.ctx = canvas.canvas.getContext("2d");
		}

		this.x = x;
		this.y = y;
		this.color = color;

		canvas.addToRegistry(this);
	}

	setCoords(x, y) {
		this.x = x;
		this.y = y;
	}

	setColor(color) {
		this.color = color;
	}

	fill() {
		this.isFilled = true;
	}

	stroke() {
		this.isFilled = false;
	}

	draw() { }	// abstract method, redefined in following classes
	clear() { }	// abstract method, redefined in following classes

	moveTo(x, y) {
		this.clear();
		this.setCoords(x, y);
		this.draw();
	}

	hitTarget() {		// almost abstract method, redefined in following classes
		return false;
	}

	onClick(handler) {
		this.#handlers[handler]();
	}
}
