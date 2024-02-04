export class BaseComponent {
	ctx;
	color;

	constructor(color) {
		canvas = document.getElementById("canvas");
		if (canvas.getContext) {
			this.ctx = canvas.getContext("2d");
		}

		this.color = color;
	}
}
