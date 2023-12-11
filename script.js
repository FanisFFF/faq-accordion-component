const collapseIcon = document.querySelectorAll(".collapse-image");
const collapseAnswers = document.querySelectorAll(".answer");
const iconPlus = document.querySelectorAll(".plus-icon");
const iconMinus = document.querySelectorAll(".minus-icon");

console.log(iconPlus);
console.log(iconMinus);
collapseIcon.forEach((el, i) => {
  el.addEventListener("click", () => {
    collapseAnswers[i].classList.toggle("active");
    iconPlus[i].classList.toggle("hidden-icon");
    iconMinus[i].classList.toggle("hidden-icon");
    console.log(iconPlus[i]);
  });
});
