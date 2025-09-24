"use strict";
// // let firstName: string = "Vinodh";
// // console.log(firstName);
// // const city: string = "Bangalore";
// // console.log(city);
// // let age: number = 26;
// // console.log(age);
// // let pi: number = 3.14;
// // console.log(pi);
Object.defineProperty(exports, "__esModule", { value: true });
const yup = require("yup");
let post = {
    title: "This is a blog post",
    content: "This is the content of the blog post",
    date: new Date(),
    author: {
        name: "Vinodh",
        age: 26,
        email: "vin@gmail.com",
        type: "human",
    },
    awards: {
        web: {
            name: "web Awards",
            date: new Date(),
        },
        web3: {
            name: "web3",
            date: new Date(),
        },
    },
    category: "Tech",
};
let dog = {
    name: "Buddy",
    barks: true,
    wags: true,
};
let cat = {
    name: "Whiskers",
    purrs: true,
};
let hybridAnimal = {
    name: "Hybrid",
    barks: true,
    purrs: true,
    wags: false,
};
// let partialDog: DogAndCatUnion = {
//   name: "PartialDog",
//   barks: true,
// };
// type NetworkLoadingState = {
//   state1: "loading";
// };
// type NetworkFailedState = {
//   state1: "failed";
//   code: number;
// };
// type NetworkSuccessState = {
//   state1: "success";
//   response: {
//     title: string;
//     duration: number;
//     summary: string;
//   };
// };
// type NetworkState =
//   | NetworkLoadingState
//   | NetworkFailedState
//   | NetworkSuccessState;
// function logger(state: NetworkState) {
//   switch (state.state1) {
//     case "loading":
//       return "Downloading...";
//     case "failed":
//       return `Error ${state.code} downloading`;
//     case "success":
//       return `Downloaded ${state.response.title} - ${state.response.summary}`;
//   }
// }
// type Cat1 = {
//   name: string;
//   color: string;
//   purrs: boolean;
// };
// type Dog1 = {
//   name: string;
//   color: string;
//   barks: boolean;
// };
// type HybridAnimal1 = Cat1 & Dog1;
// const hybridAnimal1: HybridAnimal1 = {
//   name: "Hybrid",
//   color: "Brown",
//   barks: true,
//   purrs: true,
// };
let a = [1, 2, 3];
// Generic Syntax of Declaring Array of Strings
let b = ["a", "b", "c"];
// Array containing multiple types
let c = [1, "a", 2, "b", 3, "c"];
c.push(4);
c.push("d");
let airplanes = [
    {
        model: "Airbus A380",
        flightNumber: "AI202",
        timeOfDeparture: new Date("2023-10-01T10:00:00Z"),
        timeOfArrival: new Date("2023-10-01T14:00:00Z"),
        caterer: {
            name: "SkyCaterers",
            address: "123 Aviation St, Cityville",
            phone: 1234567890,
        },
        seats: {
            "1A": "John Doe",
            "1B": "Jane Smith",
        },
    },
    {
        model: "Boeing 777",
        flightNumber: "BA303",
        timeOfDeparture: new Date("2023-10-02T15:00:00Z"),
        timeOfArrival: new Date("2023-10-02T19:00:00Z"),
        caterer: {
            name: "FlyHigh Catering",
            address: "456 Airport Rd, Townsville",
            phone: 9876543210,
        },
        seats: {
            "2A": "Alice Johnson",
            "2B": "Bob Brown",
        },
    },
];
// Tuples: Arrays with fixed length and fixed order
// Each position has a specific type
// you cannot add extra values unless the type allows it
let person = ["John", "Doe", 30];
person = ["Jane", "Smith", 25]; // valid
let user;
user = ["Alice", "Johnson", 28]; // valid
user = ["Bob", "Brown", 35, "Extra"]; // valid
user = ["Charlie", "Davis", 56]; // valid
const passingStudents = [2, false, "Alice", "Bob"];
const failingStudents = [1, false, "Charlie"];
const passingStudents1 = ["Alice", "gg", "Bob", 2, false];
const failingStudents1 = ["Charlie", 1, false];
const example1 = [true, false, "Test", 42];
const example2 = [false, "Example", 7];
// Readonly Arrays
let number = [1, 2, 3, 4, 5];
const person1 = ["John", "Doe", 30];
// In javascript we often write constants like this
const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// console.log(Direction);
// console.log(Direction.Down);
// string Enums
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["author"] = "author";
    Roles["editor"] = "editor";
})(Roles || (Roles = {}));
const person3 = {
    name: "Vinodh",
    email: "vinodh@gmail.com",
    password: "password",
    role: Roles.admin,
};
var EDirection;
(function (EDirection) {
    EDirection[EDirection["Up"] = 0] = "Up";
    EDirection[EDirection["Down"] = 1] = "Down";
    EDirection[EDirection["Left"] = 2] = "Left";
    EDirection[EDirection["Right"] = 3] = "Right";
})(EDirection || (EDirection = {}));
let eDirection = EDirection.Up;
// console.log(eDirection); // 0
// Object with as const
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
var AccessPermissions;
(function (AccessPermissions) {
    AccessPermissions[AccessPermissions["None"] = 0] = "None";
    AccessPermissions[AccessPermissions["Read"] = 1] = "Read";
    AccessPermissions[AccessPermissions["Write"] = 2] = "Write";
    AccessPermissions[AccessPermissions["ReadWrite"] = 3] = "ReadWrite";
    AccessPermissions[AccessPermissions["Delete"] = 4] = "Delete";
    AccessPermissions[AccessPermissions["All"] = 7] = "All";
})(AccessPermissions || (AccessPermissions = {}));
// console.log(AccessPermissions.ReadWrite); // 3
// console.log(AccessPermissions.All); // 7
var Shapekind;
(function (Shapekind) {
    Shapekind["Circle"] = "circle";
    Shapekind["Square"] = "square";
})(Shapekind || (Shapekind = {}));
let c1 = {
    kind: Shapekind.Circle,
    radius: 10,
};
function printShape(shape) {
    console.log(shape);
}
printShape(Shapekind.Circle);
printShape(Shapekind.Square);
//# sourceMappingURL=index.js.map