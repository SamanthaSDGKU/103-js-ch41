console.log("Script");
var message = "Hello world";
let num1;//declare the variable
num1=10;//assigning the value
let num2=20;
let sum =num1+num2;
let firstName = "Samantha";

console.log(message,num1,num2);

//document.write("The result of the sum is: " + sum + "the calculation was made by " + firstName);

message="Welcome to coding";

console.log(message);

//excercise #1
let jobTitle = "Software developer";
let partnerName = "Robert";
let geoLocation = "Italy";
let numberChildren = 0;

//traditional string concatenation
//document.write("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberChildren + " kids.");

//template string, template literal
document.write(
    `
    <h2> Exercise 1 </h2>
    <p>
        You will be a ${jobTitle} in ${geoLocation} , and married to ${partnerName} with ${numberChildren} kids.
    </p>
    `
);

//Excerices #2 

var name1="Jason";
let email = "jason@gmail.com";
let monthlySalary = 10000;
const numberMonth=12;

let yearlySalary = monthlySalary*numberMonth;

document.write(
    `
    <p class="details">Name: ${name1}</p>
    <p class="details">Email: ${email}</p>
    <p class="details">Salary: ${yearlySalary}</p>
    `
);