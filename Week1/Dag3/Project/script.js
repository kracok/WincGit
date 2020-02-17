let name = prompt('Welkom! Wat is jou naam?', 'naam');

alert('Welkom ' + name); 

let randomNumber = Math.floor(Math.random() * 25 ) + 1;

let guess = prompt('I am thinking of a random number between 1 and 25. What is it?');

if (parseInt(guess) === randomNumber ) {

  alert('congrats' + name + '!' + 'You guessed the right number');
  
}  else {

    alert('Sorry, that was incorrect. The number was ' + randomNumber);
}

alert('Thank you for playing ' + name);