let closeButton = document.querySelector(".popup-close");
let openButton = document.querySelector(".openbutton");
let popup = document.querySelector(".popup");

openButton.onclick = function () {
  popup.classList.remove("visually-hidden");
};
closeButton.onclick = function () {
  popup.classList.add("visually-hidden");
};
