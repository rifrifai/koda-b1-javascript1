let we = {
  are: {
    the: {
      best: "Koda",
    },
  },
};

const { best } = we.are.the;

let hello = {
  world: "Hello World",
};

const { world } = hello;

let obj = {
  str: [
    null,
    1,
    2,
    [null, [null, 1, { man: [{ tech: { academy: "Tech Academy" } }] }]],
  ],
};

const { str, man, tech, academy } = obj;

let my = [{ favourite: [1, 2, 3, { fruit: { is: "Apple" } }] }];
let num = {
  first: [9, "3", 3],
  second: [2, 3, "2"],
};

// console.log(we.are.the.best);
console.log(best);
// console.log(hello.world);
console.log(world);
// console.log(obj.str[3][1][2].man[0].tech.academy);
console.log(obj.str[3][1][2].man[0].tech.academy);
console.log(my[0].favourite[3].fruit.is);
console.log(num.first[1] + num.second[2]);
