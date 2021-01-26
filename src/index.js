import "./styles.css";
import "./theme";
import menu from "./menu.json";
import foodTemplate from "./templates/food.hbs";

const markup = foodTemplate(menu);

document.querySelector(".js-menu").insertAdjacentHTML("beforeend", markup);
