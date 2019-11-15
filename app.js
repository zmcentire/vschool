const readline = require('readline-sync');

var userName = readline.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var faveFood = readline.question('What is your favorite food?', {hideEchoBack:true});
console.log('Oh, I love ' + faveFood + ' too, ' + userName + '!')