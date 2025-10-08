// // type Numbers = {
// //   a: number;
// //   b: number;
// //   c: number;
// // };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// // let numbers: Numbers = { a: 2, b: 3, c: 9 };
// // // function sum(numbers: Numbers) {
// // //   return numbers.a + numbers.b + numbers.c;
// // // }
// // // console.log(sum(numbers));
// // function sum1({ a, b, c }: Numbers) {
// //   return a + b + c;
// // }
// // console.log(sum1(numbers));
// type Reservation = {
//   departureDate: Date;
//   returnDate?: Date;
//   departingFrom: string;
//   destination: string;
// };
// // Function type: Reserve
// type Reserve = {
//   //Overloading signature for Round Trip
//   (
//     departureDate: Date,
//     returnDate: Date,
//     departingFrom: string,
//     destination: string
// //   ): Reservation;
// //   //one-way-trip
// //   (
// //     departureDate: Date,
// //     departingFrom: string,
// //     destination: string
// //   ): Reservation;
// // };
// // const reserve: Reserve = (
// //   departureDate: Date,
// //   returnDateOrDepartingFrom: Date | string,
// //   departingFromOrDestination: string,
// //   destination?: string
// // ) => {
// //   if (returnDateOrDepartingFrom instanceof Date && destination) {
// //     return {
// //       departureDate: departureDate,
// //       returnDate: returnDateOrDepartingFrom,
// //       departingFrom: departingFromOrDestination,
// //       destination: destination,
// //     };
// //   }
// //   // case 2: one-way
// //   else if (typeof returnDateOrDepartingFrom == "string") {
// //     return {
// //       departureDate: departureDate,
// //       departingFrom: returnDateOrDepartingFrom,
// //       destination: departingFromOrDestination,
// //     };
// //   }
// //   throw new Error("Please provide valid details to reserve a ticket");
// // };
// // console.log(reserve(new Date(), new Date(), " New Work", "washington"));
// // console.log(reserve(new Date(), " New Work", "washington"));
// // // What are Generics?
// // function returnParam(param) {
// //   return param;
// // }
// // let x = returnParam("Hello");
// // console.log(x);
// // function returnParam<T>(param: T): T {
// //   return param;
// // }
// // // <T> declares a generic type variable called T
// // // param: T -> the parameter if of type T
// // // : T -> the function will return the same type T
// // const result1 = returnParam<string>("Hello");
// // console.log(result1);
// // const result2 = returnParam<number>(100);
// // console.log(result2);
// // const returnParamArrow = <T>(param: T): T => {
// //   return param;
// // }
// // const returnParamExpr = function<U>(param: U): U {
// //   return param
// // }
// // type MyObjectType = {
// //   myParam: <V>(param: V) => V
// // }
// // const obj: MyObjectType = {
// //   myParam: (param) => param
// // }
// // const obj2 : MyObjectType ={
// //   myParam:(param) => param
// // }
// // obj.myParam<string>("Hi there");
// // obj.myParam(123)
// // function multiGeneric<V, X>(param1: V, param2: X): [V, X] {
// //   return [param1, param2]
// // }
// // const result = multiGeneric<string, number>("Hello", 33);
// // console.log(result)
// // function returnParam(param: any): any {
// //   return param;
// // }
// // let num = returnParam(5);
// // console.log(num);
// // num.toFixed();
// // function returnParam<Type>(param : Type): Type{
// //   return param;
// // }
// // let stringOutput = returnParam<string>("Hello");
// // let numberOutput = returnParam(100);
// // stringOutput.toUpperCase();
// // numberOutput.toFixed(2)
// // let str = returnParam("world");
// // let arr = returnParam([1,2,23])
// // let obj = returnParam({name: "Mark", age: 32})
// // const myParam: <T>(param: T) => T =(param) => param;
// // type Objecttype = {
// //   myParam: <V>(param: V) => V;
// // };
// // const obj1: Objecttype = {
// // //   myParam: (x) => x
// // // }
// // // let result = obj1.myParam(true)
// // //Generic Function Declarations
// // // Generic function Signature(after the = sign)
// // type GetFirstElement = <T>(arr: T[]) => T;
// // const getFirstElement: GetFirstElement = (arr) => {
// //   return arr[0];
// // };
// // const num = getFirstElement<Number>([1, 2, 22]);
// // console.log(num);
// // const str = getFirstElement(["a", "b", "c"]);
// // console.log(str);
// // let person = getFirstElement([{ name: "Vinny" }, { name: "Mark" }]);
// // console.log(person);
// type HasLength = { length: number };
// // function logLength<T extends HasLength>(item: T): void {
// //   console.log(item.length);
// // }
// // logLength("hello");
// // logLength([1, 2, 3, 4]);
// // logLength({ length: 10 });
// // function logLengthOrValue<T extends HasLength | number>(item: T): void {
// //   if (typeof item === "number") {
// //     console.log("Number do not have length, value", item);
// //   } else {
// //     console.log("Length is:", item.length);
// //   }
// // }
// // logLengthOrValue("Hithere");
// // logLengthOrValue([1, 2, 3, 4]);
// // logLengthOrValue({ length: 10 });
// // logLengthOrValue(23);
// type KeyValuePair<K, V> = {
//   key: K;
//   value: V;
// };
// let stringNumberPair: KeyValuePair<string, number> = {
//   key: "age",
//   value: 30,
// };
// let numberArrayPair: KeyValuePair<number, string[]> = {
//   key: 1234,
//   value: ["a", "b"],
// };
// type HasId = {
//   id: number;
// };
// function printId<T extends HasId>(obj: T) {
//   console.log(obj.id);
// }
// const user = {
//   id: 1234,
//   name: "Alice",
// };
// printId(user);
// const product = {
//   id: 23,
//   name: "Laptop",
// };
// printId(product);
// // Keyof -> gives a union of Keys of an object
// // index Signatures [key: string]
// // JavaScirpt Quirk : number keys are converted to strings automatically
// // Generics + keyof + mapped types ->
// type Events = {
//   id: number;
//   date: Date;
//   type: "indoor" | "outdor";
// };
// type UnionOfKeysOfEvents = keyof Events;
// // UnionOfKeysOFEvents = "id" | "date" | "type"
// let idEvent: UnionOfKeysOfEvents = "id";
// let dateEvent: UnionOfKeysOfEvents = "date";
// // let wrongKey: UnionOfKeysOfEvents = ""indoor" | "
// // outdoor""
// type Numeric = {
//   [key: number]: string;
// };
// // type NumericKeyOf = keyof Number;
// let numobj: Numeric = {
//   1: "one",
//   2: "two",
// };
// // KeyOf Type Operator
// //Generic Default Values
// // Polymorphic Function
// //FucntionOverloads
// //Using Generics instead of FucntionOverloads
// type Events1 = {
//   id: number;
//   date: Date;
//   type: "indoor" | "outdoor";
// };
// type UnionOfKeysOFEvents1 = keyof Events;
// // type UnionOfKeysOFEvents1 = "id" | "date" | "type";
// let idOfEvent: UnionOfKeysOFEvents1 = "id";
// type Numeric1 = {
//   [Key: number]: string;
// };
// const numobj1: Numeric1 = {
//   1: "One",
//   2: "Two",
// };
// type NumericKeyOf = keyof Numeric1;
// //type Numerickeyof = number;
// type NumberAndString = { [Key: string]: string };
// let obj: NumberAndString = { 0: "first", second: "hello" };
// console.log(obj[0]);
// type Keys = keyof NumberAndString
// // type Keys = string | number
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function fetchDefault() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("hi");
                    return [4 /*yield*/, fetchData("https://jsonplaceholder.typicode.com/posts/1")];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    console.log("Hi there");
                    return [2 /*return*/];
            }
        });
    });
}
fetchDefault();
function fetchPost() {
    return __awaiter(this, void 0, void 0, function () {
        var post;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData("https://jsonplaceholder.typicode.com/posts/1")];
                case 1:
                    post = _a.sent();
                    console.log(post);
                    return [2 /*return*/];
            }
        });
    });
}
fetchPost();
// function addNumber(a: number, b: number): number {
//   return a + b;
// }
// const result = addNumber(2, 3);
// console.log(result);
// async function waitAndSayHi() {
//   console.log("Start");
//   // await 2 seconds
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   console.log("Hi afer 2 seconds");
// }
// waitAndSayHi();
// async function countNumbers() {
//   console.log("start counting");
//   const first = await new Promise<number>((resolve) =>
//     setTimeout(() => resolve(1), 1000)
//   );
//   console.log("First Number", first);
//   const second = await new Promise<number>((resolve) =>
//     setTimeout(() => resolve(2), 1000)
//   );
//   console.log("First Number", second);
//   console.log("Done!");
// }
// countNumbers();
