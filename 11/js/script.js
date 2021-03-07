const closeButton = document.querySelector(".popup-close");
const openButton = document.querySelector(".openbutton");
const popup = document.querySelector(".popup");

openButton.onclick = function () {
  popup.classList.remove("popup-hidden");
};
closeButton.onclick = function () {
  popup.classList.add("popup-hidden");
};

