const mode = "multiplication";

switch (mode) {
  case "fizzbuzz":
    for (let i = 1; i <= 20; i++) {
      if (i % 5 == 0 || i % 3 == 0) {
        console.log("fizzbuzz");
      } else {
        console.log(i);
      }
    }
    break;

  case "odd-even":
    for (let i = 1; i <= 10; i++) {
      if (i % 2 == 0) {
        console.log(`${i} genap`);
      } else {
        console.log(`${i} ganjil`);
      }
    }
    break;

    case "multiplication":
        let x = 1;
    do {
        console.log(`multiplication of ${x} is ${1 + x}`);
        x++;
    } while (x <= 10);
    break;


    default:
        console.log("invalid input");
    
}
