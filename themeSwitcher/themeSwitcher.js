const theme = document.querySelector("#dropdown");

theme.addEventListener("change", function () {
  document.querySelector("body").dataset.theme = theme.value;
});
