// type Numbers = {
//   a: number;
//   b: number;
//   c: number;
// };

// let numbers: Numbers = { a: 2, b: 3, c: 9 };
// // function sum(numbers: Numbers) {
// //   return numbers.a + numbers.b + numbers.c;
// // }
// // console.log(sum(numbers));

// function sum1({ a, b, c }: Numbers) {
//   return a + b + c;
// }
// console.log(sum1(numbers));

type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// Function type: Reserve

type Reserve = {
  //Overloading signature for Round Trip
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation;

  //one-way-trip

  (
    departureDate: Date,

    departingFrom: string,
    destination: string
  ): Reservation;
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  }

  // case 2: one-way
  else if (typeof returnDateOrDepartingFrom == "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }

  throw new Error("Please provide valid details to reserve a ticket");
};

console.log(reserve(new Date(), new Date(), " New Work", "washington"));

console.log(reserve(new Date(), " New Work", "washington"));
