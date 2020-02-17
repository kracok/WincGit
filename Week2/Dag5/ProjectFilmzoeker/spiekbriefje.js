//dom manipulatie antwoorden
console.log("test of mijn javascript werkt");

const animalSpotted = event => {
  console.log("spotted:", event.target.textContent);
  const spottedAnimal = event.target.textContent;
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(spottedAnimal));
  const list = document.getElementById("spotted-animals-list");
  list.appendChild(listItem);
};

const removeFirstItem = () => {
  const firstItem = document.getElementById("spotted-animals-list").firstChild;
  firstItem.remove();
};

const removeAll = () => {
  const spottedAnimalsList = document.getElementById("spotted-animals-list");
  spottedAnimalsList.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", function() {
  const animalButtons = document.querySelectorAll(".big-five-button");
  animalButtons.forEach(function(animalButton) {
    animalButton.addEventListener("click", animalSpotted);
  });

  const removeFirstItemButton = document.getElementById(
    "remove-first-item-button"
  );
  removeFirstItemButton.addEventListener("click", removeFirstItem);

  const removeAllButton = document.getElementById("remove-all-button");
  removeAllButton.addEventListener("click", removeAll);
});

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