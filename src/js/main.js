import Swiper, { Navigation, Pagination } from "swiper";
import * as functions from "./modules/functions.js";

const swiper = new Swiper(".about__container", {
	modules: [Navigation, Pagination],
	direction: "horizontal",
	pagination: {
		el: ".about__pagination",
		clickable: true,
	},
	breakpoints: {
		1199.98: {
			direction: "vertical",
		},
	},
});
const swiper2 = new Swiper(".portfolio__wrapper", {
	modules: [Navigation, Pagination],
	direction: "horizontal",
	pagination: {
		el: ".portfolio__pagination",
		clickable: true,
	},
	breakpoints: {
		1199.98: {
			direction: "vertical",
		},
	},
});

functions.burger();
functions.srollHeader();
functions.scrollToSection();
