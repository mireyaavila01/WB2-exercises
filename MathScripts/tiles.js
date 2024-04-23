"use strict";

//the known values
var roomLength = 13;
var roomWidth = 10;
var tilesPerBox = 12;

//what we need to know 
var roomsSquareFeet = roomLength * roomWidth;
var howManyBoxesToBuy = Math.ceil(roomsSquareFeet / tilesPerBox);


//the results 
var message = "For a " + roomLength + "x" + roomWidth + 
"room (" + roomsSquareFeet + "sqft)you need to purchase " + howManyBoxesToBuy + " boxes"

console.log(message);