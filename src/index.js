console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// on page load
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array

// function fetchImagesFromURL(){
//   fetch(imgUrl)
//   .then(response => response.json())
//   .then(json => addImagesToDOM(json))
// }
// function addImagesToDOM(images){
    //     const divImgContainer = document.querySelector('div#dog-image-container')
    //     images.message.forEach(image => {
        //         const img = document.createElement('img')
        //         img.src = image
        //         divImgContainer.appendChild(img)
        //     });
        // }
        
        // document.addEventListener('DOMContentLoaded', fetchImagesFromURL)
        function fetchBreedUrl(){
            fetch(breedUrl)
            .then(response => response.json())
            .then(json => addDogBreeds(json))
        }

function addDogBreeds(dogs){
    dogBreedAccess = dogs
    const dogBreedsUl = document.querySelector('ul#dog-breeds')
    for (const [key, value] of Object.entries(dogs.message)) {
        const liBreed = document.createElement('li')
        // document.addEventListener('click', changeColor(breed))
        liBreed.id = key
        liBreed.innerHTML = key
        dogBreedsUl.appendChild(liBreed)
        // respondToClick(key)
      }
}
document.addEventListener('DOMContentLoaded', fetchBreedUrl)

// function respondToClick(clickedBreed){
//     // const selectBreed = () => document.getElementById(clickedBreed)
//     const selectBreed = document.getElementById(clickedBreed)
//     console.log(selectBreed)
//     selectBreed.addEventListener('click', changeColor(selectBreed))
    
// }

// function changeColor(element){
//     element.style.color = 'blue'
// }