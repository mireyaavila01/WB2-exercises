"use strict";

//define our known values.
var savingsAccountWorth = 1000;
var numberOfYears = 10;

//calculate the unknown values.
var newWorth;
newWorth = savingsAccountWorth *2;

//used the article.
var interestRate;
interestRate = 72/numberOfYears;

//display the result.
var message =  "At a "   + interestRate + " interest rate, your savings account"
+ " will be worth " + newWorth.toFixed(2) + " in " + numberOfYears.toFixed(1) + " years. "

console.log(message);