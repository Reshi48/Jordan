import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const name = await rl.question("What is your name? ");
console.log(`Hello ${name}!`);

async function main() {
    const firstnumber = parseInt(await rl.question("What is your first number? "));
    const secondnumber = parseInt(await rl.question("what is your second number?"));
    const operator = await rl.question("who is your operator?");
    if (operator === "+") console.log(add(firstnumber, secondnumber));
    if (operator === "-") console.log(subtract(firstnumber, secondnumber));
    if (operator === "/") console.log(divide(firstnumber, secondnumber));
    if (operator === "*") console.log(multiply(firstnumber, secondnumber));
    main()
}
function add(firstnumber, secondnumber) {
  return(firstnumber + secondnumber);
}
function subtract(firstnumber, secondnumber) {
  return(firstnumber - secondnumber);
}
function multiply(firstnumber, secondnumber) {
  return(firstnumber * secondnumber);
}
function divide(firstnumber, secondnumber) {
  return(firstnumber / secondnumber);
}
main()