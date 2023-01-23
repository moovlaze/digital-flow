export const burger = () => {
	const body = document.querySelector("body");
	const burger = document.querySelector(".burger");
	const menu = document.querySelector(".menu");

	burger.addEventListener("click", () => {
		menu.classList.add("menu_active");
		body.classList.add("body_lock");
	});

	menu.addEventListener("click", (e) => {
		if (e.target.closest(".menu__close") || e.target.closest(".menu__link")) {
			menu.classList.remove("menu_active");
			body.classList.remove("body_lock");
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

export const scrollToSection = () => {
	const sections = document.querySelectorAll("[data-scroll]");
	const headerHight = document.querySelector(".header").clientHeight;
	const links = document.querySelectorAll(".js-link");

	let sectinosId = [];

	const scrollBehavior = (el) => {
		const section = document.querySelector(el);

		window.scroll({
			behavior: "smooth",
			top: section.offsetTop - headerHight,
			left: 0,
		});
	};

	const getIdSections = () => {
		sections.forEach((item) => {
			sectinosId.push(item.id);
		});
	};

	const startScroll = () => {
		let linkHref;

		links.forEach((link) => {
			link.addEventListener("click", (e) => {
				e.preventDefault();
				linkHref = link.getAttribute("href");
				for (let i = 0; i < sectinosId.length; i++) {
					if (`#${sectinosId[i]}` === linkHref) {
						scrollBehavior(`#${sectinosId[i]}`);
					}
				}
			});
		});
	};

	getIdSections();
	startScroll();
};
