import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: chalk.blue("Enter your sentence:"),
        },
    ]
);

let word = answer.sentence.trim().split(" ");
// .trim() removes white spaces from the string.
// .split(" ") split the sentence into an array.
// .length count the element of the array(string).
let wordCount = word.length;

console.log(chalk.magenta(`Your word count is ${wordCount}`))