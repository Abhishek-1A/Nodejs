const fs = require("fs");

//sync  --- blocking task
 //fs.writeFileSync("./test.txt", "hello abhishek");

//async   ----non-blocking task
// fs.writeFile("./test.txt", "hello abhishek async", (err) => {});

//syncronos
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);


// blocking task
// console.log("1");
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// console.log("2");

//non blocking 

console.log("1");
const result= fs.readFile("./contact.txt", "utf-8", (err, result) =>{
    console.log(result);
});
console.log("3");
