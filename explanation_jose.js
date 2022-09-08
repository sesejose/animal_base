"use strict";

window.addEventListener("DOMContentLoaded", start);

// JSON properties
// "fullname": "Mandu the amazing cat",
// "age": 10

// 1 . Read the properties frome the JSON file
// 2 . Convert them into variables (naming them with a noun).
// 3 . Create new object from prototype

// PROTOTYPE
// 3 . This is the prototype
const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

// OBJECT
// 3 . With the prototype we create an actual object like this:
const animal = Object.create(Animal);

//The created object will have the same properties and values as the prototype
animal.name = name;
animal.type = type;
animal.desc = desc;
animal.age = age;

//But they can be overwritten in the object without change the prototype

//JSON --> //The values setted in the prototype need to comes from somewhere

//FUNCTION the preparing data function will look like this:
function prepareData(jsonData) {}

//PROPERTIES OBJECT --> VARIABLES : Set the properties on the object to the VARIABLES

const Mandu = {
  name: "Mandu",
  type: "Cat",
  desc: "Amazing",
  age: 10,
};

const Mia = {
  name: "Mia",
  type: "Cat",
  desc: "Black",
  age: 10,
};

const Leelo = {
  name: "Leelo",
  type: "Dog",
  desc: "Growing",
  age: 3,
};

const Toothless = {
  name: "Toothless",
  type: "Dragon",
  desc: "Trained",
  age: 14,
};

const ScoobyDoo = {
  name: "ScoobyDoo",
  type: "Dog",
  desc: "Wondering",
  age: 14,
};

const Horsey = {
  name: "Horsey",
  type: "horse",
  desc: "Horsing",
  age: 10,
};

//OBJECT to and ARRAY --> Add the object to an array of data objects
