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
		if (this.fill) {
			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(this.x, this.y, this.#width, this.#height);
		} else {
			this.ctx.strokeStyle = this.color;
			this.ctx.strokeRect(this.x, this.y, this.#width, this.#height);
		}
	}

	clear() {
		if (this._fill) {
			this.ctx.clearRect(this.x, this.y, this.#width, this.#height);
		} else {
			this.ctx.clearRect(this.x - 1, this.y - 1, this.#width + 1, this.#height + 1);
		} 
	}
}
