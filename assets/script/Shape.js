'use strict';
/*
    Object-oriented JavaScript
    Paul Funston

    Shape Class
*/

class Shape {

  constructor(colour, shape) {
    this._colour = colour;
    this._name = shape;
  }

  getColour() {
    this.colour = this._colour;
    return this.colour;
  }

  getShape() {
    this.name = this._name;
    return this._name;
  }

  getInfo() {
    return `${this.getColour()} ${this.getShape()}`
  }

}

export {Shape};

// const shape = new Shape('circle', 'pink');

// console.log(shape.getInfo());