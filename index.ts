// // // let firstName: string = "Vinodh";
// // // console.log(firstName);
// // // const city: string = "Bangalore";
// // // console.log(city);
// // // let age: number = 26;
// // // console.log(age);
// // // let pi: number = 3.14;
// // // console.log(pi);

// import yup = require("yup");

// // // let temp: number = -7;
// // // console.log(temp);
// // // let isRaining: boolean = false;
// // // console.log(isRaining);
// // // let isSunny: boolean = true;
// // // console.log(isSunny);

// // // let fruits: string[] = ["Apple", "Banana", "Orange"];
// // // console.log(fruits);
// // // let numbers: number[] = [1, 2, 3, 4, 5];
// // // console.log(numbers);

// // // let ID: symbol = Symbol(); // unique symbol
// // // console.log(ID);

// // // let alphabeticId: symbol = Symbol("ABC"); // description
// // // console.log(alphabeticId);

// // //using symbols in Objects

// // const ID1 = Symbol("id");
// // const ID2 = Symbol("id");

// // console.log(ID1 === ID2); // Output: false

// // //Creae an object using both symbols as keys

// // let user = {
// //   name: "Mark",
// //   [ID1]: "1234",
// //   [ID2]: "5678",
// // };

// // console.log(user.name);

// // // Accessing the original symbols
// // console.log(user[ID1]); // Output: 1234
// // console.log(user[ID2]); // Output: 5678

// // //Try accessing with a new symbol with the same description

// // const ID3 = Symbol("id");
// // console.log(user[ID3]); // Output: undefined

// // let firstname: any = "Mark"; // IGNORE

// // firstname = 123;

// // firstname = [];

// // function returnParam(param: string) {
// //   return param;
// // // }

// // let data: any = "hello";
// // console.log(data.tofixed(2)); // IGNORE

// // let data1: unknown = "hello";
// // console.log(data1.tofixed(2)); // IGNORE

// // let value: unknown;

// // value = 5;
// // value = "Hello";
// // value = [1, 2, 3];

// // let value: any = "hello";
// // console.log(value.tofixed(2));

// // function multiplyByTwo(num: any) {
// //   if (typeof num === "number") {
// //     return num * 2;
// //   }
// //   return "Input is not a number";
// // }

// // console.log(multiplyByTwo(5));
// // console.log(multiplyByTwo("hello"));

// // type CustomString = string;
// // type CustomNumber = number;
// // type CustomDate = Date;
// // type CustomSymbol = symbol;

// // let firstName: CustomString = "Vinodh";
// // console.log(firstName);
// // let age: CustomNumber = 26;
// // console.log(age);
// // let today: CustomDate = new Date();
// // console.log(today);
// // let uniqueId: CustomSymbol = Symbol("id");
// // console.log(uniqueId);

// // type Status = "success" | "error" | "loading";

// // function handleStatus(status: Status) {
// //   if (status === "success") {
// //     console.log("Operation was successful.");
// //   } else if (status === "error") {
// //     console.log("An error occurred.");
// //   } else if (status === "loading") {
// //     console.log("Loading...");
// //   }
// // }
// // handleStatus("success");
// // handleStatus("error");
// // handleStatus("loading");
// // handleStatus("pending"); // IGNORE

// // function handleStatus(status: "success" | "error" | "loading") {
// //   if (status === "success") {
// //     console.log("Operation was successful.");
// //   }
// // }

// // type CustomString = String;
// // let number: CustomString = "Vinodh";
// // console.log(number);

// //Declartion, Annontaion, an Inference

// //Declaration
// //uselly done with type or interface

// //inference
// // let firstName = "Vinodh";
// // console.log(firstName);

// //Annotation
// // let age: number = 26;
// // console.log(age);

// // let isRaining: boolean = false;
// // console.log(isRaining);

// // let fruits: string[] = ["Apple", "Banana", "Orange"];
// // console.log(fruits);

// // let ID: symbol = Symbol(); // unique symbol
// // console.log(ID);

