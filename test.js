var assert = require("assert");
var math = require("./js/math");

assert(math.add(3, 5) === 8);
assert(math.sub(3, 5) === -2);
assert(math.multy(3, 5) === 15);

console.log("all test passed!");
