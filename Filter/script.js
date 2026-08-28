const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

// Punkt 1 //

const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric);
const vehicleMoreThan2Seats = vehicles.filter(
  (vehicle) => vehicle.passengers > 2,
);
const elVehiclesOwnerJonas = vehicles.filter(
  (vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas",
);
const vehicleFuelRugbroed2Seats = vehicles.filter(
  (vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers >= 2,
);

showTheseVehicles(vehicles);

// Punkt 2 - tilføjet ternary'er //

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; //fjerner tabellen når man trykker på knap, så den resetter //
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel ? each.fuel : "-"}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ? each.stops : "-"}</td>
  <td>${each.ownedBy ? each.ownedBy : "-"}</td>
  <td>${each.isElectric ? "X" : "-"}</td>
  <td>${each.isTandem ? "X" : "-"} </td>
</tr>`;
  });
}

//Punk 3 - knapper som viser et filtret resultat//

const firstBtn = "#Btn1";
const secondBtn = "#Btn2";
const thirdBtn = "#Btn3";
const fourthBtn = "#Btn4";
const fifthBtn = "#Btn5";

document.querySelectorAll(".button").forEach((each) => {
  each.addEventListener("click", filterClick);
});

function filterClick(show) {
  if (show.target.className === "button Btn1") {
    showTheseVehicles(electricVehicles);
  }
  if (show.target.className === "button Btn2") {
    showTheseVehicles(vehicleMoreThan2Seats);
  }
  if (show.target.className === "button Btn3") {
    showTheseVehicles(elVehiclesOwnerJonas);
  }
  if (show.target.className === "button Btn4") {
    showTheseVehicles(vehicleFuelRugbroed2Seats);
  }
  if (show.target.className === "button Btn5") {
    showTheseVehicles(vehicles);
  }
}
