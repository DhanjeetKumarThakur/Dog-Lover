// DOG API
// https://dog.ceo/api/breeds/image/random
// .then - promises
// asynchronous programming

//stuff you don't have to wait for
//console.log('Run 1st')

const dogImageDiv = document.getElementById('dogImage')
//dogImageDiv.innerHTML = `<h1>Bas Kar</h1>`
const dogButton = document.getElementById('dogButton')

//This is asynchronous so you have to wait till it's responses get loaded
const getNewDog = () => {

  //stuff you have to wait for
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json()) //here we are converting the response to json 
    .then(json => {
      //console.log('Run 2nd', json)
      console.log(json)
      dogImageDiv.innerHTML = `<img src='${json.message}' alt ="Dog image" height="100%" width="100%" />`
    })

}
//console.log('Run 3rd')

dogButton.onclick = () => getNewDog()
getNewDog()