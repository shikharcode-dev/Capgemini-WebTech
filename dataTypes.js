let myClassToday = 3;
let myName = "PJ";

console.log(typeof myClassToday);
console.log(typeof myName);

// numbers
let myNumber = 3;
console.log(typeof myNumber); // number
// Checking different data types using typeof operator

// String type
console.log(typeof myName);
console.log(typeof myName); // string
// Number type
console.log(typeof myClassToday );
console.log(typeof myClassToday ); // number
// Boolean type
console.log(typeof isStudent);
console.log(typeof isStudent); // boolean
// Undefined type
console.log(typeof notDefined);
console.log(typeof notDefined); // undefined
// Object type
console.log(typeof person);
console.log(typeof person); // object
// Array (also returns object)
console.log(typeof colors);
console.log(typeof colors); // object
// Null (returns object - this is a known quirk in JavaScript)
console.log(typeof emptyValue);
console.log(typeof emptyValue); // object
// Function type
console.log(typeof myFunction);
console.log(typeof myFunction); // function
// Symbol type
console.log(typeof mySymbol);
console.log(typeof mySymbol); // symbol
// BigInt type
console.log(typeof bigNumber);
console.log(typeof bigNumber); // bigint

// string data type
let myString = "Hello, World!";
console.log(typeof myString); // string

// Boolean examples
let isStudent = true;
let hasLicense = false;
let isRaining = true;
let isWeekend = false;

console.log(typeof isStudent); // boolean
console.log(typeof hasLicense); // boolean
console.log(typeof isRaining); // boolean
console.log(typeof isWeekend); // boolean

// BigInt example - used for very large integers beyond Number.MAX_SAFE_INTEGER
let myBigInt = 9007199254740991n; // Adding 'n' at the end makes it a BigInt
let anotherBigInt = BigInt("123456789012345678901234567890");
let calculatedBigInt = BigInt(9007199254740991);

console.log(typeof myBigInt);
console.log(typeof anotherBigInt);
console.log(typeof calculatedBigInt);


// Symbol examples - Symbols are unique and immutable primitive values
let mySymbol = Symbol();
let namedSymbol = Symbol('description');
let anotherSymbol = Symbol('description');

// Each symbol is unique, even with the same description
console.log(mySymbol === namedSymbol); // false
console.log(namedSymbol === anotherSymbol); // false

console.log(typeof mySymbol); // symbol
console.log(typeof namedSymbol); // symbol
console.log(typeof anotherSymbol); // symbol

// // Symbols are often used as unique property keys in objects
// let id = Symbol('id');
// let user = {
//   name: 'John',
//   [id]: 123
// };

// console.log(user[id]); // 123
// console.log(typeof id); // symbol

// Undefined examples - variable declared but not assigned a value
let notDefined;
let anotherUndefined;
let yetAnotherUndefined;

console.log(typeof notDefined); // undefined
console.log(typeof anotherUndefined); // undefined
console.log(typeof yetAnotherUndefined); // undefined

// Undefined is also returned when accessing non-existent object properties
let person = { name: 'John' };
console.log(typeof person.age); // undefined

// Null examples - intentionally empty or absent value
let emptyValue = null;
let noData = null;
let resetValue = null;

console.log(typeof emptyValue); // object (this is a known quirk in JavaScript)
console.log(typeof noData); // object
console.log(typeof resetValue); // object

// Checking for null using strict equality
console.log(emptyValue === null); // true
console.log(noData === null); // true

// Difference between null and undefined
console.log(notDefined); // undefined
console.log(emptyValue); // null
console.log(notDefined == emptyValue); // true (loose equality)
console.log(notDefined === emptyValue); // false (strict equality)



let myBestFriend = "Alice";
console.log(typeof myBestFriend);
console.log(typeof Number(myBestFriend));

let val01 = 10
console.log(typeof Number(val01));
console.log(typeof parseInt(val01));
console.log(typeof parseFloat(val01));


conssole.log(parseInt("10.5")); // 10
console.log(parseFloat("10.5")); // 10.5


// String to Number
Number("42")        // 42
parseInt("10.5")    // 10
parseFloat("10.5")  // 10.5

// Number to String
String(42)          // "42"
(42).toString()     // "42"

// To Boolean
Boolean(0)          // false
Boolean("hello")    // true
Boolean("")         // false
Boolean(null)       // false

// Number + String → String (concatenation)
5 + "3"         // "53"

// String - Number → Number (arithmetic)
"10" - 2        // 8
"6" * "2"       // 12

// Comparison coercion
"5" == 5        // true  (loose ==, converts types)
"5" === 5       // false (strict ===, no conversion)

// Falsy coercion in conditions
if (0)  { }     // 0 treated as false
if ("") { }     // "" treated as false
if (1)  { }     // 1 treated as true


// Create an array and console that value
let myArray = ["apple", "banana", "orange"];
console.log(myArray);


// Heterogeneous array - an array that can hold different data types.
let heterogeneousArray = ["ramesh", true, 42, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(heterogeneousArray);


//Object:-
let myMarks = [80, 90, 70, 85];
let myMarksObject = {
  math: 80,
  science: 90,
  english: 70,
  history: 85
};
console.log(myMarksObject);

// CRUD Operations on Objects in JavaScript
// CRUD stands for: Create, Read, Update, Delete

// CREATE - Creating an object and adding properties
// Method 1: Object literal (most common)
let student = {
    name: "Sam",
    age: 20,
    course: "JavaScript"
};

// Method 2: Using new Object()
let employee = new Object();
employee.name = "John";
employee.salary = 50000;

// Method 3: Adding properties after creation
let product = {};
product.id = 101;
product.name = "Laptop";
product.price = 45000;


// READ - Accessing/Reading object properties
// Method 1: Dot notation
console.log(student.name);        // Output: Sam

// Method 2: Bracket notation
console.log(student['age']);      // Output: 20

// Reading all properties using for...in loop
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// Using Object.keys() to get all keys
console.log(Object.keys(student));    // Output: ['name', 'age', 'course']

// Using Object.values() to get all values
console.log(Object.values(student));  // Output: ['Sam', 20, 'JavaScript']

// Using Object.entries() to get key-value pairs
console.log(Object.entries(student)); // Output: [['name', 'Sam'], ['age', 20], ['course', 'JavaScript']]


// UPDATE - Modifying existing properties
// Method 1: Dot notation
student.age = 21;

// Method 2: Bracket notation
student['course'] = "React";

// Updating multiple properties at once using Object.assign()
Object.assign(student, {
    age: 22,
    course: "Node.js",
    grade: "A"
});


// DELETE - Removing properties from object
// Using delete operator
delete student.grade;

// Checking if property exists before deleting
if ('course' in student) {
    delete student.course;
}

// Setting property to undefined (alternative, but not recommended)
student.age = undefined;  // Property still exists but value is undefined


// COMPLETE CRUD EXAMPLE
let book = {};

// CREATE
book.title = "JavaScript Basics";
book.author = "John Doe";
book.pages = 300;
book.price = 500;

// READ
console.log("Book Title: " + book.title);
console.log("All book details:", book);

// UPDATE
book.price = 450;  // Updating price
book.edition = "2nd";  // Adding new property

// DELETE
delete book.pages;

console.log("Final book object:", book);

