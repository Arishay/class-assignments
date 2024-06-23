"use strict";
//Assignment 1: Building Your Friend List
Object.defineProperty(exports, "__esModule", { value: true });
var people = {
    friends: []
};
var friend1 = {
    firstName: "Kaneez",
    lastName: "Fatima",
    id: 1
};
var friend2 = {
    firstName: "Arisha",
    lastName: "Ghaffar",
    id: 2
};
var friend3 = {
    firstName: "Aina",
    lastName: "Asif",
    id: 3
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
//Assignment 2:Manipulating an Array: Rearranging Words
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// Convert non-strings to strings
scrambledArray[2] = scrambledArray[2].toString();
scrambledArray[3] = scrambledArray[3].toString();
// Rearrange elements in the order
var lastElement = scrambledArray.pop();
scrambledArray.unshift(lastElement);
scrambledArray.splice(3, 1);
scrambledArray.splice(3, 1);
scrambledArray.splice(1, 0, "am", "a", "student", "of");
scrambledArray.splice(5, 1);
scrambledArray.splice(6, 1);
scrambledArray.splice(5, 1);
scrambledArray.splice(5, 1);
//joining elements 
var sentence = scrambledArray.join(' ');
console.log(sentence);
//Assignment 3: Company Product Catalog
// create an array
var inventory = [];
// Create three separate objects
var product1 = {
    name: "laptop",
    model: "EliteBook",
    cost: 55000,
    quantity: 10
};
var product2 = {
    name: "infinix smartphone",
    model: "note11",
    cost: 38000,
    quantity: 20
};
var product3 = {
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
console.log("The quantity of ".concat(inventory[2].name, " is ").concat(inventory[2].quantity));
// Explore adding and accessing more elements within the inventory array
inventory.push({
    name: "Samsung galaxy",
    model: "tab A9",
    cost: 32000,
    quantity: 15
});
console.log("Updated Inventory:");
for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
    var product = inventory_1[_i];
    console.log("Name: ".concat(product.name, ", Model: ").concat(product.model, ", Cost: ").concat(product.cost, ", Quantity: ").concat(product.quantity));
}
// Create an array to store student information
var students = [];
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
function findSeniorStudents(students) {
    return students.filter(function (student) { return student.seniorStatus && student.assignmentsCompleted; });
}
// Log the senior students with assignments
console.log("Senior Students with Assignments:");
for (var _a = 0, _b = findSeniorStudents(students); _a < _b.length; _a++) {
    var student = _b[_a];
    console.log("Name: ".concat(student.name));
}
// Function to update the class list (remove students who haven't completed assignments)
function updateClassList(students) {
    return students.filter(function (student) { return student.assignmentsCompleted || !student.seniorStatus; });
}
// Update the class list
students = updateClassList(students);
// Log the updated class list
console.log("Updated Class List:");
for (var _c = 0, students_1 = students; _c < students_1.length; _c++) {
    var student = students_1[_c];
    console.log("Name: ".concat(student.name, ", Senior: ").concat(student.seniorStatus, ", Assignments Completed: ").concat(student.assignmentsCompleted));
}
