for (thing = 0; thing <= 20; thing++) {
    if (thing % 2 === 0) {
      console.log(thing + ' this is even');
    } else {
      console.log(thing + ' this is uneven');
    }
}

for (thingy = 0; thingy <= 10; thingy++) {
  let awnser = thingy * 9;
  console.log(thingy + " * 9 = " + awnser);
}

function assignGrade(score) {
  if (score > 90) {
      return 'A';
  } else if (score > 80) {
      return 'B';
  } else if (score > 70) {
      return 'C';
  } else if (score > 65) {
      return 'D';
  } else {
      return 'F';
  }
}

for (var i = 80; i <= 100; i++) {
  console.log('For ' + i + ', you got a ' + assignGrade(i));
}