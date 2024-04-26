"use strict"

// variables needed

var payRate;
var hoursWorked;
var regularPay;
var overTimeHours;
var overTimePay;
var grossPay;

// what we know 

payRate = 17.30 ;
hoursWorked = 45 ;

// calculations 

if (hoursWorked <= 40){
    grossPay = payRate * hoursWorked ;

}

else if (hoursWorked > 40 ) {
    overTimeHours = (hoursWorked - 40 ); 
    overTimePay = ((payRate * 1.5) * overTimeHours) ; 
    regularPay = payRate * 40;
    grossPay = regularPay + overTimePay;
   
}

// the results 
var message = "worked " + hoursWorked + " hours for " + grossPay;
console.log(message)
