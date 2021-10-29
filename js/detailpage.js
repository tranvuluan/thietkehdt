$(document).ready(() => {
    // Change quantity
const quantityInput = document.querySelector("#quantity");
const incBtn = document.querySelector("#increaseQuantity");
const decBtn = document.querySelector("#decreaseQuantity");

incBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let curQty = parseInt(quantityInput.value);
  quantityInput.setAttribute("value", curQty + 1);
});
decBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let curQty = parseInt(quantityInput.value);
  curQty > 1 && quantityInput.setAttribute("value", curQty - 1);
});

// Change Image
const otherImg = document.querySelectorAll("#otherImg");
const mainImg = document.querySelector("#mainImg");
otherImg.forEach((imgElement) => {
  imgElement.addEventListener("click", () => {
    document.querySelector(".img--active").classList.remove("img--active");
    mainImg.setAttribute("src", imgElement.getAttribute("src"));
    imgElement.classList.add("img--active");
  });
});

// Change product nav tab
const productTabBtn = document.querySelectorAll(".nav-item");
const productNavTab = document.querySelectorAll(".nav-tab");
for (let i = 0; i < productTabBtn.length; i++) {
  productTabBtn[i].addEventListener("click", () => {
    document.querySelector(".nav-item.active").classList.remove("active");
    document.querySelector(".nav-tab.show").classList.remove("show");

    productTabBtn[i].classList.add("active");
    productNavTab[i].classList.add("show");
  });
}

})