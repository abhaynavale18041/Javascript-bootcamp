const cowsay= require("cowsay");
console.log(cowsay.say({text: "I am moooodule"}));
const currentDate= new Date();
// constant name cannot be changed
// function in js
console.log('Today s date is'  + currentDate);
function greet(name){
    let message= `hello, ${name}!`;
    return message
}
// function call
const greeting= greet("abhay")
console.log(greeting)

let counter = 0;
while(counter<3){
    console.log(`Loop iteration is ${counter}`)
    counter=counter+1
}
console.log('while loop finished');
const fruits=["Apple","Watermelon","Orange","Lemon"]
for(let i =0; i<fruits.length;i++){
    const fruit=fruits[i];
    console.log(`Fruits at index ${fruits}`)
}
function calculateArea(length, width= 1){
    return length*width;


}
const rectangleArea=calculateArea(10,5);
console.log(`Area is ${rectangleArea}`);

const multiply =(x,y)=> x*y;
console.log (`The product is: ${multiply(5,6)}`)
let limit=4000000;
function evenFibonacciSum(limit) {
  let a = 1, b = 2;
  let sum = 0;

  while (b <= limit) {
    if (b % 2 === 0) {
      sum += b;
    }
    let next = a + b;
    a = b;
    b = next;
  }

  return sum;
}

console.log(evenFibonacciSum(4000000));  


let num = 13195;
let factor = 2;
let lastFactor = 1;

while (num > 1) {
    if (num % factor === 0) {
        lastFactor = factor;
        num = num / factor;
        while (num % factor === 0) {
            num = num / factor;
        }
    }
    factor++;
}

console.log(`The largest prime factor is: ${lastFactor}`);
arr=["2","3","4"]
const b= arr.join('') //array to string
console.log(b)
let text = "How are you doing today?";
const myArray = text.split(" "); //string to array
console.log(myArray)