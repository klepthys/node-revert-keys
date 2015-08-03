var revert = require("./index");
var assert = require("assert");

var obj = {
  "action1":["key1","key2"],
  "action2":["key3","key4"]
}

var rev = revert(obj);
assert(rev.key1 === "action1");
assert(rev.key2 === "action1");
assert(rev.key3 === "action2");
assert(rev.key4 === "action2");
console.log("[ OK ] Passed")
