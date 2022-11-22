'use strict';
/*
    Object-oriented JavaScript
    Paul Funston

    Shape Class
*/

class Shape {

  constructor(colour, shape) {
    this.colour = colour;
    this.shape = shape;
  }

  getColour() {
    return this.colour;
  }

  getShape() {
    return this.shape;
  }

  getInfo() {
    return `${this.getColour()} ${this.getShape()}`
  }

}

export {Shape};

// const shape = new Shape('circle', 'pink');

// console.log(shape.getInfo());