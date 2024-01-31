// const random = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
const btnYes = document.querySelector("#yes-btn");
const btn = document.querySelector("#no-btn");

// btn.addEventListener("mouserun", () => {
//   btn.style.left = `${random(0.9)}%`;
//   btn.style.top = `${random(0.9)}%`;
// });

btnYes.addEventListener("click", () => {
  alert("Я знала, ты сделаешь правильный выбор!");
});

let elemLeft, elemTop, maxElemLeft, maxElemTop, elem;

maxElemLeft = document.documentElement.clientWidth - btn.offsetWidth;
maxElemTop = document.documentElement.clientHeight - btn.offsetHeight;

btn.onmousemove = handler;

function handler() {
  elemLeft = Math.random() * maxElemLeft;
  btn.style.left = elemLeft + "px";
  elemTop = Math.random() * maxElemTop;
  btn.style.top = elemTop + "px";
  //console.log(elemLeft+' - '+elemTop);
}
