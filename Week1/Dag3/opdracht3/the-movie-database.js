let movie = {
    title: 'Avengers Endgame', //dit moet een string zijn
    duration: 181, //dit moet een nummer zijn
    stars: ['robert downey jr. ', ' chris hemsworth ', ' scarlet johansen '] //dit moet een arrey of strings zijn
};

function moviePrint(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes, and stars: ' + movie.stars);
}

moviePrint(movie);