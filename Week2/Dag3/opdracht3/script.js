//opdracht A
const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]
  
  function findSpiderMan(superhero){
    return superhero.name === 'Spiderman';
  }
  
  console.log(superheroes.find(findSpiderMan));

//opdracht B
const doubleArrayValues = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 2);
  });
  return newArray;
};

console.log(doubleArrayValues([1, 2, 3]));

//opdracht C
const containsNumberBiggerThan10 = function (array) {
  return array.some(number => {
    return number > 10;
  });
};

console.log('something is bigger then 10?', containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])); 

//opdracht D
const isItalyInTheGreat7 = function (array) {
  return array.includes('Italy');
}

console.log('is there Italy?', isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));

//opdracht E
const tenfold = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 10);
  });
  return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

//opdracht F
const isBelow100 = function (array) {
  return array.every(number => {
    return number < 100;
  });
};

console.log('under 100?', isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
console.log('under 100?', isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98 ]))

//BONUS opdracht G
const bigSum = function (array){
  return array.reduce ((acc, number) => {
    return acc + number;
  });
}

console.log('total numbers in the array are', bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))