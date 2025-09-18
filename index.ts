// // let firstName: string = "Vinodh";
// // console.log(firstName);
// // const city: string = "Bangalore";
// // console.log(city);
// // let age: number = 26;
// // console.log(age);
// // let pi: number = 3.14;
// // console.log(pi);

// // let temp: number = -7;
// // console.log(temp);
// // let isRaining: boolean = false;
// // console.log(isRaining);
// // let isSunny: boolean = true;
// // console.log(isSunny);

// // let fruits: string[] = ["Apple", "Banana", "Orange"];
// // console.log(fruits);
// // let numbers: number[] = [1, 2, 3, 4, 5];
// // console.log(numbers);

// // let ID: symbol = Symbol(); // unique symbol
// // console.log(ID);

// // let alphabeticId: symbol = Symbol("ABC"); // description
// // console.log(alphabeticId);

// //using symbols in Objects

// const ID1 = Symbol("id");
// const ID2 = Symbol("id");

// console.log(ID1 === ID2); // Output: false

// //Creae an object using both symbols as keys

// let user = {
//   name: "Mark",
//   [ID1]: "1234",
//   [ID2]: "5678",
// };

// console.log(user.name);

// // Accessing the original symbols
// console.log(user[ID1]); // Output: 1234
// console.log(user[ID2]); // Output: 5678

// //Try accessing with a new symbol with the same description

// const ID3 = Symbol("id");
// console.log(user[ID3]); // Output: undefined

// let firstname: any = "Mark"; // IGNORE

// firstname = 123;

// firstname = [];

// function returnParam(param: string) {
//   return param;
// // }

// let data: any = "hello";
// console.log(data.tofixed(2)); // IGNORE

// let data1: unknown = "hello";
// console.log(data1.tofixed(2)); // IGNORE

// let value: unknown;

// value = 5;
// value = "Hello";
// value = [1, 2, 3];

// let value: any = "hello";
// console.log(value.tofixed(2));

// function multiplyByTwo(num: any) {
//   if (typeof num === "number") {
//     return num * 2;
//   }
//   return "Input is not a number";
// }

// console.log(multiplyByTwo(5));
// console.log(multiplyByTwo("hello"));

// type CustomString = string;
// type CustomNumber = number;
// type CustomDate = Date;
// type CustomSymbol = symbol;

// let firstName: CustomString = "Vinodh";
// console.log(firstName);
// let age: CustomNumber = 26;
// console.log(age);
// let today: CustomDate = new Date();
// console.log(today);
// let uniqueId: CustomSymbol = Symbol("id");
// console.log(uniqueId);

// type Status = "success" | "error" | "loading";

// function handleStatus(status: Status) {
//   if (status === "success") {
//     console.log("Operation was successful.");
//   } else if (status === "error") {
//     console.log("An error occurred.");
//   } else if (status === "loading") {
//     console.log("Loading...");
//   }
// }
// handleStatus("success");
// handleStatus("error");
// handleStatus("loading");
// handleStatus("pending"); // IGNORE

// function handleStatus(status: "success" | "error" | "loading") {
//   if (status === "success") {
//     console.log("Operation was successful.");
//   }
// }

// type CustomString = String;
// let number: CustomString = "Vinodh";
// console.log(number);

//Declartion, Annontaion, an Inference

//Declaration
//uselly done with type or interface

//inference
// let firstName = "Vinodh";
// console.log(firstName);

//Annotation
// let age: number = 26;
// console.log(age);

// let isRaining: boolean = false;
// console.log(isRaining);

// let fruits: string[] = ["Apple", "Banana", "Orange"];
// console.log(fruits);

// let ID: symbol = Symbol(); // unique symbol
// console.log(ID);

// type StringOrNumber = string | number | undefined;

// let value: StringOrNumber;

// value = "Hello";
// console.log(value);

// value = 42;
// console.log(value);
// value = undefined;
// console.log(value);

// function print(input: string | undefined) {
//   if (input) {
//     console.log(input);
//   } else {
//     console.log("Please input something to print");
//   }
// }
// print("Hello, World!");
// print(undefined);

// type CustomDate = Date;
// type CustomString = string;

// type TrueString = CustomString extends string ? true : false;

// type ConditionalNumber = CustomDate extends Date ? number : string;
// type DateAssignment = CustomDate extends Date ? Date : undefined;

// type check = any extends unknown ? true : false;

// type check2 = string extends any ? true : false;

// type check3 = number extends any ? true : false;

// type check4 = {} extends object ? true : false;

// type check5 = [] extends object ? true : false;
// type check6 = Function extends object ? true : false;

// type check7 = never extends any ? true : false;

// const throwError = (errorMsg: string) => {
//   throw new Error(errorMsg);
// };

// // let strings: Object = ["a", "b", "c"];

// let myfunc : Function = () => 2;

// let strings: string[] = ["a", "b", "c"];

// let myFunc: () => number = () => 2;

// let firstName: any = "Mark"; // cast string as any

// There are two ways
// angle brackets
let firstName = <any>"Mark"; // cast string as any

let lastname = "smith" as any;
