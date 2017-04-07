var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var blueMessage = "Hello " + chalk.blue("Sea");
var magentaMessage = "Hello " + chalk.magenta("Forest");
console.log(message);
console.log(blueMessage);
console.log(magentaMessage);

console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));
