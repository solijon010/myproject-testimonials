const themeBtns = document.querySelectorAll(".theme-controller button");


themeBtns[0].addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
  themeBtns[0].classList.toggle("hidden");
  themeBtns[1].classList.toggle("hidden");
});
themeBtns[1].addEventListener("click", () => {
  document.body.classList.add("dark-mode");
  themeBtns[0].classList.toggle("hidden");
  themeBtns[1].classList.toggle("hidden");
});
