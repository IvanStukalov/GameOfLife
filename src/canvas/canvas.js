export const CANVAS_LEFT_BOUND = 20;
export const CANVAS_TOP_BOUND = 10;

class Canvas {
	canvas;
	#registry;

	constructor(x, y) {
		this.canvas = document.getElementById("canvas");
		this.canvas.style.position = "absolute";
		this.canvas.style.left = `${x}px`;
		this.canvas.style.top = `${y}px`;

		this.#registry = [];

		this.canvas.addEventListener("click", (event) => {
			this.goToRegistry(event);
		})
	}

	addToRegistry(element) {
		this.#registry.push(element);
	}

	goToRegistry(event) {
		for (const el of this.#registry) {
			if (el.hitTarget(event.clientX, event.clientY)) {
				el.onClick();
			}
		}
	}
}

export const canvas = new Canvas(CANVAS_LEFT_BOUND, CANVAS_TOP_BOUND);
