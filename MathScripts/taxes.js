"use strict";

//the known values
var monthlySalary = 5000;
var taxes = .23

//what we need to know 
var withHeldTaxes = (monthlySalary * taxes);

//the result
var message = withHeldTaxes.toFixed(2) + " is withheld for taxes" ;

console.log(message);