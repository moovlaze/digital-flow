export const burger = () => {
	const burger = document.querySelector(".burger");
	const menu = document.querySelector(".menu");

	burger.addEventListener("click", () => {
		menu.classList.add("menu_active");
	});

	menu.addEventListener("click", (e) => {
		if (e.target.closest(".menu__close") || e.target.closest(".menu__link")) {
			menu.classList.remove("menu_active");
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
