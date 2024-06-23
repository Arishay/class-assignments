
console.log("----------------------------------------------------------------------------------");

//1. Creating a Lesson Plan(Using for loop )

let myWork:{name:string,status:boolean}[] = [];

for (let i = 1; i < 10; i++) {
    let lesson = {
        name:`Lesson ${i}`,
        status:i%2 === 1? true:false
    }
    myWork.push(lesson)
}
console.log(myWork);

console.log("----------------------------------------------------------------------------------");

//2. Guessing Game (Using while loop )

let maxValue = 10;
let generatedNum = Math.floor(Math.random() *maxValue+1)

console.log(`Computer Generated Number: ${generatedNum}`);

let track = false;

let predefineGuess = [2,5,7,8,10];

let i =0;
//using while loop
 while (!track && i<predefineGuess.length) {
    let correctGuess = predefineGuess[i]
    console.log(correctGuess);
    
    if(correctGuess ===generatedNum){
        console.log("Congratulations! You guessed the correct number!");
        track = true;
    }else if (correctGuess <generatedNum){
        console.log("Your guess is too low!");
    }else{
        console.log("Your guess is too high!");
    }
    i++;
}
if (track === false) {
    console.log("Oops! Your guesses are wrong");
}

console.log("----------------------------------------------------------------------------------");

//3. Counter Incrementer (Using do while loop )

let counter = 0;

let step = 20;

do {
    console.log(`Counter: ${counter}`);
    
    counter+=step
} while (counter<100);

console.log("----------------------------------------------------------------------------------");

//4.Exploring Objects with for...in Loop

let myObject={
    item1:"icecrem",
    item2:"coldrink",
    item3:"coffee",
};
//Use for in loop ti iterate over properties
for(const property in myObject){
    if (myObject.hasOwnProperty(property)){
console.log(`${property}: ${myObject[property]}`)    }
}

console.log("----------------------------------------------------------------------------------");


//5.Exploring Arrays with Loops(Using loop )

let myArray:number[]=[];

for (let i = 0; i < 10; i++) {
    myArray.push(i)
}
console.log("My Array: "+myArray);

console.log("\n Using for loop:\n");
for (let i = 0; i < myArray.length; i++) {
    console.log(`Index ${i}: ${myArray[i]}`);
}

// Use a for...of loop to output each array element directly into the console
console.log("\n Using for...of loop:\n");
for (let value of myArray) {
    console.log(`Value : ${value}`);
}
console.log("----------------------------------------------------------------------------------");
