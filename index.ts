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
// // angle brackets
// let firstName = <any>"Mark"; // cast string as any
// firstName = 123;

// let lastname = "smith" as any;
// lastname = { age: 30 };

// let user = {
//   name: "Mark",
//   email: "mark@gmail.com",
// };

// type User = {
//   name: String;
//   email: String;
// };

// function fetchUser() {
//   return user as User;
// }

// const fetchedData = fetchUser();
// console.log(fetchedData.name);
// // console.log(fetchedData.email);

// let person = {
//   name: "John",
//   age: 32,
// };

// person : {
//   name: string;
//   age: number;
// }

// // Annontating with the object type
// let car: object = {
//   brand: "Toyota",
//   color: "black",
// };

// car = [1, 2, 3]; // IGNORE
// car = function() {};

// Using {} (object literal syntax)

// let newCar: {} = {
//   brand: "Toyota",
//   color: "black",
// }

// newCar = [1, 2, 3]; // IGNORE
// newCar = function() {};

// let newCar: {
//   brand: string;
//   color: string;
// } = {
//   brand: "Toyota",
//   color: "black",
// };

// type Post = {
//   title: string;
//   content: string;
//   date: Date;
// author = {
//   name : string;
//   age : number;
//   email : string;
// };

// type Author = {
//   name : string;
//   age : number;
//   email : string;
// };

// let post: Post = {
//   title: "This is a blog post",
//   content: "This is the content of the blog post",
//   date: new Date(),
// };

// let post2: Post = {
//   title: "This is a blog post2",
//   content: "This is the content of the blog post2",
//   date: new Date(),
// };
// A nested Object means : An object inside another object
// but now we also want to an author inside the post object
// and this author itself has its own properties
// name : string
// age : number
// email : string

// post = {
//   title: "",
//   content: "",
//   date: new Date(),
//   author: {
//     name : "",
//     age : ...,
//     email : "",
//   }
// }

type Author = {
  name: string;
  age: number;
  email: string;
  readonly type: "human" | "ai";
};

type AwardDetails = {
  name: string;
  date: Date;
};

type Awards = {
  [key: string]: AwardDetails;
};

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
  category?: string; // optional property
};

let post: Post = {
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

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Whiskers",
  purrs: true,
};

let hybridAnimal: DogAndCatUnion = {
  name: "Hybrid",
  barks: true,
  purrs: true,
  wags: false,
};

// let partialDog: DogAndCatUnion = {
//   name: "PartialDog",
//   barks: true,
// };

type NetworkLoadingState = {
  state1: "loading";
};

type NetworkFailedState = {
  state1: "failed";
  code: number;
};

type NetworkSuccessState = {
  state1: "success";

  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(state: NetworkState) {
  switch (state.state1) {
    case "loading":
      return "Downloading...";
    case "failed":
      return `Error ${state.code} downloading`;
    case "success":
      return `Downloaded ${state.response.title} - ${state.response.summary}`;
  }
}

type Cat1 = {
  name: string;
  color: string;
  purrs: boolean;
};

type Dog1 = {
  name: string;
  color: string;
  barks: boolean;
};

type HybridAnimal1 = Cat1 & Dog1;

const hybridAnimal1: HybridAnimal1 = {
  name: "Hybrid",
  color: "Brown",
  barks: true,
  purrs: true,
};
