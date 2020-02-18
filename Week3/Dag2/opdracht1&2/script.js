//opdracht 1
console.log("He hallo, ik ben eerste") 
setTimeout(function(){ console.log("He hallo, ik ben tweede"); }, 2000);
console.log("He hallo, ik ben derde")


//opdracht 2
const huiswerkMaken = function(vak, callback) {
  console.log('oke,oke, ik ga mijn ${vak} huiswerk maken');
  setTimeout( function() {
  callback();
  }, 1000);
}

const klaarMetHuiswerk = function() {
  console.log('kijk papa en mama, ik ben klaar met mijn huiswerk');
}

huiswerkMaken('wiskunde', klaarMetHuiswerk);