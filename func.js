function greetStudent() {
    console.log("good morning student");
    console.log("good afternoon student");
}

greetStudent(); // Calling the function to execute the code inside it


// Function to print academic details of a student
function printAcademicDetails() {
    console.log("Student Name: John Doe");
    console.log("Student ID: 12345");
    console.log("Grade: A");
    console.log("Major: Computer Science");
}

// Function to add 10 and 20
function addNumbers() {
    let sum = 10 + 20;
    console.log("Sum of 10 and 20 is: " + sum);
}

// Function to find factorial of a number 5
function findFactorial() {
    let number = 5;
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log("Factorial of 5 is: " + factorial);
}

// Function to check even numbers between 1 to 100
function checkEvenNumbers() {
    console.log("Even numbers between 1 to 100:");
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Calling all functions
printAcademicDetails();
addNumbers();
findFactorial();
checkEvenNumbers();




//creating parameters example
function greetStudent(name) {
    console.log("good morning " + name);
    console.log("good afternoon " + name);
}

greetStudent("John"); // Calling the function with an argument





//task = create a function to recive two values and perform additation operatations
function addTwoValues(num1, num2) {
    return num1 + num2;
}

console.log(addTwoValues(5, 10));  // Output: 15
console.log(addTwoValues(20, 30)); // Output: 50


//crearte a function that recive teo no and perform the add,multiply, divide, sub, modulus operations
function performOperations(num1, num2) {
    console.log("Addition: " + (num1 + num2));
    console.log("Multiplication: " + (num1 * num2));
    console.log("Division: " + (num1 / num2));
    console.log("Subtraction: " + (num1 - num2));
    console.log("Modulus: " + (num1 % num2));
}

performOperations(10, 5);

//create a function recive two string and concatenate them
function concatenateStrings(str1, str2) {
    return str1 + " " + str2;
}
console.log(concatenateStrings("Hello", "World"));

//create a function to recive a list of friends and conver them to an array and ascess the array list by useing indexing.
function accessFriends(friendsList) {
    let friendsArray = Array.from(friendsList);
    console.log("First friend: " + friendsArray[0]);
    console.log("Second friend: " + friendsArray[1]);
    console.log("Third friend: " + friendsArray[2]);
}

accessFriends(["Alice", "Bob", "Charlie"]);


