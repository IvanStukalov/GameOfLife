import { CANVAS_LEFT_BOUND, CANVAS_TOP_BOUND } from "../../canvas/canvas.js";
import { BaseComponent } from "../BaseComponent/BaseComponent.js";

export class Rectangle extends BaseComponent {
	#width;
	#height;

	constructor(x, y, width, height, color) {
		super(x, y, color);

		this.#width = width;
		this.#height = height;
	}

	setSize(width, height) {
		this.#width = width;
		this.#height = height;
	}

	draw() {
		if (this.isFilled) {
			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(this.x, this.y, this.#width, this.#height);
		} else {
			this.ctx.strokeStyle = this.color;
			this.ctx.strokeRect(this.x, this.y, this.#width, this.#height);
		}
	}

	clear() {
		if (this.isFilled) {
			this.ctx.clearRect(this.x, this.y, this.#width, this.#height);
		} else {
			this.ctx.clearRect(this.x - 1, this.y - 1, this.#width + 1, this.#height + 1);
		}
	}

	hitTarget(x, y) {
		return (x - CANVAS_LEFT_BOUND - this.x > 0 &&
			x - CANVAS_LEFT_BOUND - this.x < this.#width &&
			y - CANVAS_TOP_BOUND - this.y > 0 &&
			y - CANVAS_TOP_BOUND - this.y < this.#height)
	}
}
