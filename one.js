// Js = is a programming language used to make web pages interactive.
function changeText(){
    document.getElementById("greeting").innerText = "Hello, javascript!";
}
// Javascript variables
// variabl;es store data.
let name = "john"
const age = 21
var city = "Addis Ababa"
// Data types
num = 10
string = "hello"
boolean = true
Arrays = [2,4,6,7,8]
// objects = let person = {name: john, age : 21};
// Function reusable block of code 
function greet(name){
    return "Hello," + name;
}
console.log(greet("Alice"));
// conditionals 
let number= 10;
if (number> 5){
    console.log("Greater than 5");
} else{
    console.log("5 or less")
}
// loops
for(let i =1; i<=5; i++){
    console.log("Number: " + i)
}