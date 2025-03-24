const crypto = require('crypto');

console.log("Hello World");

var a = 1046583;
var b = 20456;

const key = crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("first key is generated " + key.toString('hex'));

// Password-Based Key Derivation Function 2 (PBKDF2)
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("Key is generated " + key.toString('hex'));
});

function multiply(x, y) {
    const result = a * b;
    return result;
}

var c = multiply(a, b);
console.log("Multiple Function called " + c);
