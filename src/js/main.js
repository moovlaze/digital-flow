import * as functions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from "swiper";

functions.burger();

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
