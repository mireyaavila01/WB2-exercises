"use strict";

// variables needed 

var currentHour;
var greeting;

//what we know

currentHour =  5 ;

if (currentHour <= 9) {
    greeting = "Good morning!" ;
}
 
else if (currentHour <= 10) {
    greeting = "Good day!" ;
}

else if (currentHour >= 16) {
    greeting = "Good evening!" ;
}

console.log(greeting);