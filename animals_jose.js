"use strict";

//Loading and callingback the function start.
window.addEventListener("DOMContentLoaded", start);

//Start
function start() {
  fetch("animals.json") // Apostrophe when fetching locally --> Don't need a const as for URL
    .then((response) => response.json())
    .then((jsonData) => {
      //Arrow function is argument, then arrow function with a argument refering to JSON data, then brackets to close the function.
      // .then starts with a "." because is a method that iniciates.
      prepareData(jsonData); // Callback to the function with the same argument that the previous function. It will shows the data.
    });
}

//Model

//Creating Array to by fill
const arrAnimals = [];

//Then I create the PROTOTYPE as a variable for that object named Animals.
const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

//////////////////////////////   Controler   ////////////////////////

function prepareData(jsonData) {
  jsonData.forEach((jsonObject) => {
    //Argument.method.function with an argument that would be every object.

    //*** OBJECT ***
    // Now I should create new object with cleaned data - and store that in the allAnimals array
    //First I'll create the OBJECT with the Animals properties and values.
    //Vaiable = Object . create method (Prototype with Uppercase);
    let animal = Object.create(Animal);
    console.log(animal);

    //JSON Data
    //Animal is filled up with the json file data.
    //Now I read the data (properties) from every obejct in the JSON file.
    //First I use the method substring to get from "0" to the first space " "
    //Then in the separator parameter I said from "0" to "first space" (I'm using indexOf)
    animal.name = jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(" "));

    // Then I needed to define a variable and apply split to define what I am looking for (spaces) ....
    // ... then I navigate trought the spaces an selected the position with a numbrer.
    const strType = jsonObject.fullname.split(" ");
    animal.type = strType[3];

    const strDesc = jsonObject.fullname.split(" ");
    animal.desc = strDesc[2];

    //Here I've just used the ValueOf method to obatin the number.
    animal.age = jsonObject.age.valueOf();

    //Then I need to create the array with all the objects outside of this function.
    // Look array variable on top of this file !

    //Now I want to store the Objects in the arrAnimals - Using PUSH.
    arrAnimals.push(animal);
    console.log("arrAnimals:", arrAnimals);
  });

  //Then I want to replace the values of all the properties of every object in the array!
  //I am saying forEach Object replace the values.
  // The ROW for every animal (obj) is created in the template!
  arrAnimals.forEach(displayAnimal);

  //Filter
  //Here I am creating a variable for what I want "ONLY CATS" !!
  //That variable is equal to the filtered of the array. But I need a funtion to filter.
  //The is-function ! .filter callback that function.
  const onlyCats = arrAnimals.filter(isCat);
  console.log(onlyCats);
  //Why need to be inside this function ???
}

//FIlter
function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

////////////////////////// VIEW  ///////////////////////////////

// I didn't use the Configuration Object that Peter used, but review it's useful.
//Display in the View (Html and Screen)

function displayAnimal(animal) {
  //Template is template
  const template = document.querySelector("#template");
  //Clone are the copies of the content of that tempate
  const clone = template.content.cloneNode(true);

  //Here I am replacing the values of the properties-
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  //Append means where to set every object in the HTML.
  const parent = document.querySelector("#parent tbody");
  parent.appendChild(clone);
}