// // type StringOrNumber = string | number | undefined;

// // let value: StringOrNumber;

// // value = "Hello";
// // console.log(value);

// // value = 42;
// // console.log(value);
// // value = undefined;
// // console.log(value);

// // function print(input: string | undefined) {
// //   if (input) {
// //     console.log(input);
// //   } else {
// //     console.log("Please input something to print");
// //   }
// // }
// // print("Hello, World!");
// // print(undefined);

// // type CustomDate = Date;
// // type CustomString = string;

// // type TrueString = CustomString extends string ? true : false;

// // type ConditionalNumber = CustomDate extends Date ? number : string;
// // type DateAssignment = CustomDate extends Date ? Date : undefined;

// // type check = any extends unknown ? true : false;

// // type check2 = string extends any ? true : false;

// // type check3 = number extends any ? true : false;

// // type check4 = {} extends object ? true : false;

// // type check5 = [] extends object ? true : false;
// // type check6 = Function extends object ? true : false;

// // type check7 = never extends any ? true : false;

// // const throwError = (errorMsg: string) => {
// //   throw new Error(errorMsg);
// // };

// // // let strings: Object = ["a", "b", "c"];

// // let myfunc : Function = () => 2;

// // let strings: string[] = ["a", "b", "c"];

// // let myFunc: () => number = () => 2;

// // let firstName: any = "Mark"; // cast string as any

// // There are two ways
// // // angle brackets
// // let firstName = <any>"Mark"; // cast string as any
// // firstName = 123;

// // let lastname = "smith" as any;
// // lastname = { age: 30 };

// // let user = {
// //   name: "Mark",
// //   email: "mark@gmail.com",
// // };

// // type User = {
// //   name: String;
// //   email: String;
// // };

// // function fetchUser() {
// //   return user as User;
// // }

// // const fetchedData = fetchUser();
// // console.log(fetchedData.name);
// // // console.log(fetchedData.email);

// // let person = {
// //   name: "John",
// //   age: 32,
// // };

// // person : {
// //   name: string;
// //   age: number;
// // }

// // // Annontating with the object type
// // let car: object = {
// //   brand: "Toyota",
// //   color: "black",
// // };

// // car = [1, 2, 3]; // IGNORE
// // car = function() {};

// // Using {} (object literal syntax)

// // let newCar: {} = {
// //   brand: "Toyota",
// //   color: "black",
// // }

// // newCar = [1, 2, 3]; // IGNORE
// // newCar = function() {};

// // let newCar: {
// //   brand: string;
// //   color: string;
// // } = {
// //   brand: "Toyota",
// //   color: "black",
// // };

// // type Post = {
// //   title: string;
// //   content: string;
// //   date: Date;
// // author = {
// //   name : string;
// //   age : number;
// //   email : string;
// // };

// // type Author = {
// //   name : string;
// //   age : number;
// //   email : string;
// // };

// // let post: Post = {
// //   title: "This is a blog post",
// //   content: "This is the content of the blog post",
// //   date: new Date(),
// // };

// // let post2: Post = {
// //   title: "This is a blog post2",
// //   content: "This is the content of the blog post2",
// //   date: new Date(),
// // };
// // A nested Object means : An object inside another object
// // but now we also want to an author inside the post object
// // and this author itself has its own properties
// // name : string
// // age : number
// // email : string

// // post = {
// //   title: "",
// //   content: "",
// //   date: new Date(),
// //   author: {
// //     name : "",
// //     age : ...,
// //     email : "",
// //   }
// // }

// type Author = {
//   name: string;
//   age: number;
//   email: string;
//   readonly type: "human" | "ai";
// };

// type AwardDetails = {
//   name: string;
//   date: Date;
// };

// type Awards = {
//   [key: string]: AwardDetails;
// };

// type Post = {
//   title: string;
//   content: string;
//   date: Date;
//   author: Author;
//   awards: Awards;
//   category?: string; // optional property
// };

