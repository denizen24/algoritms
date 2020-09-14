const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr;

rl.on("line", (input) => {
    arr = input.split(' ');
}).on("close", () => {
    const result = (+((+(arr[0])*(+(arr[1]))**2)+(+(arr[2])*(+(arr[1]))) + (+(arr[3]))));
    console.log(result);
});

// y = ax2 + bx + c.
// На вход через пробел подаются числа a, x, b, c.

// function task_A(stringNumber) {
//     return Number((Number(stringNumber.split(' ')[0])*Number(stringNumber.split(' ')[1])**2)+(Number(stringNumber.split(' ')[2])*Number(stringNumber.split(' ')[1])) + Number(stringNumber.split(' ')[3]));
// }

// function task_A(stringNumber) {
//     let array = stringNumber.split(' ')
//     return Number((Number(array[0])*Number(array[1])**2)+(Number(array[2])*Number(array[1])) + Number(array[3]));
// }
//
// function task_A(stringNumber) {
//     let array = stringNumber.split(' ')
//     return (+((+(array[0])*(+(array[1]))**2)+(+(array[2])*(+(array[1]))) + (+(array[3]))));
// }
//
// console.log('>>>>>>>\n>>>>>>>>\n-8 -5 -2 7\n', task_A('-8 -5 -2 7'))
// console.log('>>>>>>>\n>>>>>>>>\n8 2 9 -10\n', task_A('8 2 9 -10'))

