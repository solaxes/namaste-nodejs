const fs = require('fs');
const https = require('https');

console.log("Hello World");

var a = 1046583;
var b = 20456;

https.get("https://dummyjson.com/products/1", (res) => {
    res.on('data', (data) => {
        //console.log(data.toString());
    });

    console.log("API called");
});

setTimeout(() => {
    console.log("Set Timeout called after 3 seconds");
}, 3000);

// Sync function - This task will not be offloaded to livuv thread pool
fs.readFileSync("./file.txt", "utf8");


// Async function
fs.readFile("./file.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

function multiply(a, b) {
    return a * b;
}

console.log("Multiple Function called " + multiply(a, b));
