"use strict"

// variables needed

var payRate;
var hoursWorked;
var weeklyGrossPay;
var annualGrossPay;
var taxRatePercent;
var taxWithholding;
var filingStatus;
var netPay;

// what we know 

payRate = 10 ;
hoursWorked = 45 ;
annualGrossPay = weeklyGrossPay * 52 ;
filingStatus = "single";
weeklyGrossPay = 450 ;
taxWithholding = taxRatePercent * 450; 
netPay =  450 - taxWithholding; 


// the if statements 

if ( annualGrossPay < 12000 && filingStatus == "single" ) {
    taxRatePercent = .05;
    taxWithholding = .05 * 450 ;
    netPay = 450 - taxWithholding;

}

else if ( annualGrossPay >= 12000 && filingStatus == "single" ) {
    taxRatePercent = .10;
    taxWithholding = .10 * 450 ;
    netPay = 450 - taxWithholding;
}
else if (annualGrossPay <= 74999.99 && filingStatus == "single ") {
    taxRatePercent = .15;
    taxWithholding = .15 * 450 ;
    netPay = 450 - taxWithholding;
}

else if (annualGrossPay >= 75000 && filingStatus == "single") {
    taxRatePercent = .20;
    taxWithholding = .20 * 450 ;
    netPay = 450 - taxWithholding;
}



else if ( annualGrossPay < 12000 && filingStatus == "joint" ) {
    taxRatePercent = 0;
    taxWithholding = 0 * 450 ;
    netPay = 450 - taxWithholding;
}

else if ( annualGrossPay <= 24999.99 && filingStatus == "joint" ) {
    taxRatePercent = .06;
    taxWithholding = .06 * 450 ;
    netPay = 450 - taxWithholding;
}
else if (annualGrossPay <= 74999.99 && filingStatus == "joint") {
    taxRatePercent = .11;
    taxWithholding = .11 * 450 ;
    netPay = 450 - taxWithholding;
}

else if (annualGrossPay >= 75000 && filingStatus == "joint") {
    taxRatePercent = .20;
    taxWithholding = .20 * 450 ;
    netPay = 450 - taxWithholding;
}


var message = ("You worked " + hoursWorked + " hours this period. ") +
("Because you earn " + payRate + " per hour, your weekly gross pay is " + weeklyGrossPay) +
(" Your filing status is " + filingStatus) + 
(" Your tax withholdings this period is " + taxWithholding) + 
(" Your net pay is " + netPay) ;

console.log(message);

/*
if(filingStatus == "single"){
    if (annualGrossPay < 1200) {taxRatePercent = .05 ;}
    else if (annualGrossPay < 25000) {taxRatePercent = .10 ;}
    else if (annualGrossPay < 75000) {taxRatePercent = .15 ;}
    else if (annualGrossPay > 75000) {taxRatePercent = .20 ;}
}

else if(filingStatus == "joint"){
    if (annualGrossPay < 1200) {taxRatePercent = 0 ;}
    else if (annualGrossPay < 25000) {taxRatePercent = .06 ;}
    else if (annualGrossPay < 75000) {taxRatePercent = .11 ;}
    else if (annualGrossPay > 75000) {taxRatePercent = .20 ;}
}



var message = ("You worked " + hoursWorked + " hours this period. ") +
("Because you earn " + payRate + " per hour, your weekly gross pay is " + weeklyGrossPay) +
(" Your filing status is " + filingStatus) + 
(" Your tax rate percent is " + taxRatePercent) ; 


console.log(message); */


