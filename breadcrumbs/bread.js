const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document
  .querySelector("button")
  .addEventListener("click", addBreadCrumbsToPage);

function addBreadCrumbsToPage() {
  console.log("Tilføj krummer");
  document.querySelector("ul").innerHTML = generateBreadCrumbPath();
}

function generateBreadCrumbPath() {
  let str = "";

  bc.forEach((item, index) => {
    if (index === bc.length - 1) {
      str += `<li>${item.name}</li>`;
    } else {
      str += `<li><a href="${item.link}">${item.name}</a></li>`;
    }
  });

  return str;
}
