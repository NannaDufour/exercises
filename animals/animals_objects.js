"use strict";

window.addEventListener("DOMContentLoaded", start);

const Animal = {
  name: "-default name-",
  desc: "-no description-",
  type: "-unknown-",
  age: 0,
};

const allAnimals = [];

function start() {
  console.log("ready");
  registerButtons();
  loadJSON();
}

function registerButtons() {
  document.querySelectorAll("[data-action = 'filter']").forEach((button) => {
    button.addEventListener("click", selectFilter);
  });

  document.querySelectorAll("[data-action = 'sort']").forEach((button) => {
    button.addEventListener("click", selectSort);
  });
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // Create new object with cleaned data - and store that in the allAnimals array
    const animal = Object.create(Animal);
    // Extract data from json object
    const fullname = jsonObject.fullname;

    const firstSpace = fullname.indexOf(" ");
    const secondSpace = fullname.indexOf(" ", firstSpace + 1);
    const lastSpace = fullname.lastIndexOf(" ");

    const name = fullname.substring(0, firstSpace);
    const desc = fullname.substring(secondSpace + 1, lastSpace);
    const type = fullname.substring(lastSpace + 1);

    // console.log(`name: _${name}_desc:_${desc}_type:_${type}_`);
    // put cleaned data into newly created object
    animal.name = name;
    animal.desc = desc;
    animal.type = type;

    animal.age = jsonObject.age;
    // add the objects to the global array
    allAnimals.push(animal);
  });

  displayList();
}

function prepareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function selectFilter(event) {
  const filter = event.target.dataset.filter;
  filterList(filter);
}

function filterList(filterBy) {
  let filteredList = allAnimals;
  if (filterBy === "cat") {
    // create filter list of only cats
    filteredList = allAnimals.filter(isCat);
  } else if (filterBy === "dog") {
    filteredList = allAnimals.filter(isDog);
  } else if (filterBy === "dragon") {
    filteredList = allAnimals.filter(isDragon);
  } else if (filterBy === "horse") {
    filteredList = allAnimals.filter(isHorse);
  }

  displayList(filteredList);
}

function isCat(animal) {
  return animal.type === "cat";
}
function isDog(animal) {
  return animal.type === "dog";
}
function isDragon(animal) {
  return animal.type === "dragon";
}
function isHorse(animal) {
  return animal.type === "horse";
}

function selectSort(event) {
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;

  //toogle the direction
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }
  sortList(sortBy, sortDir);
}

function sortList(sortBy, sortDir) {
  let sortedList = allAnimals;
  let direction = 1;
  if (sortDir === "desc") {
    direction = -1;
  } else {
    direction = 1;
  }

  sortedList = sortedList.sort(sortByProperty);

  function sortByProperty(animalA, animalB) {
    if (animalA[sortBy] < animalB[sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }

  displayList(sortedList);
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
