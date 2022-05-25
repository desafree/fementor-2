const btn = document.querySelector(".dark-mode label");
console.log(btn);
// btn.classList.toggle("checked");

btn.addEventListener("click", (e) => {
  console.log(e);
  e.target.classList.toggle("checked");
});
