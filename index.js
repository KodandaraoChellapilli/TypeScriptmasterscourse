// // type Numbers = {
// //   a: number;
// //   b: number;
// //   c: number;
// // };
var stringNumberPair = {
    key: "age",
    value: 30,
};
var numberArrayPair = {
    key: 1234,
    value: ["a", "b"],
};
function printId(obj) {
    console.log(obj.id);
}
var user = {
    id: 1234,
    name: "Alice",
};
printId(user);
var product = {
    id: 23,
    name: "Laptop",
};
printId(product);
