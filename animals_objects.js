"use strict";

window.addEventListener("DOMContentLoaded", start);

// const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

//Creating Array to by fill
const arrAnimals = [];

//Then I create the PROTOTYPE as a variable for that object named Animals.
const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    // TODO: MISSING CODE HERE !!!

    let animal = Object.create(Animal);

    console.log(animal);

    animal.name = jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(" "));

    const strDesc = jsonObject.fullname.split(" ");

    animal.desc = strDesc[2];

    animal.age = jsonObject.age.valueOf();

    addObjectsToArray();

    function addObjectsToArray() {
      arrAnimals.push(animal);
    }

    console.log("arrAnimals:", arrAnimals);
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  arrAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  // Define a variable clone, select the template content and clone it
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  //Then select the field where to set the data

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
