const calculateSupply = function (age, amountPerDay) {
    const maxAge = 100;
    const totalAmount = amountPerDay * 365 * (100 - age);
    let message = 'you will need ' + totalAmount + ' to last you until you turn 100 years old';
    console.log(message);
};

calculateSupply (50, 3)
calculateSupply (23, 7)
calculateSupply (44, 1)