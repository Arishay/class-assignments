"use strict";
//Part No 1
console.log("\n\t PRODUCT\n");
//Creating array
let products = [
    {
        name: "Shirt",
        price: 800,
        inventory: {
            stock: 50,
            colorOptions: ["black", "yellow", "white"],
        }
    },
    {
        name: "Pant",
        price: 1200,
        inventory: {
            stock: 20,
            colorOptions: ["White", "Blue", "black"],
        },
    },
    {
        name: "Jacket",
        price: 2200,
        inventory: {
            stock: 70,
            colorOptions: ["White", "Blue", "black", "brown"],
        },
    },
];
//no 3 change color
function changeColor(product, anotherColor) {
    let changeColor = product.inventory.colorOptions.indexOf(anotherColor);
    if (changeColor != -1) {
        if (anotherColor === "black") {
            product.price * 1.10;
        }
        else if (anotherColor === "blue") {
            product.price * 0.95;
        }
        //color change
        product.inventory.colorOptions.splice(changeColor, 1, anotherColor);
        console.log("Color changed sucessfully");
    }
    else {
        console.log("This Color is not available");
    }
}
;
// no4 printing
products.forEach(product => {
    console.log("\nName:", product.name);
    console.log("Price:", product.price);
    console.log("Product Left:", product.inventory.stock);
    console.log("Colors:", product.inventory.colorOptions.join(","));
});
//Part No 2
console.log("\n\t Students Average Result\n");
// Creating Array of student 
let students = [
    {
        name: "Arisha",
        grades: [95, 90, 88],
    },
    {
        name: "Zara",
        grades: [65, 80, 78],
    },
    {
        name: "Ayesha",
        grades: [90, 92, 87],
    },
];
//calculate average grade
function calculateAverageGrade(grades) {
    let add = grades.reduce((total, grade) => total + grade, 0);
    return add / grades.length;
}
;
//printing result
students.forEach(student => {
    let averageGrade = calculateAverageGrade(student.grades);
    console.log("\nStudent:", student.name);
    console.log("Average Grade:", averageGrade);
});
//Part no 3
console.log("\n\t Employee Data\n");
let employees = [
    {
        name: "Ali",
        workingHours: 40,
        hourlyRate: 1500,
        salary: 0,
    },
    {
        name: "Ayesha",
        workingHours: 20,
        hourlyRate: 1000,
        salary: 0,
    },
    {
        name: "Aina",
        workingHours: 25,
        hourlyRate: 1200,
        salary: 0,
    },
];
function calculateSalary(employee) {
    employee.salary = employee.workingHours * employee.hourlyRate;
    if (employee.workingHours >= 20) {
        employee.salary *= 1.10; // Apply 10% bonus
    }
}
//printing
employees.forEach(employee => {
    calculateSalary(employee);
    console.log("\nEmployee:", employee.name);
    console.log("Salary:", employee.salary);
});
