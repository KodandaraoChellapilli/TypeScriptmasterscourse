// type Numbers = {
//   a: number;
//   b: number;
//   c: number;
// };
var reserve = function (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination) {
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
