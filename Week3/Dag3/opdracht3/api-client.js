const API_KEY = '12402426171b102702cb08b619b7be7b'
const getData = async function(){
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    try{
        const res = await fetch(apiUrl, {method: 'GET'});
        console.log('resolution log', res);
        const data = await res.json();
        console.log('data log', data);
    } catch (errors) {
        console.log('this errorreded', errors);
    }
};