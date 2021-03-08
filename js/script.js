const closeButton = document.querySelector(".popup-close");
const openButton = document.querySelector(".openbutton");
const popup = document.querySelector(".popup");
const sendForm = document.querySelector(".sendform");
const inputEmail = document.querySelector(".feedback-email");
const inputName = document.querySelector(".feedback-name");
const inputMessage = document.querySelector(".feedback-text");

// open form
openButton.onclick = function () {
  popup.classList.remove("popup-hidden");
};
closeButton.onclick = function () {
  popup.classList.add("popup-hidden");
};


// send form
 sendForm.onclick = function () {
  if (!inputEmail.value || !inputName.value || !inputMessage.value) {
    popup.classList.remove("popup-shake");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-shake");
  }
}; 
