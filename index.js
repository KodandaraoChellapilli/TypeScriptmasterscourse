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
function logger(state) {
    switch (state.state1) {
        case "loading":
            return "Downloading...";
        case "failed":
            return `Error ${state.code} downloading`;
        case "success":
            return `Downloaded ${state.response.title} - ${state.response.summary}`;
    }
}
const hybridAnimal1 = {
    name: "Hybrid",
    color: "Brown",
    barks: true,
    purrs: true,
};
//# sourceMappingURL=index.js.map