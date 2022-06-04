const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterURL = document.querySelector(".userInputPosterURL");
const btn = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favoriteMovieTitle");

let titleInStorage = localStorage.getItem("title")
let URLInStorage = localStorage.getItem("imageURL")

if(titleInStorage && URLInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage =`linear-gradient(rgba(0, 128, 0, 0.650),rgba(0, 0, 0, 0.500)), url('${URLInStorage}')`

}


btn.addEventListener("click", () => {
    let movieTitleInput = movieTitle.value;
    let posterURLinput = moviePosterURL.value;
    localStorage.setItem("title",movieTitleInput);
    localStorage.setItem("imageURL",posterURLinput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(0, 128, 0, 0.650),rgba(0, 0, 0, 0.500)), url('${posterURLinput}')`;
    movieTitle.value = "";
    moviePosterURL.value= "";
});