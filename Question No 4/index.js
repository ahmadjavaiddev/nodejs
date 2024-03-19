// Task 4: Retrieving information about the current operating system
const os = require("os");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total memory (bytes):", os.totalmem());
console.log("Free memory (bytes):", os.freemem());
