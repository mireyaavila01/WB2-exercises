"use strict";

// variables needed

var studentName;
var nameOfMajor
var departmentOffice;
var studentMajor;

//what we know
studentName = "Betty"
studentMajor = "CSCI";

//calucualtions

if ( studentMajor == "BIOL"){
    nameOfMajor = "Biology";
    departmentOffice = "Science Bldg,Room 310";
}

else if (studentMajor == "CSCI") {
    nameOfMajor = "Computer Science";
    departmentOffice = "Sheppard Hall, Room 314";

}

else if (studentMajor == "ENG") {
    nameOfMajor = "English";
    departmentOffice = "Kerr Hall,Room 201";
    
}

else if (studentMajor == "HIST") {
    nameOfMajor = "History";
    departmentOffice = "Kerr Hall, Room 114";
    
}

else if (studentMajor == "MKT") {
    nameOfMajor = "Marketing";
    departmentOffice = "Westly Hall, Room 310";
    
}


//the results

console.log("Student: " + studentName);
console.log("Major: " + nameOfMajor);
console.log("Advising Location: " + departmentOffice);