'use strict';
/*
    Object-oriented JavaScript
    Paul Funston

    Shape Factory
*/

import  {select, onEvent} from './util.js';

import {Shape} from './Shape.js';

const shapeInput = select('.shape-select');
const colourInput = select('.colour-select');
const createBtn = select('.create-btn');
const factory = select('.factory');
const infoReturn = select('.info');
const createdShapesArray = [];


onEvent('click', createBtn, () => {
  if (createdShapesArray.length >= 24) {
    infoReturn.innerText = "The Factory is full";
  } else {
    createShape(colourInput.value, shapeInput.value)
  }
});

function createShape(colour, shape) {
  const newShape = new Shape(colour, shape)
  createdShapesArray.push(newShape)
  displayShape(newShape)
}

function displayShape(obj) {
  let shape = obj.getName();
  let colour = obj.getColour();
  let newElement = document.createElement('div');
  newElement.classList = `shape ${shape} ${colour}`;
  // newElement.style.backgroundColour = colour;
  onEvent('click', newElement, () => {
    showInfo(obj)
  })

  factory.append(newElement);
}


function showInfo(obj) {
  let n = createdShapesArray.indexOf(obj)
  infoReturn.innerText = `Unit ${n + 1}: ${obj.getInfo()}`
}