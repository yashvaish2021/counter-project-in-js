const increaseBtn = window.document.querySelector(".increase");
const resetBtn = window.document.querySelector(".reset");
const decreaseBtn = window.document.querySelector(".decrease");
const counterValue = window.document.querySelector("#value");
let currentCountValue = 0;

increaseBtn.addEventListener("click", function () {
  currentCountValue++;
  counterValue.textContent = currentCountValue;
});

resetBtn.addEventListener("click", function () {
  currentCountValue = 0;
  counterValue.textContent = 0;
});

decreaseBtn.addEventListener("click", function () {
  currentCountValue--;
  counterValue.textContent = currentCountValue;
});
