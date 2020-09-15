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
//
// const fs = require('fs');
// const os = require('os');
// const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);
// process.stdout.write(String(program(input)));
// function program([n, u]) {
//    let arr = n.split(' ');
//    // console.log('arr = ', arr);
//    let k = +(u);
//     // console.log('k = ', k);
//    let result = {};
//     for (let i = 0; i < arr.length; ++i)
//     {
//         let a = arr[i];
//         if (result[a] != undefined)
//             ++result[a];
//         else
//             result[a] = 1;
//     }
//     console.log('result = ', result);
//     let arrResult = Object.entries(result)
//     console.log('arrResult = ', arrResult);
//     console.log('Math.max.apply(null, arrResult) = ', Math.max.apply(null, arrResult));
//     // let arrResultSort = []
//     // let returnResult = []
//     // for (let j = 0; j < arrResult.length; ++j)
//     // {
//     //     if (j === 0 ) {
//     //         arrResultSort.push(arrResult[j])
//     //     } else {
//     //         if (arrResult[j][1] > arrResult[j-1][1]) {
//     //             arrResultSort.unshift(arrResult[j])
//     //         } else {
//     //             arrResultSort.push(arrResult[j])
//     //         }
//     //     }
//     // }
//     // console.log('arrResultSort = ', arrResultSort);
//     // for (let z = 0; z < k; ++z)
//     // {
//     //     returnResult.push(Number(arrResultSort[z][0]))
//     //     // if (Number(arrResultSort[z][1]) === Number(arrResultSort[z + 1][1]) && (k = 1)) {
//     //     //     returnResult.push(Number(arrResultSort[z + 1][0]))
//     //     // }
//     // }
//     // console.log('returnResult = ', returnResult);
//     // return returnResult.join(' ')
// }
// 8888888888888888888888888888888888888888888888888888888888888888888888888888888888
const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);
process.stdout.write(String(program(input)));
function program([n, u]) {
    let arr = n.split(' ');
    let k = +(u);
    let result = {};
    for (let i = 0; i < arr.length; ++i) {
        let a = arr[i];
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    console.log('result = ', result);
    let arrResult = Object.entries(result)
    console.log('arrResult = ', arrResult);
    let arrResultSort = []
    let returnResult = []
    for (let j = 0; j < arrResult.length; ++j)
    {
        if (j === 0 ) {
            arrResultSort.push([+(arrResult[j][0]), arrResult[j][1]])
        } else {
            if (arrResult[j][1] > arrResult[j-1][1]) {
                arrResultSort.unshift([+(arrResult[j][0]), arrResult[j][1]])
            } else {
                arrResultSort.push([+(arrResult[j][0]), arrResult[j][1]])
            }
        }
    }
    console.log('arrResultSort = ', arrResultSort);
    for (let l = 0; l < arrResultSort.length -1; ++l) {
        if (arrResultSort[l][1] === arrResultSort[l+1][1]) {
            if (arrResultSort[l][0] > arrResultSort[l+1][0]) {
                let tempArr = arrResultSort[l]
                arrResultSort[l] = arrResultSort[l+1]
                arrResultSort[l+1] = tempArr
            }
        }
    }
    console.log('after sort arrResultSort = ', arrResultSort);
    // k === 1 ? ++k : k
    for (let z = 0; z < k; ++z)
    {
        returnResult.push(Number(arrResultSort[z][0]))
    }
    console.log('returnResult = ', returnResult);
    return returnResult.join(' ')
}
// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// решение на проверку
// const fs = require('fs');
// const os = require('os');
// const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);
// process.stdout.write(String(program(input)));
// function program([n, u]) {
//     let arr = n.split(' ');
//     let k = +(u);
//     let result = {};
//     for (let i = 0; i < arr.length; ++i) {
//         let a = arr[i];
//         if (result[a] != undefined)
//             ++result[a];
//         else
//             result[a] = 1;
//     }
//     let arrResult = Object.entries(result)
//     let arrResultSort = []
//     let returnResult = []
//     for (let j = 0; j < arrResult.length; ++j)
//     {
//         if (j === 0 ) {
//             arrResultSort.push([+(arrResult[j][0]), arrResult[j][1]])
//         } else {
//             if (arrResult[j][1] >= arrResult[j-1][1]) {
//                 arrResultSort.unshift([+(arrResult[j][0]), arrResult[j][1]])
//             } else {
//                 arrResultSort.push([+(arrResult[j][0]), arrResult[j][1]])
//             }
//         }
//     }
//     for (let l = 0; l < arrResultSort.length -1; ++l) {
//         if (arrResultSort[l][1] === arrResultSort[l+1][1]) {
//             if (arrResultSort[l][0] > arrResultSort[l+1][0]) {
//                 let tempArr = arrResultSort[l]
//                 arrResultSort[l] = arrResultSort[l+1]
//                 arrResultSort[l+1] = tempArr
//             }
//         }
//     }
//     // k === 1 ? ++k : k
//     for (let z = 0; z < k; ++z)
//     {
//         returnResult.push(Number(arrResultSort[z][0]))
//     }
//     return returnResult.join(' ')
// }