import { BaseComponent } from "../BaseComponent/BaseComponent.js";

export class Rectangle extends BaseComponent {
	constructor(color) {
		super(color);
	}

	setColor(color) {
		this.color = color;
	}

	draw(x, y, width, height) {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(x, y, width, height);
	}

	clear(x, y, width, height) {
		this.ctx.clearRect(x, y, width, height);
	}

	stroke(x, y, width, height) {
		this.ctx.strokeStyle = this.color;
		this.ctx.strokeRect(x, y, width, height);
	}
}
