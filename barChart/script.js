const list = document.querySelector("ul");
const valueArr = [];

setInterval(generateColumns, 500);

function generateColumns() {
  let height = Math.floor(Math.random() * 101);
  valueArr.push(height);
  if (valueArr.length > 20) {
    // console.log("nu er arrayet længere end 20");//
    valueArr.shift();
  }
  const li = document.createElement("li");
  li.style.setProperty("--height", height);
  list.appendChild(li);

  if (list.children.length > 20) {
    list.removeChild(list.firstElementChild);
  }

  console.log("valueArr", valueArr);
}
