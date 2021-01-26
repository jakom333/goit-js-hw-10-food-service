const switcher = document.querySelector("#theme-switch-toggle");
const body = document.querySelector("body");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

switcher.addEventListener("change", changeTheme);

function setDefaultTheme() {
  body.classList.add(Theme.LIGHT);

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    const parsedTheme = JSON.parse(savedTheme);
    body.classList.add(parsedTheme);
  }
}

function changeTheme(event) {
  if (event.target.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem("theme", JSON.stringify(Theme.DARK));
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem("theme", JSON.stringify(Theme.LIGHT));
  }
}

function darkThemeCheck() {
  if (body.classList.contains(Theme.DARK)) {
    switcher.checked = true;
    body.classList.remove(Theme.LIGHT);
  }
}

setDefaultTheme();
darkThemeCheck();
