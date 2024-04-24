// Description: This script tests various numeric
// conversion techniques
// Author: Jordan Q. Newprogrammer

"use strict";

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

//  results in parseIntel
a = parseInt(a); 
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);


console.log(a);
console.log(b);
console.log(c);
console.log(d);

//--------------------

"use strict";

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

//results in parseFloat 
a = parseFloat(a); 
b = parseFloat(b);
c = parseFloat(c);
d = parseFloat(d);


console.log(a);
console.log(b);
console.log(c);
console.log(d);

//---------------------

"use strict";

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

//results in Number 
a = Number(a); 
b = Number(b);
c = Number(c);
d = Number(d);


console.log(a);
console.log(b);
console.log(c);
console.log(d);

//--------------------

"use strict";

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

//results in unary 
a = +(a); 
b = +(b);
c = +(c);
d = +(d);


console.log(a);
console.log(b);
console.log(c);
console.log(d);