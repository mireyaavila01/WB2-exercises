"use strict";
 
// the known values 
var x1 = 4;
var y1 = 2;

var x2 = 8;
var y2 = 4;

//what we need to know
var distance = (x2 - x1)**2 + (y2 - y1)**2;


//the result 
var message = "The distance is " + Math.sqrt(distance);

console.log(message);