const btn = document.querySelector(".dark-mode label");
console.log(btn);
// btn.classList.toggle("checked");

btn.addEventListener("click", (e) => {
  console.log(e);
  e.target.classList.toggle("checked");

  if (e.target.className == "checked") {
    document.documentElement.style.setProperty("--background-color", "#F7F9FF");
    document.documentElement.style.setProperty("--font-color", "#1D1F29");
    document.documentElement.style.setProperty("--background-card", "#F1F3FA");
    document.documentElement.style.setProperty(
      "--background-dark-mode",
      "#AEB3CB"
    );
  } else {
    document.documentElement.style.setProperty("--background-color", "#20222f");
    document.documentElement.style.setProperty("--font-color", "#ffffff");
    document.documentElement.style.setProperty("--background-card", "#252b42");
    document.documentElement.style.setProperty(
      "--background-dark-mode",
      "linear-gradient(225deg, #40db82 0%, #388fe7 98.02%)"
    );
  }
});

// --background-color: #20222f;
// --font-color: #ffffff;
// --background-card: #252b42;
// --background-dark-mode: linear-gradient(225deg, #40db82 0%, #388fe7 98.02%);