// let post: Post = {
//   title: "This is a blog post",
//   content: "This is the content of the blog post",
//   date: new Date(),
//   author: {
//     name: "Vinodh",
//     age: 26,
//     email: "vin@gmail.com",
//     type: "human",
//   },
//   awards: {
//     web: {
//       name: "web Awards",
//       date: new Date(),
//     },

//     web3: {
//       name: "web3",
//       date: new Date(),
//     },
//   },

//   category: "Tech",
// };

// type Dog = {
//   name: string;
//   barks: boolean;
//   wags: boolean;
// };

// type Cat = {
//   name: string;
//   purrs: boolean;
// };

// type DogAndCatUnion = Dog | Cat;

// let dog: DogAndCatUnion = {
//   name: "Buddy",
//   barks: true,
//   wags: true,
// };

// let cat: DogAndCatUnion = {
//   name: "Whiskers",
//   purrs: true,
// };

// let hybridAnimal: DogAndCatUnion = {
//   name: "Hybrid",
//   barks: true,
//   purrs: true,
//   wags: false,
// };

// // let partialDog: DogAndCatUnion = {
// //   name: "PartialDog",
// //   barks: true,
// // };

// // type NetworkLoadingState = {
// //   state1: "loading";
// // };

// // type NetworkFailedState = {
// //   state1: "failed";
// //   code: number;
// // };

// // type NetworkSuccessState = {
// //   state1: "success";

// //   response: {
// //     title: string;
// //     duration: number;
// //     summary: string;
// //   };
// // };

// // type NetworkState =
// //   | NetworkLoadingState
// //   | NetworkFailedState
// //   | NetworkSuccessState;

// // function logger(state: NetworkState) {
// //   switch (state.state1) {
// //     case "loading":
// //       return "Downloading...";
// //     case "failed":
// //       return `Error ${state.code} downloading`;
// //     case "success":
// //       return `Downloaded ${state.response.title} - ${state.response.summary}`;
// //   }
// // }

// // type Cat1 = {
// //   name: string;
// //   color: string;
// //   purrs: boolean;
// // };

// // type Dog1 = {
// //   name: string;
// //   color: string;
// //   barks: boolean;
// // };

// // type HybridAnimal1 = Cat1 & Dog1;

// // const hybridAnimal1: HybridAnimal1 = {
// //   name: "Hybrid",
// //   color: "Brown",
// //   barks: true,
// //   purrs: true,
// // };

// let a: number[] = [1, 2, 3];

// // Generic Syntax of Declaring Array of Strings

// let b: string[] = ["a", "b", "c"];

// // Array containing multiple types
// let c: (string | number)[] = [1, "a", 2, "b", 3, "c"];

// c.push(4);
// c.push("d");

// // Generic Syntax of Declaring Array of Strings

// // Catere type

// type Caterer = {
//   name: string;
//   address: string;
//   phone: number;
// };

// type Seats = {
//   [keyof: string]: string;
// };

// type Airplane = {
//   model: string;
//   flightNumber: string;
//   timeOfDeparture: Date;
//   timeOfArrival: Date;
//   caterer: Caterer;
//   seats: Seats;
// };

// type Airplanes = Airplane[];

// let airplanes: Airplanes = [
//   {
//     model: "Airbus A380",
//     flightNumber: "AI202",
//     timeOfDeparture: new Date("2023-10-01T10:00:00Z"),
//     timeOfArrival: new Date("2023-10-01T14:00:00Z"),
//     caterer: {
//       name: "SkyCaterers",
//       address: "123 Aviation St, Cityville",
//       phone: 1234567890,
//     },
//     seats: {
//       "1A": "John Doe",
//       "1B": "Jane Smith",
//     },
//   },
//   {
//     model: "Boeing 777",
//     flightNumber: "BA303",
//     timeOfDeparture: new Date("2023-10-02T15:00:00Z"),
//     timeOfArrival: new Date("2023-10-02T19:00:00Z"),
//     caterer: {
//       name: "FlyHigh Catering",
//       address: "456 Airport Rd, Townsville",
//       phone: 9876543210,
//     },
//     seats: {
//       "2A": "Alice Johnson",
//       "2B": "Bob Brown",
//     },
//   },
// ];

