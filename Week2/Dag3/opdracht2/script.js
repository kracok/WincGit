//opdracht A
const addToArray = function(array){
  array.push('cool');
  return array;
};

console.log(addToArray(['nice', 'awesome', 'badass']));

//opdracht B
const amountInArray = function(array) {
  return array.length;
};
console.log(amountInArray(["appels", "peren", "citroenen"]));

//opdracht C
const amountInArrayTwo = function(array) {
  return array[0];
};
console.log(amountInArrayTwo(["appels", "peren", "citroenen"]));

//opdracht D
const amountInArrayThree = function(array) {
  return array [array.length -1];
};
console.log(amountInArrayThree(["Haas", "Cavia", "Kip", "Schildpad"]));

//opdracht E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
  return array.slice(1, 4);
}

const impeachTrumpSplice = function(array) {
return array.splice(1, 4);
}

console.log(impeachTrumpSlice(presidents));
console.log(impeachTrumpSplice(presidents));

//opdracht F
const stringsTogether = function(array){
  return array.join('');
}
console.log(stringsTogether(['Winc ', 'Academy ', 'is ', 'leuk ', ';-}'])) 

//opdracgt G
const arraysCombined = function(array1, array2){
  return array1.concat(array2);
}
console.log(arraysCombined([1, 2, 3], [5, 6, 7]));