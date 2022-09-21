"use strict";

const orderBtn = document.getElementById("order");
const modal = document.querySelector(".modal");
const form = document.querySelector(".modal>form");

orderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

modal.addEventListener("click", (e) => {
  modal.style.display = "none";
});

form.addEventListener("click", (e) => {
  e.stopPropagation();
});
