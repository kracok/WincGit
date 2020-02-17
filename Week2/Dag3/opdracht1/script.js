// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions();

// dit is een arrow funtie van de code hierboven
  const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");

  ikRockArrowFunctions();

// zet de functie op één regel om naar een arrow functie
  const fivePlusSeven = function () {
    return 5 + 7
  };
  
  fivePlusSeven();

// dit is een arrow functie op één regel van de code hierboven
  const fivePlusSeven = () => 5 + 7;

  fivePlusSeven();

// een zo kort mogelijke arrow function
  () => 1 + 2;

// een arrow functie op één regel die de params a en b bijelkaar optel
  const myFunction = (a, b) => a + b;

// Schrijf een arrow function op 1 regel, die de parameter a behoudt, en altijd a plus 5 returned
const addFive = a => a + 5; 

// Schrijf een arrow function met een implicit return statement die een simpel object returned
const createObject = () => ({greeting: "hoi"});