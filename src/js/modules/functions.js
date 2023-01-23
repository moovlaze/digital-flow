export const burger = () => {
	const body = document.querySelector(".body");
	const burger = document.querySelector(".burger");
	const menu = document.querySelector(".menu");

	burger.addEventListener("click", () => {
		menu.classList.add("menu_active");
		body.classList.add("wrapper_lock");
	});

	menu.addEventListener("click", (e) => {
		if (e.target.closest(".menu__close") || e.target.closest(".menu__link")) {
			menu.classList.remove("menu_active");
			body.classList.remove("wrapper_lock");
		}
	});
};

export const srollHeader = () => {
	const header = document.querySelector(".header");

	window.addEventListener("scroll", () => {
		if (window.scrollY >= 100) {
			header.classList.add("header_active");
		} else {
			header.classList.remove("header_active");
		}
	});
};
