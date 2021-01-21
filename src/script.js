const red = document.getElementById("redBtn");
const purple = document.getElementById("purpleBtn");

red.addEventListener("click", () => {
  setInterval(() => {
    createHeart("❤️");
  }, 300);
});

purple.addEventListener("click", () => {
  setInterval(() => {
    createHeart("💜");
  }, 300);
});

function createHeart(text) {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerText = text;

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.append(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
