const reiLeao =
  "https://images-na.ssl-images-amazon.com/images/I/81G5DqNT2SL.jpg";
const liloAndStitch =
  "https://img.elo7.com.br/product/original/318CE28/lilo-e-stitch-poster-digital-decoracao-stitch.jpg";
const toyStory =
  "https://images-na.ssl-images-amazon.com/images/I/91GuxUoAATL.jpg";
const shrek =
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg";
const wallE =
  "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/WALL-E.jpg/250px-WALL-E.jpg";
const osIncriveis =
  "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/2/224020140608-uau-posters-filmes-infantis-animacao-os-incriveis-the-incredibles--2.jpg";

window.onload = function () {
  const input = document.querySelector("#image-input");
  const btnAdd = document.querySelector("#btn-add");
  const btnRemove = document.querySelector("#btn-remove");
  const moviesContainer = document.querySelector(".movies-container");

  function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(moviesContainer.innerHTML));
  }

  function addMovie() {
    const card = document.createElement("div");
    const image = document.createElement("img");
    image.src = input.value;

    card.appendChild(image);

    moviesContainer.appendChild(card);

    input.value = "";

    saveMovies();
  }
  btnAdd.addEventListener("click", addMovie);

  function selectMovie(event) {
    event.target.classList.toggle("selected");
    saveMovies();
  }
  moviesContainer.addEventListener("click", selectMovie);

  function removeMovie() {
    const selectedMovies = document.querySelectorAll(".selected");
    for (let index = 0; index < selectedMovies.length; index += 1) {
      selectedMovies[index].parentElement.remove();
    }

    saveMovies();
  }
  btnRemove.addEventListener("click", removeMovie);

  moviesContainer.innerHTML = JSON.parse(localStorage.getItem("movies"));
};
