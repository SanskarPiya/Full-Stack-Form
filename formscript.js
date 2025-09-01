const form = document.querySelector("form");
form.addEventListener("submit", () => {
  setTimeout(() => form.reset(), 100);
});