// // Tuples: Arrays with fixed length and fixed order
// // Each position has a specific type
// // you cannot add extra values unless the type allows it

// // let person: [string, string, number] = ["John", "Doe", 30];
// // person = ["Jane", "Smith", 25]; // valid

// // let user: [string, string, number, string?];

// // user = ["Alice", "Johnson", 28]; // valid
// // user = ["Bob", "Brown", 35, "Extra"]; // valid
// // user = ["Charlie", "Davis", 56]; // valid

// // // Tuples with Rest Parameters

// // type listOfStudents = [number, boolean, ...string[]];

// // const passingStudents: listOfStudents = [2, false, "Alice", "Bob"];

// // const failingStudents: listOfStudents = [1, false, "Charlie"];

// // // Tuples with Rest Anywhere

// // // You can also place the rest operator at the beginning or middle
// // type listOfStudents1 = [...string[], number, boolean];

// // const passingStudents1: listOfStudents1 = ["Alice", "gg", "Bob", 2, false];

// // const failingStudents1: listOfStudents1 = ["Charlie", 1, false];

// // type BooleanStringNumber = [...boolean[], string, number];

// // const example1: BooleanStringNumber = [true, false, "Test", 42];

// // const example2: BooleanStringNumber = [false, "Example", 7];

// // // Readonly Arrays

// // let number: readonly number[] = [1, 2, 3, 4, 5];

// // // Readonly Tuples
// // // A tuple can be read only also
// // type ReadOnlyTuple = readonly [string, string, number];

// // const person1: ReadOnlyTuple = ["John", "Doe", 30];

// // // tuples are immutable

// // // array

// // type a = Readonly<(string | number)[]>;
// // type b = ReadonlyArray<string | number>;

// // //tuple
// // type c = Readonly<[string, number, number]>;

// // // In javascript we often write constants like this

// // const STATUS_LOADING = "loading";
// // const STATUS_STOPPED = "stopped";

// // enum Direction {
// //   Up = 1,
// //   Down = 2,
// //   Left = 3,
// //   Right = 4,
// // }
// // // console.log(Direction);

// // // console.log(Direction.Down);

// // // string Enums
// // enum Roles {
// //   admin = "admin",
// //   author = "author",
// //   editor = "editor",
// // }

// // type Person = {
// //   name: string;
// //   email: string;
// //   password: string;
// //   role: Roles;
// // };

// // const person3: Person = {
// //   name: "Vinodh",
// //   email: "vinodh@gmail.com",
// //   password: "password",
// //   role: Roles.admin,
// // };

// // const enum EDirection {
// //   Up,
// //   Down,
// //   Left,
// //   Right,
// // }

// // let eDirection = EDirection.Up;
// // // console.log(eDirection); // 0

// // // Object with as const

// // const ODirection = {
// //   Up: 0,
// //   Down: 1,
// //   Left: 2,
// //   Right: 3,
// // } as const;

// // enum AccessPermissions {
// //   None = 0,
// //   Read = 1,
// //   Write = 2,
// //   ReadWrite = Read + Write,
// //   Delete = 4,
// //   All = ReadWrite | Delete,
// // }

// // // console.log(AccessPermissions.ReadWrite); // 3
// // // console.log(AccessPermissions.All); // 7

// // enum Shapekind {
// //   Circle = "circle",
// //   Square = "square",
// // }

// // // console.log(Shapekind.Circle); // "circle"
// // // console.log(Shapekind.Square); // "square"

// // type Circle = {
// //   kind: Shapekind.Circle;
// //   radius: number;
// // };

// // type Square = {
// //   kind: Shapekind.Square;
// //   sideLength: number;
// // };

// // let c1: Circle = {
// //   kind: Shapekind.Circle,
// //   radius: 10,
// // };

// // function printShape(shape: Shapekind) {
// //   console.log(shape);
// // }

// // printShape(Shapekind.Circle);
// // printShape(Shapekind.Square);

