"use strict"

// variables needed

var payRate;
var hoursWorked;
var regularPay;
var overTimeHours;
var overTimePay;
var grossPay;

var annualGrossPay;
var incomeRnage;
var taxRate;
var filingStatus;

// what we know 

payRate = 17.30 ;
hoursWorked = 45 ;
annualGrossPay = grossPay * 52 ;


// the if statements 

if (hoursWorked <= 40){
    grossPay = payRate * hoursWorked ;

}

if (hoursWorked > 40 ) {
    overTimeHours = (hoursWorked - 40 ); 
    overTimePay = ((payRate * 1.5) * overTimeHours) ; 
    regularPay = payRate * 40;
    grossPay = regularPay + overTimePay;
   
}

if (annualGrossPay < 12000) {
    taxRate = .5 ;
}






