"use strict";
// // // type Numbers = {
// // //   a: number;
// // //   b: number;
// // //   c: number;
// // // };
Object.defineProperty(exports, "__esModule", { value: true });
// // // let numbers: Numbers = { a: 2, b: 3, c: 9 };
// // // // function sum(numbers: Numbers) {
// // // //   return numbers.a + numbers.b + numbers.c;
// // // // }
// // // // console.log(sum(numbers));
// // // function sum1({ a, b, c }: Numbers) {
// // //   return a + b + c;
// // // }
// // // console.log(sum1(numbers));
// // type Reservation = {
// //   departureDate: Date;
// //   returnDate?: Date;
// //   departingFrom: string;
// //   destination: string;
// // };
// // // Function type: Reserve
// // type Reserve = {
// //   //Overloading signature for Round Trip
// //   (
// //     departureDate: Date,
// //     returnDate: Date,
// //     departingFrom: string,
// //     destination: string
// // //   ): Reservation;
// // //   //one-way-trip
// // //   (
// // //     departureDate: Date,
// // //     departingFrom: string,
// // //     destination: string
// // //   ): Reservation;
// // // };
// // // const reserve: Reserve = (
// // //   departureDate: Date,
// // //   returnDateOrDepartingFrom: Date | string,
// // //   departingFromOrDestination: string,
// // //   destination?: string
// // // ) => {
// // //   if (returnDateOrDepartingFrom instanceof Date && destination) {
// // //     return {
// // //       departureDate: departureDate,
// // //       returnDate: returnDateOrDepartingFrom,
// // //       departingFrom: departingFromOrDestination,
// // //       destination: destination,
// // //     };
// // //   }
// // //   // case 2: one-way
// // //   else if (typeof returnDateOrDepartingFrom == "string") {
// // //     return {
// // //       departureDate: departureDate,
// // //       departingFrom: returnDateOrDepartingFrom,
// // //       destination: departingFromOrDestination,
// // //     };
// // //   }
// // //   throw new Error("Please provide valid details to reserve a ticket");
// // // };
// // // console.log(reserve(new Date(), new Date(), " New Work", "washington"));
// // // console.log(reserve(new Date(), " New Work", "washington"));
// // // // What are Generics?
// // // function returnParam(param) {
// // //   return param;
// // // }
// // // let x = returnParam("Hello");
// // // console.log(x);
// // // function returnParam<T>(param: T): T {
// // //   return param;
// // // }
// // // // <T> declares a generic type variable called T
// // // // param: T -> the parameter if of type T
// // // // : T -> the function will return the same type T
// // // const result1 = returnParam<string>("Hello");
// // // console.log(result1);
// // // const result2 = returnParam<number>(100);
// // // console.log(result2);
// // // const returnParamArrow = <T>(param: T): T => {
// // //   return param;
// // // }
// // // const returnParamExpr = function<U>(param: U): U {
// // //   return param
// // // }
// // // type MyObjectType = {
// // //   myParam: <V>(param: V) => V
// // // }
// // // const obj: MyObjectType = {
// // //   myParam: (param) => param
// // // }
// // // const obj2 : MyObjectType ={
// // //   myParam:(param) => param
// // // }
// // // obj.myParam<string>("Hi there");
// // // obj.myParam(123)
// // // function multiGeneric<V, X>(param1: V, param2: X): [V, X] {
// // //   return [param1, param2]
// // // }
// // // const result = multiGeneric<string, number>("Hello", 33);
// // // console.log(result)
// // // function returnParam(param: any): any {
// // //   return param;
// // // }
// // // let num = returnParam(5);
// // // console.log(num);
// // // num.toFixed();
// // // function returnParam<Type>(param : Type): Type{
// // //   return param;
// // // }
// // // let stringOutput = returnParam<string>("Hello");
// // // let numberOutput = returnParam(100);
// // // stringOutput.toUpperCase();
// // // numberOutput.toFixed(2)
// // // let str = returnParam("world");
// // // let arr = returnParam([1,2,23])
// // // let obj = returnParam({name: "Mark", age: 32})
// // // const myParam: <T>(param: T) => T =(param) => param;
// // // type Objecttype = {
// // //   myParam: <V>(param: V) => V;
// // // };
// // // // const obj1: Objecttype = {
// // // // //   myParam: (x) => x
// // // // // }
// // // // // let result = obj1.myParam(true)
// // // // //Generic Function Declarations
// // // // // Generic function Signature(after the = sign)
// // // // type GetFirstElement = <T>(arr: T[]) => T;
// // // // const getFirstElement: GetFirstElement = (arr) => {
// // // //   return arr[0];
// // // // };
// // // // const num = getFirstElement<Number>([1, 2, 22]);
// // // // console.log(num);
// // // // const str = getFirstElement(["a", "b", "c"]);
// // // // console.log(str);
// // // // let person = getFirstElement([{ name: "Vinny" }, { name: "Mark" }]);
// // // // console.log(person);
// // // type HasLength = { length: number };
// // // // function logLength<T extends HasLength>(item: T): void {
// // // //   console.log(item.length);
// // // // }
// // // // logLength("hello");
// // // // logLength([1, 2, 3, 4]);
// // // // logLength({ length: 10 });
// // // // function logLengthOrValue<T extends HasLength | number>(item: T): void {
// // // //   if (typeof item === "number") {
// // // //     console.log("Number do not have length, value", item);
// // // //   } else {
// // // //     console.log("Length is:", item.length);
// // // //   }
// // // // }
// // // // logLengthOrValue("Hithere");
// // // // logLengthOrValue([1, 2, 3, 4]);
// // // // logLengthOrValue({ length: 10 });
// // // // logLengthOrValue(23);
// // // type KeyValuePair<K, V> = {
// // //   key: K;
// // //   value: V;
// // // };
// // // let stringNumberPair: KeyValuePair<string, number> = {
// // //   key: "age",
// // //   value: 30,
// // // };
// // // let numberArrayPair: KeyValuePair<number, string[]> = {
// // //   key: 1234,
// // //   value: ["a", "b"],
// // // };
// // // type HasId = {
// // //   id: number;
// // // };
// // // function printId<T extends HasId>(obj: T) {
// // //   console.log(obj.id);
// // // }
// // // const user = {
// // //   id: 1234,
// // //   name: "Alice",
// // // };
// // // printId(user);
// // // const product = {
// // //   id: 23,
// // //   name: "Laptop",
// // // };
// // // printId(product);
// // // // Keyof -> gives a union of Keys of an object
// // // // index Signatures [key: string]
// // // // JavaScirpt Quirk : number keys are converted to strings automatically
// // // // Generics + keyof + mapped types ->
// // // type Events = {
// // //   id: number;
// // //   date: Date;
// // //   type: "indoor" | "outdor";
// // // };
// // // type UnionOfKeysOfEvents = keyof Events;
// // // // UnionOfKeysOFEvents = "id" | "date" | "type"
// // // let idEvent: UnionOfKeysOfEvents = "id";
// // // let dateEvent: UnionOfKeysOfEvents = "date";
// // // // let wrongKey: UnionOfKeysOfEvents = ""indoor" | "
// // // // outdoor""
// // // type Numeric = {
// // //   [key: number]: string;
// // // };
// // // // type NumericKeyOf = keyof Number;
// // // let numobj: Numeric = {
// // //   1: "one",
// // //   2: "two",
// // // };
// // // // KeyOf Type Operator
// // // //Generic Default Values
// // // // Polymorphic Function
// // // //FucntionOverloads
// // // //Using Generics instead of FucntionOverloads
// // // type Events1 = {
// // //   id: number;
// // //   date: Date;
// // //   type: "indoor" | "outdoor";
// // // };
// // // type UnionOfKeysOFEvents1 = keyof Events;
// // // // type UnionOfKeysOFEvents1 = "id" | "date" | "type";
// // // let idOfEvent: UnionOfKeysOFEvents1 = "id";
// // // type Numeric1 = {
// // //   [Key: number]: string;
// // // };
// // // const numobj1: Numeric1 = {
// // //   1: "One",
// // //   2: "Two",
// // // };
// // // type NumericKeyOf = keyof Numeric1;
// // // //type Numerickeyof = number;
// // // type NumberAndString = { [Key: string]: string };
// // // let obj: NumberAndString = { 0: "first", second: "hello" };
// // // console.log(obj[0]);
// // // type Keys = keyof NumberAndString
// // // // type Keys = string | number
// // async function fetchData<T = any>(url: string): Promise<T> {
// //   const response = await fetch(url);
// //   const data = await response.json();
// //   return data;
// // }
// // async function fetchDefault() {
// //   console.log("hi");
// //   const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
// //   console.log(data);
// //   console.log("Hi there");
// // }
// // fetchDefault();
// // interface Post {
// //   userId: number;
// //   id: number;
// //   title: string;
// //   body: string;
// // }
// // async function fetchPost() {
// //   const post = await fetchData<Post>(
// //     "https://jsonplaceholder.typicode.com/posts/1"
// //   );
// //   console.log(post);
// // }
// // fetchPost();
// // // function addNumber(a: number, b: number): number {
// // //   return a + b;
// // // }
// // // const result = addNumber(2, 3);
// // // console.log(result);
// // // async function waitAndSayHi() {
// // //   console.log("Start");
// // //   // await 2 seconds
// // //   await new Promise((resolve) => setTimeout(resolve, 2000));
// // //   console.log("Hi afer 2 seconds");
// // // }
// // // waitAndSayHi();
// // // async function countNumbers() {
// // //   console.log("start counting");
// // //   const first = await new Promise<number>((resolve) =>
// // //     setTimeout(() => resolve(1), 1000)
// // //   );
// // //   console.log("First Number", first);
// // //   const second = await new Promise<number>((resolve) =>
// // //     setTimeout(() => resolve(2), 1000)
// // //   );
// // //   console.log("First Number", second);
// // //   console.log("Done!");
// // // }
// // // countNumbers();
// //Function overload means = multiple signatures of the same function name to handle diferent types
// // type Fitler = {
// //   (array: number[], predicate: (item: number) => boolean): number[];
// //   (array: string[], predicate: (item: string) => boolean): string[];
// //   (array: object[], predicate: (item: object) => boolean): object[];
// // };
// // const filter = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
// //   let result: T[] = [];
// //   for (let i = 0; i < array.length; i++) {
// //     let item = array[i];
// //     if (predicate(item)) {
// //       result.push(item);
// //     }
// //   }
// //   return result;
// // };
// // let numbers = [1, 3, 4, 6, 9, 7, 10, 12, 66];
// // //predict to filter all numbers are greater than 7
// // function predicate(item: number) {
// //   return item > 7;
// // }
// // let animals = ["cat", "bat", "rat", "mat"];
// // //predicate to filter all cats from animals array
// // function filterCats(item: string) {
// //   return item === "cat";
// // }
// // //Result of invoking the function
// // console.log(filter(numbers, predicate));
// // console.log(filter(animals, filterCats));
// const map = <T, U>(array: T[], func: (item: T) => U): (U | T)[] => {
//   if (array.length === 0) {
//     return array;
//   }
//   let result: U[] = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(func(array[i]));
//   }
//   return result;
// };
// // map()
// let numbers = [4, 5, 6, 7, 8, 9];
// const converted = map(numbers, function (num) {
//   return num.toString();
// });
// console.log(converted);
// //["4"]
// //["4", "5"]
var Car = /** @class */ (function () {
    function Car(color, brand) {
        this.color = color; // this means the current instance of the class
        this.brand = brand;
    }
    Car.prototype.drive = function () {
        console.log("Driving a", this.color, "car");
    };
    return Car;
}());
var redCar = new Car("red", "Toyota"); // constror runs here
var blueCar = new Car("blue", "Honda");
// redCar.drive();
// blueCar.drive();
// Abstract Classes
//An abstract class is a class that cannot be instantiated on its own and is meant to be subclassed. It can contain abstract methods (methods without implementation) that must be implemented by any non-abstract subclass. or incomple blueprint
// abstract class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   eat() {
//     console.log(`${this.name} is eating food.`);
//   }
//   abstract makeSound(): void;
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   makeSound(): void {
//     console.log(`${this.name} says Woof Woof`);
//   }
// }
// const myDog = new Dog("Buddy");
// // myDog.eat();
// // myDog.makeSound();
// interface Student {
//   name: string;
//   study(): void;
// }
// class HighSchoolStudent implements Student {
//   name = "Vinny";
//   study() {
//     console.log(`${this.name} is studying for exams.`);
//   }
// }
// class CollegeStudent implements Student {
//   name = "Eswar";
//   study() {
//     console.log(`${this.name} is studying for Engineering.`);
//   }
// }
// const students: Student[] = [new HighSchoolStudent(), new CollegeStudent()];
// for (let s of students) {
//   s.study();
// }
// const student1 = new HighSchoolStudent();
// student1.study();
//What is Decorators?
//A decorator adds extra power or behavior to a class or function -without changing the main code.
// function log(taget: object, key: string | symbol) : void {
//   console.log(" Property was created" + String(key));
// }
// class Student {
//   @log
//   name: "Vinny";
//   @log
//   age: 23;
//   sayHi() {
//     console.log("Hi there" + this.name);
//   }
// }
// const s = new Student();
// s.sayHi();
// Closure : Its a function remembers the varaibles from the place where it was created.
// Keyof -> gives a union of Keys of an object
// index Signatures [key: string]
// JavaScirpt Quirk : number keys are converted to strings automatically
// Generics + keyof + mapped types ->
// interface Student {
//   name: string;
//   age: number;
//   grade: string;
// }
// type StudentKeys = keyof Student;
// // type StudentKeys = "name" | "age"
// let key1: StudentKeys = "name";
// let key2: StudentKeys = "age";
// //Partial<Type> -> makes all properties optional
// const student1: Partial<Student> = { name: "Vinny" };
// console.log(student1);
// const students2: Required<Student> = { name: "Vinny", age: 23 };
// console.log(students2);
// //Readonly<Type> -> makes all properties readonly
// const student3: Readonly<Student> = { name: "Eswar", age: 24 };
// console.log(student3);
// //Record<Keys, Type> -> creates an object type with a set of properties Keys of type Type
// type Grade  = "A" | "B" | "C";
// type StudentName = "Vinny" | "Eswar" | "Mark";
// const grades: Record<StudentName, Grade> = {
//   Vinny: "A",
//   Eswar: "B",
//   Mark: "C",
// };
// Pick<Type, Keys> -> creates a type by picking the set of properties Keys from Type
// interface Student {
//   name: string;
//   age: number;
//   grade: string;
// }
// type StudentNameAndAge = Pick<Student, "name" | "age">;
// const student4: StudentNameAndAge = { name: "Vinny",
//    age: 23
//  };
// console.log(student4);
// Omit<Type, Keys> -> creates a type by omitting the set of properties Keys from Type
// type WithoutGrade = Omit<Student, "grade">;
// const student5: WithoutGrade = { name: "Eswar", age: 24 };
// console.log(student5);
//ReturnType<Type> -> creates a type representing the return type of a function Type
// function add(a: number, b: number): number {
//   return a + b;
// }
// type ResultType = ReturnType<typeof add>;
// const result: ResultType = add(2, 3);
// console.log(result);
// //PARAMETERS<Type> -> creates a tuple type representing the types of parameters of a function Type
// function greet(name: string, age: number): string {
//   return `Hello, my name is ${name} and I am ${age} years old.`;
// }
// type GreetParameters = Parameters<typeof greet>;
// const params: GreetParameters = ["Vinny", 23];
// const greeting = greet(...params);
// console.log(greeting);
// Type Guards
function printId(id) {
    if (typeof id === "string") {
        console.log("ID in uppercase:", id.toUpperCase());
    }
    else {
        console.log("ID as number:", id);
    }
}
printId(123);
printId("abc");
