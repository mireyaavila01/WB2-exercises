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


//calcualtions

//test for a
if ( a > b && a > c){
   max = "The value of " + a + " in the variable A is the biggest!";
}
//test for b
else if ( b > a && b > c){
   max = "The value of " + b + " in the variable B is the biggest!";
}
//test for c
else if ( c > a && c > b){
   max = "The value of " + c + " in the variable C is the biggest!";
}

//test for a
if ( a < b && a < c){
   min = "The value of " + a + " in the variable A is the smallest!";
}
//test for b
else if ( b < a && b < c){
   min = "The value of " + b + " in the variable B is the smallest!";
}
//test for c
else if ( c < a && c < b){
   min = "The value of " + c + " in the variable C is the smallest!";
}


//the results 

console.log(min);
console.log(max);

