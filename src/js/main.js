import Swiper, { Navigation, Pagination } from "swiper";
import * as functions from "./modules/functions.js";

const swiper = new Swiper(".about__container", {
	modules: [Navigation, Pagination],
	direction: "horizontal",
	pagination: {
		el: ".swiper-pagination",
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
