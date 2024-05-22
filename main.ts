// Day 11 of coding challenge

// Question 1: Function with rest Parameters: Write a function that takes a rest parameter represting 
// multiple hobbies. It should each hobby with a statement saying you enjoy that hobby.

function loghobbies(...hobbies:string[]){
    hobbies.forEach(hobby =>{
        console.log(`I enjoy ${hobby}.`);
        
    });
}
loghobbies("cricket", "coding", "writing");

// Question 2: Refactoring to Arrow function: Take a simple function that calculates the area of a rectangle
// and refactor it into an arrow function.

function calculateArea(width: number, height: number): any {
    return width * height;
}
let calculateAreaArror = (width: number, height: number): number => width * height;
console.log(calculateAreaArror(8,4));

