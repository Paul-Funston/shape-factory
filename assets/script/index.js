'use strict';
/*
    Object-oriented JavaScript
    Paul Funston

    Shape Factory
*/

import  {select, onEvent, selectAll} from './util.js';

import {Shape} from './Shape.js';

const shapeInput = select('.shape-select');
const colourInput = select('.colour-select');
const createBtn = select('.create-btn');
const factory = select('.factory');
const infoReturn = select('.info');