import { BaseComponent } from "../BaseComponent/BaseComponent.js";

export class Square extends BaseComponent {
	constructor(color) {
		super(color);
	}

	setColor(color) {
		this.color = color;
	}

	draw(x, y, width) {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(x, y, width, width);
	}

	clear(x, y, width) {
		this.ctx.clearRect(x, y, width, width);
	}

	stroke(x, y, width) {
		this.ctx.strokeStyle = this.color;
		this.ctx.strokeRect(x, y, width, width);
	}
}
