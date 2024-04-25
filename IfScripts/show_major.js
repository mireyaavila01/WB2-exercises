"use strict";

// variables needed

var studentName;
var nameOfMajor
var departmentOffice;
var studentMajor;

//what we know

studentMajor = "CSCI";

//calucualtions

if ( studentMajor == "BIOL"){
    studentName = "Anna";
    nameOfMajor = "Biology";
    departmentOffice = "Science Bldg,Room 310";
}

else if (studentMajor == "CSCI") {
    studentName = "Ben";
    nameOfMajor = "Computer Science";
    departmentOffice = "Sheppard Hall, Room 314";

}

else if (studentMajor == "ENG") {
    studentName = "Betty";
    nameOfMajor = "English";
    departmentOffice = "Kerr Hall,Room 201";
    
}

else if (studentMajor == "HIST") {
    studentName = "Carly";
    nameOfMajor = "History";
    departmentOffice = "Kerr Hall, Room 114";
    
}

else if (studentMajor == "MKT") {
    studentName = "David";
    nameOfMajor = "Marketing";
    departmentOffice = "Westly Hall, Room 310";
    
}


//the results

var message = (("Student:" + studentName) + (" Major:" + nameOfMajor) + 
(" Advising Location:" + departmentOffice));

console.log(message);