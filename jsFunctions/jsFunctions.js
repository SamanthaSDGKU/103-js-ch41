function greet(name,age){
    return "Hello " + name + "!" + age;
 }
 
 console.log(greet("Eric",26));

 //Define a function called multiplyThree which accepts a number and returns that number multiplied by 3.

 // 1)create function
 function multiplyThree(num){
    var mult = num*3;
    return mult;
 }

console.log(mult);
 // 2) run the function
console.log(multiplyThree(10));//30

// sum();
// function sum(){
//     console.log(10+10);
// }

let sum2 = function(){
    console.log(3+3);
}
sum2();

let total =0;

function addCart(price){
   return total += price;
}

total = addCart(200);
total = addCart(400);
total = addCart(600);
console.log(total);