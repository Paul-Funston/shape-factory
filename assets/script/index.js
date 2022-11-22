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
  createShape(colourInput.value, shapeInput.value)
});

function createShape(colour, shape) {
  const newShape = new Shape(colour, shape)
  createdShapesArray.push(newShape)
  displayShape(newShape)
}

function displayShape(obj) {
  let shape = obj.getShape();
  let colour = obj.getColour();
  let newElement = document.createElement('div');
  newElement.classList.add(`shape`);
  newElement.classList.add(shape);
  newElement.classList.add(colour);
  factory.append(newElement);
  onEvent('click', newElement, () => {
    showInfo(obj)
  })
}


  function showInfo(obj) {
    let n = createdShapesArray.indexOf(obj)
    infoReturn.innerText = `Unit ${n + 1} ${obj.getInfo()}`
  }