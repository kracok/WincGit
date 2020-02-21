const data = fetch('https://wincacademydatabase.firebaseio.com/tim/tasks.json', {method: 'GET'})
.then(res => res.json())
.then(res => console.log('before, the raw data', res))
.catch(error => console.log('something went wrong', error))

let tasks = Object.keys(data).map(key => ({
  id: key,
  description: result[key].description,
  done: result[key].done
}));
console.log("After, the array", tasks);