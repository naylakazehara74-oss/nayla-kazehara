console.log("Nayla Kazehara is online.");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      console.log("Nayla: navigation started.");
    });
  });
});
