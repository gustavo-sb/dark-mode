const changeTheme = () => {
  let theme = false;

  let body = document.querySelector("body");
  let header = document.querySelector("header");
  let item = document.querySelectorAll(".item-light");

  if (theme === false) {
    body.classList.toggle("dark");
    header.classList.toggle("header-dark");
    for (let i = 0; i < item.length; i++) {
      item[i].classList.toggle("item-dark");
    }
    theme = true;
  } else {
    body.classList.toggle("light");
    header.classList.toggle("header-light");
    for (let i = 0; i < item.length; i++) {
      item[i].classList.toggle("item-light");
    }
    theme = false;
  }
};