// //Defining a named function in TypeScript
// function intro(name: string, age: number): string {
//   return `My name is ${name} and I am ${age} years old`;
// }

// // console.log(intro("vinny", 23));

// // Using a function expression
// const intro2 = function (name: string, age: number): string {
//   return `My name is ${name} and I am ${age} years old`;
// };

// // console.log(intro2("Mohan", 22));

// const intro3 = (name: string, age: number): string => {
//   return `My name is ${name} and I am ${age} years old`;
// };

// // console.log(intro3("Mohan Kumar", 21));

// //Default Optional Parameters

// // function intro4(name: string, age: number, country?: string): string {
// //   if (country) {
// //     return `My name is ${name} and I am ${age} years old, I live in ${country}`;
// //   }

// //   return `My name is ${name} and I am ${age} years old`;
// // }

// // // console.log(intro4("john", 24));
// // // console.log(intro4("mahesh", 32, "India"));

// // // Optional params must always come last

// // function intro5(name: string, age: number, country: string = "India"): string {
// //   return `My name is ${name}, I am ${age} years old, I live in ${country}`;
// // }

// // console.log(intro5("VinnK", 21));

// enum AgeUnit {
//   Years = "years",
//   Months = "Months",
// }

// type GreetingFunction = (greeting: string) => string;
// type Person = {
//   name: string;
//   age: number;
//   ageUnit: AgeUnit;
//   country: string;

//   greet: GreetingFunction;
// };

// const person: Person = {
//   name: "Scott",
//   age: 30,
//   ageUnit: AgeUnit.Years,
//   country: "USA",
//   greet: (greeting) => {
//     return `${greeting} ${person.name}`;
//   },
// };

// function convertAgeToMonths(person: Person): Person {
//   if (person.ageUnit === AgeUnit.Years) {
//     person.age = person.age * 12;
//     person.ageUnit = AgeUnit.Months;
//   }

//   return person;
// }

// // console.log(convertAgeToMonths(person));
// // console.log(person.greet("Hello"));

// const students = ["Alice", "Bob", "Mark"];

// // students.map((student) => {
// //   // console.log(student);
// // });

// // students.map(function (student) {
// //   // console.log(student);
// // });

// // students.map((student: string) => {
// //   console.log(student);
// // });

// // function writeToDatabase(value: string): void {
// //   console.log("Writing to dabase", value);
// // }

// // const result = writeToDatabase("Hello");
// // console.log(result);

// // function throwError(error: string): never {
// //   throw new Error(error);
// // }

// // type check = never extends void ? true : false;
// // type check2 = void extends never ? true : false;

// //Named function

// async function fetchFromDatabase(id: number): Promise<any> {}

// // Arrow Function

// const anotherAsyfunction = async (): Promise<any> => {};

// //Function Expression

// const functionExpression = async function (): Promise<any> {};

// // Strict Return Types

// async function returnString(id: number): Promise<string> {
//   return Promise.resolve("string");
// }

// type User = {
//   name: string;
//   age: number;
// };

// async function returnObj(id: number): Promise<User> {
//   return Promise.resolve({ name: "Vinodh", age: 21 });
// }

// // const result = returnObj(1);

// // console.log(result);

// async function main() {
//   console.log("Hi");
//   const user = await returnObj(7);
//   console.log(user);
// }

// main();

// function multiplyBy(by: number, ...numbers: number[]) {
//   return numbers.map((eachNumber) => by * eachNumber);
// }

// console.log(multiplyBy(2, 3, 4, 5));

// Strictly typing rest parameters

// Tuples = arrays with fixed length and fixed types

// const agrs = [8, 5] ;

// const angle = Math.atan2(...args);

// the solution is to define args as a tuple

// const args1 = [8, 5] as const;

// const angle1 = Math.atan2(...args1);

// we can deefine type annotate it like this as well
// const args2: [number, number] = [8, 5];

// args2[0] = 10;

// const angle2 = Math.atan2(...args2);
// console.log(angle2);
