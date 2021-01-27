import cardsTemplate from "./templates/card.hbs";
import menu from "./menu.json";

const markup = cardsTemplate(menu);

const menuRef = document.querySelector(".js-menu");
menuRef.insertAdjacentHTML("beforeend", markup);
