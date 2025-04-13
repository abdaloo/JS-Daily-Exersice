//Js program to swap two variables

let firstVar = 12;
let secondVar = 10;
let temp;

// console.log(`Before swapping: 
//     firstVar = ${firstVar}
//     secondVar = ${secondVar}`);

// using temporary Variable 
// temp = firstVar;
// firstVar = secondVar;
// secondVar = temp;

// console.log(`After swapping: 
//     firstVar = ${firstVar}
//     secondVar = ${secondVar}`);

//using destructure assingment

// [firstVar,secondVar] = [secondVar,firstVar];

// console.log(firstVar);
// console.log(secondVar);


//using addition and subtraction method

firstVar = firstVar + secondVar;
secondVar = firstVar - secondVar;
firstVar = firstVar -secondVar;

console.log(firstVar);
console.log(secondVar);
