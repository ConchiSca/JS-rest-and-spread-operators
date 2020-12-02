
const sumNumbers = (...numbers) => {
    return numbers.reduce((acc,item) => {
        return acc + item;
    })
}

sumNumbers(1,2,3,4,5,6);



const sumNumbers2 = function(num1, num2, num3){
    return num1 + num2 + num3;
}

const arrayOfNumbers = [1, 2, 3];

console.log(sumNumbers2(...arrayOfNumbers));