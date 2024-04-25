"use strict";

// variables needed 

var currentHour;
var greeting;

//what we know

currentHour = 5 ;

//calculations

if (currentHour < 0) {
    greeting = "ERROR INVALID HOUR OF " + currentHour;
}

else if (currentHour < 10) {
    greeting = "Good morning!" ;
}
 
else if (currentHour < 17) {
    greeting = "Good day!" ;
}

else if (currentHour <= 23) {
    greeting = "Good evening!" ;
}

//results 

console.log(greeting);