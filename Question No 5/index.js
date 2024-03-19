// Task 5: Manipulating file paths
const path = require("path");

const filePath = "/path/to/some/file.txt";
console.log("Directory name:", path.dirname(filePath));
console.log("File name:", path.basename(filePath));
console.log("File extension:", path.extname(filePath));
