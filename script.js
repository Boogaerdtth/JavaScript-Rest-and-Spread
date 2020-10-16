// function sum(...numbers) {
//     return numbers.reduce(function (prev, current) {

//         return prev + current;
//     });
// }
// }
// console.log(sum(1, 2, 3, 3, 4, 5, 23, 5))

const optellen = function (...args) {
    return args.reduce((acc, item) => {
        return acc + item;
    })
}
console.log(optellen(1, 2, 3, 4, 5, 6))

const opTellen = function (num1, num2, num3) {
    return num1 + num2 + num3;
}

const cijfers = [1, 2, 3];
console.log(opTellen(...cijfers))