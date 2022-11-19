const a = {};

const b = {
  key: "word",
};

const c = {};

const d = {
  name: "Xuan",
};

const m = {};

var a = 3.3445;
var c = a.toString();
console.log(c, "toString");

const json = '{ "fruit": "pineapple", "fingers": 10 }';
const obj = JSON.parse(json);
console.log(obj.fruit, obj.fingers);
