// Task 2: Reading from a file and writing to another file
const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf-8");
fs.writeFileSync("output.txt", content);
console.log("Content copied from input.txt to output.txt");
