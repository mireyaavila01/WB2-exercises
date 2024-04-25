"use strict" ;

// variables we need 
var a;
var b;
var c;
var min;
var max;


// what we know 

a = 2 ;
b = 4 ;
c = 6 ;
min = 2 ;
max = 6 ;

//calcualtions

if ( a<b && a<c) {
   min = a ;
}

else if (c>a && c>b) {
   max = c ;
}

//the results 

 var message = ("the min is " + min) + (" and max is " + max);

console.log(message);

