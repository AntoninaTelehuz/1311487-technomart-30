const buyLink = document.querySelector(".buy");
const buyPopup = document.querySelector(".modal-after-buy");
const buyClose = buyPopup.querySelector(".modal-close-buy");

buyLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  });
  
  buyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (buyPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        buyPopup.classList.remove("modal-show");
      }
    }
  });