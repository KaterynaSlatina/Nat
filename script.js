const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const btnYes = document.querySelector("#yes-btn");
const btn = document.querySelector("#no-btn");

btn.addEventListener("mouserun", () => {
  btn.style.left = `${random(0.9)}%`;
  btn.style.top = `${random(0.9)}%`;
});

btnYes.addEventListener("click", () => {
  alert("Я знала, ты сделаешь правильный выбор!");
});
