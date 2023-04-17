const prompt = require("prompt-sync")();

const input1 = prompt("What's your name?");
console.log(`Your name is ${input1}`);

const input2 = prompt("What's your surname?");
console.log(`Your surname is ${input2}`)

console.log(`Your full name is ${input1} ${input2}`);