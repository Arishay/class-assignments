//Assignment 1: Building Your Friend List

import { Interface } from "readline";

let people = {
    friends:[] as { firstName: string, lastName: string, id?: number }[]
}

let friend1: { firstName: string; lastName: string; id?: number } = {
    firstName: "Kaneez",
    lastName: "Fatima",
    id: 1
};

let friend2: { firstName: string; lastName: string; id?: number } = {
    firstName: "Arisha",
    lastName: "Ghaffar",
    id: 2
};

let friend3: { firstName: string; lastName: string; id?: number } = {
    firstName: "Aina",
    lastName: "Asif",
    id: 3
};
people.friends.push(friend1, friend2, friend3);
console.log(people);

//Assignment 2:Manipulating an Array: Rearranging Words
const scrambledArray: any[] = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

// Convert non-strings to strings
scrambledArray[2] = scrambledArray[2].toString();
scrambledArray[3] = scrambledArray[3].toString();

// Rearrange elements in the order
let lastElement = scrambledArray.pop();
scrambledArray.unshift(lastElement);
scrambledArray.splice(3, 1);
scrambledArray.splice(3, 1);


scrambledArray.splice(1, 0, "am","a", "student", "of");
scrambledArray.splice(5, 1);
scrambledArray.splice(6, 1);
scrambledArray.splice(5, 1);
scrambledArray.splice(5, 1);

//joining elements 
const sentence = scrambledArray.join(' ');
console.log(sentence); 


//Assignment 3: Company Product Catalog

// create an array
let inventory: {
    name: string;
    model: string;
    cost: number;
    quantity: number;
  }[] = [];
  
  // Create three separate objects
  const product1 = {
    name: "laptop",
    model: "EliteBook",
    cost: 55000,
    quantity: 10
  };
  
  const product2 = {
    name: "infinix smartphone",
    model: "note11",
    cost: 38000,
    quantity: 20
  };
  
  const product3 = {
    name: "TV",
    model: "multinet",
    cost: 59000,
    quantity: 3
  };
  
  // Adding objeccts in inventory array
  inventory.push(product1);
  inventory.push(product2);
  inventory.push(product3);
  
  //Access and log the quantity property of a specific product in the inventory array
  console.log(`The quantity of ${inventory[2].name} is ${inventory[2].quantity}`);
  
  // Explore adding and accessing more elements within the inventory array
  inventory.push({
    name: "Samsung galaxy",
    model: "tab A9",
    cost: 32000,
    quantity: 15
  });
  
  console.log("Updated Inventory:");
  for (let product of inventory) {
    console.log(`Name: ${product.name}, Model: ${product.model}, Cost: ${product.cost}, Quantity: ${product.quantity}`);
  }


//Assignment 4: Student List Organizer


// Define an interface to describe student information
interface Student {
    name: string;
    seniorStatus: boolean;
    assignmentsCompleted: boolean;
  }
  
  // Create an array to store student information
  let students: Student[] = [];
  
  // Add student objects to the array
  students.push({
    name: "Arisha",
    seniorStatus: false,
    assignmentsCompleted: true
  });
  
  students.push({
    name: "Aliza",
    seniorStatus: true,
    assignmentsCompleted: true
  });
  
  students.push({
    name: "Imran",
    seniorStatus: true,
    assignmentsCompleted: true
  });
  
  students.push({
    name: "manahil",
    seniorStatus: false,
    assignmentsCompleted: true
  });
  
  // Function to find senior students with assignments (Optional)
  function findSeniorStudents(students: Student[]): Student[] {
    return students.filter((student) => student.seniorStatus && student.assignmentsCompleted);
  }
  
  // Log the senior students with assignments
  console.log("Senior Students with Assignments:");
  for (let student of findSeniorStudents(students)) {
    console.log(`Name: ${student.name}`);
  }
  
  // Function to update the class list (remove students who haven't completed assignments)
  function updateClassList(students: Student[]): Student[] {
    return students.filter((student) => student.assignmentsCompleted || !student.seniorStatus);
  }
  
  // Update the class list
  students = updateClassList(students);
  
  // Log the updated class list
  console.log("Updated Class List:");
  for (let student of students) {
    console.log(`Name: ${student.name}, Senior: ${student.seniorStatus}, Assignments Completed: ${student.assignmentsCompleted}`);
  }
  