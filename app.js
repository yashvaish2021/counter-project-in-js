const increaseBtn = window.document.querySelector(".increase");
const resetBtn = window.document.querySelector(".reset");
const decreaseBtn = window.document.querySelector(".decrease");
const counterValue = window.document.querySelector("#value");
let currentCountValue = 0;

increaseBtn.addEventListener("click", function () {
  currentCountValue++;
  // counterValue.textContent = currentCountValue;
  giveColor();
});

resetBtn.addEventListener("click", function () {
  currentCountValue = 0;
  // counterValue.textContent = 0;
  giveColor();
});

decreaseBtn.addEventListener("click", function () {
  currentCountValue--;
  // counterValue.textContent = currentCountValue;
  giveColor();
});

function giveColor() {
  counterValue.textContent = currentCountValue;
  if (currentCountValue < 0) {
    counterValue.style.color = "red";
  } else if (currentCountValue > 0) {
    counterValue.style.color = "green";
  } else counterValue.style.color = "black";
}
