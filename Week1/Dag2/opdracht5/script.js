//leeftijd check
const age = 18;

if (age >= 18) {
    console.log('Go ahead');
} else {
    console.log('Sorry, you are not old enough');
}

if (age >= 18 && age <= 25) {
    console.log('you get 50% off');
} else {
    console.log('sorry you dont get 50% off');
}

//gender check
const isFemale = true;

if (isFemale) {
    console.log('Welcome at ladiesnight');
} else {
    console.log('Sorry, no boys allowed');
}

//bob check
const driverStatus = 'bob';

if (driverStatus === 'bob') {
    console.log('Have a save drive');
} else {
    console.log('Dont drive yourself, make sure you have a friend driving or order a uber');
}

//name check
const name = 'Sarah';

if (name === 'Sarah' || name === 'Bram') {
    console.log('your get a free beer!');
} else {
    console.log('sorry, you dont get a free beer');
}

//amount spent check
const totalAmount = 55;

if (totalAmount >= 25 && totalamount < 50) {
    console.log('your get free (vegan)bitter balls!');
} else if (totalAmount >= 50 %% totalAmount < 100) {
    console.log('your get free natchos!');
} else if (totalAmount >= 100) {
    console.log('your get a free bottle of champagne');
} else {
    console.log('sorry, your get nothing free');
}