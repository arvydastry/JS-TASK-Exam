/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
  import numbers { one, two, three, four, five } from "./modules/numbers/numbers.js";
  import composition, { one, four } from "./modules/math/comosition.js";
  import division, { four, two } from "./modules/math/division";
  import substraction, { three, two } from "./modules/math/subtraction";
  import multiplication, { five, two } from "./modules/math/multiplication";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
