// const readline = require("readline");
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
//
// let arr;
//
// rl.on("line", (input) => {
//     arr = input.split(' ');
// }).on("close", () => {
//     const result = (+((+(arr[0])*(+(arr[1]))**2)+(+(arr[2])*(+(arr[1]))) + (+(arr[3]))));
//     console.log(result);
// });
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// let data = '';
// process.stdin.on('readable', () => {
//     const chunk = process.stdin.read();
//     if (chunk !== null) {
//         data += chunk;
//     }
// });
// process.stdin.on('end', () => {
//     process.stdout.write(String(program(data.split('\n'))));
// });
// function program([n, u]) {
//     // Your code here
// }
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
// });
// let arr = [];
// rl.on("line", (line) => {
//     arr.push(line);
// }).on("close", () => {
//     здесь код и результат вывожу в console.log
// });
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);
console.log('>>>>>>>\n>>>>>>>\ninput = ', input);
process.stdout.write(String(program(input)));
function program([n, u]) {
   let arr = n.split(' ');
   console.log('>>>>>>>\n>>>>>>>\narr = ', arr);
   let k = +(u);
   console.log('>>>>>>>\n>>>>>>>\nk = ', k);
   arr.sort((a,b) => {
       return Number(a)-Number(b)
   })
   let result = {};
    for (let i = 0; i < arr.length; ++i)
    {
        let a = +(arr[i]);
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    for (var key in result) {
        console.log('число ' + key + ' == ' + result[key] + ' раз(а)');
    }
    console.log('result = ', result);
}
