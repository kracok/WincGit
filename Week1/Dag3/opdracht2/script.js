/*
bread slice
butter
cheese
bread slice
*/

//opdracht deel B

const cheaseBread = function () {
    console.log('bread slice');
    console.log('butter');
    console.log('cheese');
    console.log('bread slice');
}

cheaseBread ()

const makeSandwich = function (topping) { //hier declareer ik de functie
    console.log('bread slice');
    console.log(topping);
    console.log('butter');
    console.log('cheese');
    console.log('bread slice');
    console.log('here you go, a sandwich with...' + topping);
}

makeSandwich ('nutella') //hier call ik de functie
makeSandwich ('pindakaas') //hier call ik de alternatiefe functie

//opdracht deel C

const calculateDiscountedPrice = function (totalAmount, Discount) {
    return Math.round(totalAmount - Discount);
}
console.log(calculateDiscountedPrice (10, 5.5));

//opdracht deel D

const calculateDiscountedPriceAgain = function (totalAmount, Discount) {
    if(totalAmount < 25) {
        return Math.round(totalAmount);
    } else {
        return Math.round(totalAmount - Discount);
    }
}
console.log(calculateDiscountedPriceAgain (10, 5.5));