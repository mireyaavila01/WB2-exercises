"use strict";

// the values we know 
var peopleGoing = 30;
var vanSeats = 15;
var vanCost = 250;

//what we need to know
var vansNeeded = peopleGoing / vanSeats;
var totalVanCost = vansNeeded * vanCost;
var splitCost = totalVanCost / peopleGoing;

//the results
console.log("The amount of vans needed is " + vansNeeded);

console.log("The total cost to rent the vans is " + totalVanCost.toFixed(2));

console.log("The cost split per person would be " + splitCost.toFixed(2));


 