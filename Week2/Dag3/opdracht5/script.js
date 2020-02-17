const superheroes = [
  {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
  },
  {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
  },
  {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
  },
  {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
  },
  {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
  },
  {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
  },
  {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
},
{
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
},
{
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
},
{
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
},
{
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
},
{
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
},
{
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
},
{
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
},
{
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
  }
];

//1: een array met alle namen
const namesArray = superheroes.map(hero => {
  return hero.name;
});
console.log('The names of all heroes', namesArray);

//2: een array van helden onder de 190 pounds. antwoord is 4
const weightArray = superheroes.filter(hero => {
  return hero.weight < 190;
});
console.log('Amount of heroes that weight less than 190 ', weightArray.length);

//3: een array met namen van superhelden die 200 wegen
const waight200 = superheroes.filter(hero => {
  return hero.weight == 200;
});

const weight200Names = waight200.map(hero =>{
  return hero.name;
});

console.log('Heroes that weight 200 are: ', weight200Names);

//4: een array van de first appearance commics
const comicArray = superheroes.map(hero => {
  return hero.first_appearance;
});
console.log('The comics where heroes first appeared in ', comicArray);

//5: een array met alle DC en marvel universes apart helden
const dcArray = superheroes.filter(hero => {
  return hero.publisher === "DC Comics"
})

const marvelArray = superheroes.filter(hero => {
  return hero.publisher === "Marvel Comics"
})

console.log('The heroes from the DC universe: ', dcArray, 'The heroes from the marvel universe: ', marvelArray);

//6: alle gewichten van de DC heroes bij elkaar opgeteld
const dcHeroWeight = dcArray.map(hero =>{
  if (hero.weight !== "unknown") {
    return parseInt(hero.weight, 10);
  } else {
    return 0;
}
});

const addedWeightOfHeroes = dcHeroWeight.reduce((weight1, weight2) => {
  return weight1 + weight2;
});

console.log('All DC heroes together weight:', addedWeightOfHeroes, 'pounts');

//7: alle gewichten van de Marvel heroes bij elkaar opgeteld
const marvelHeroWeight = marvelArray.map(hero =>{
  if (hero.weight !== "unknown") {
    return parseInt(hero.weight, 10);
  } else {
    return 0;
}
});

const addedWeightOfMarvelHeroes = marvelHeroWeight.reduce((weight1, weight2) => {
  return weight1 + weight2;
});

console.log('All Marvel heroes together weight:', addedWeightOfMarvelHeroes, 'pounts');

// //map voorbeeld
// const myArray = [1, 2, 3, 4, 5]

// const myNewArray = myArray.map(item => {
//   return item + 5
// })
// console.log(myNewArray);

// const heroesWeights = superheroes.map(hero => {
//   if(hero.weight === 'unknown') {
//     console.log('no weight');
//   } else{
//     console.log('heavy heros ', hero);
//   }
// });

//filter voorbeeld
// const mySecondArray = [1, 2, 3, 4, 5]

// const myFilterArray = mySecondArray.filter(item => {
//   return item > 3
// })

// console.log(myFilterArray);

//filter voorbeeld 2
// const filteredHeroes = superheroes.filter (superhero => superhero.publisher === 'Marvel Comics');

// console.log(filteredHeroes);

//reduce voorbeeld
// const myThirdArray = [1, 2, 3, 4, 5, 6];

// const addValue = myThirdArray.reduce((accumulator, currenvalue) => {
//   return accumulator + currenvalue
// })

// console.log(addValue);

// console.log(superheroes);

// const allHeroes = superheroes.map(hero => {
//   if
//   superhero.weight = newWeight;
//   return hero
// } else {
//   superhero.weight = 0;
//   return hero 
//   }
// });