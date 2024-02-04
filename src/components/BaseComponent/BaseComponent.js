export class BaseComponent {
	ctx;

	x;
	y;
	color;
	fill = true;

	constructor(x, y, color) {
		canvas = document.getElementById("canvas");
		if (canvas.getContext) {
			this.ctx = canvas.getContext("2d");
		}

		this.x = x;
		this.y = y;
		this.color = color;
	}

	setCoords(x, y) {
		this.x = x;
		this.y = y;
	}

	setColor(color) {
		this.color = color;
	}

	fill() {
		this.fill = true;
	}

	stroke() {
		this.fill = false;
	}

	draw() { };
	clear() { };

	moveTo(x, y) {
		this.clear();
		this.setCoords(x, y);
		this.draw();
	}
}
