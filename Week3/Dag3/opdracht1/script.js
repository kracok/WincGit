//functie 1 
const addNumbers = function (...numbers){ 
    return numbers.reduce((prev, current) => prev + current);
};

const arrayOfNumbers = [3, 4, 5, 6, 7];

console.log(addNumbers(...arrayOfNumbers));

//functie 2, alleen de eerste 4 nummers van de array worden meegenomen
const addNumbers2 = function (num1, num2, num3, num4){
    return num1 + num2 + num3 + num4;
}

const arrayOfNumbers2 = [3, 4, 5, 6, 7];

console.log(addNumbers2(...arrayOfNumbers2));