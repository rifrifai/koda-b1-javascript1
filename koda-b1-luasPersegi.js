let cariLuas = false;
let s = 10;
let isString = "Alvin Rakabuming";
let isArray = [];
let isObject = {};
let isUndefined;
let isNull = null;
let isNumber = 0;

if (cariLuas) {
    console.log(`luas dari persegi adalah ${s * s}`);
} else {
    console.log(`sedangkan keliling perseginya adalah ${4 * s}`);
}

let day = new Date();
class Vehicle {}
let vehicle = new Vehicle();

console.log(typeof s);
console.log(typeof cariLuas);
console.log(typeof isString);
console.log(typeof isArray);
console.log(typeof isObject);
console.log(typeof isUndefined);
console.log(typeof isNull);
console.log(typeof isNumber);

console.log(day instanceof Date)
console.log(vehicle instanceof Vehicle)
console.log(day instanceof Vehicle)

