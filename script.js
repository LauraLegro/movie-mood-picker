const moviesList = {
  happy: [
    {
      title: "The Pursuit of Happyness",
      genre: "Biography/Drama",
      tagline:
        "Don't ever let somebody tell you, you can't do something. Not even me.",
    },
    {
      title: "Amélie",
      genre: "Romantic Comedy",
      tagline: "She'll change your life.",
    },
    {
      title: "La La Land",
      genre: "Musical/Romance",
      tagline: "A story about love, music, and the magic of dreams.",
    },
    {
      title: "The Intouchables",
      genre: "Comedy/Drama",
      tagline: "A true story of an unlikely friendship.",
    },
    {
      title: "Up",
      genre: "Animation/Adventure",
      tagline: "A heartwarming tale of adventure and family.",
    },
  ],
  sad: [
    {
      title: "Schindler's List",
      genre: "Biography/Drama",
      tagline: "A story about the Holocaust.",
    },
    {
      title: "The Green Mile",
      genre: "Fantasy/Drama",
      tagline: "A story about death and redemption.",
    },
    {
      title: "Requiem for a Dream",
      genre: "Drama",
      tagline: "A story about addiction and its consequences.",
    },
    {
      title: "Manchester by the Sea",
      genre: "Drama",
      tagline: "A story about loss and healing.",
    },
    {
      title: "Atonement",
      genre: "Romance/Drama",
      tagline: "A story about love and forgiveness.",
    },
  ],
  excited: [
    {
      title: "Inception",
      genre: "Sci-Fi/Thriller",
      tagline: "Your mind is the scene of the crime.",
    },
    {
      title: "Mad Max: Fury Road",
      genre: "Action/Adventure",
      tagline: "The ultimate post-apocalyptic chase.",
    },
    {
      title: "The Avengers",
      genre: "Action/Sci-Fi",
      tagline: "Earth's mightiest heroes will assemble.",
    },
    {
      title: "Guardians of the Galaxy",
      genre: "Action/Comedy",
      tagline:
        "A group of intergalactic criminals must work together to stop a powerful villain.",
    },
    {
      title: "Spider-Man: Homecoming",
      genre: "Action/Adventure",
      tagline:
        "Peter Parker balances his life as a teenager and as a superhero.",
    },
  ],
  relaxed: [
    {
      title: "Lost in Translation",
      genre: "Drama/Romance",
      tagline: "A story about connection and understanding.",
    },
    {
      title: "The Notebook",
      genre: "Drama/Romance",
      tagline: "A story about love and memory.",
    },
    {
      title: "The Fault in Our Stars",
      genre: "Drama/Romance",
      tagline: "A story about love and loss.",
    },
    {
      title: "The Help",
      genre: "Drama",
      tagline: "A story about courage and friendship.",
    },
    {
      title: "The Notebook",
      genre: "Drama/Romance",
      tagline: "A story about love and memory.",
    },
  ],
  thrilled: [
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      tagline: "A story about hope and redemption.",
    },
    {
      title: "The Godfather",
      genre: "Crime/Drama",
      tagline: "A story about power and corruption.",
    },
    {
      title: "The Godfather: Part II",
      genre: "Crime/Drama",
      tagline: "A story about legacy and family.",
    },
    {
      title: "The Dark Knight",
      genre: "Action/Crime",
      tagline: "A story about justice and chaos.",
    },
    {
      title: "Pulp Fiction",
      genre: "Crime/Drama",
      tagline: "A story about violence and redemption.",
    },
  ],
  chill: [
    {
      title: "Forrest Gump",
      genre: "Drama/Romance",
      tagline: "A story about life and love.",
    },
    {
      title: "The Big Lebowski",
      genre: "Comedy/Crime",
      tagline: "A story about a man who loves bowling.",
    },
    {
      title: "Ferris Bueller's Day Off",
      genre: "Comedy",
      tagline: "A story about a teenager who skips school.",
    },
    {
      title: "The Grand Budapest Hotel",
      genre: "Comedy/Drama",
      tagline: "A story about a legendary hotel and its staff.",
    },
    {
      title: "The Secret Life of Walter Mitty",
      genre: "Adventure/Comedy",
      tagline: "A story about a man who dreams of adventure.",
    },
  ],
};

const select = document.getElementById("mood");
const button = document.getElementById("pick-movie");
const result = document.getElementById("result");
const tagline = document.getElementById("tagline");

button.addEventListener("click", () => {
  const mood = select.value;

  if (moviesList[mood]) {
    const randomIndex = Math.floor(Math.random() * moviesList[mood].length);
    const pickMovie = moviesList[mood][randomIndex];

    const movieTitle = pickMovie.title;
    const movieGenre = pickMovie.genre;
    const movieTagline = pickMovie.tagline;

    document.getElementById("movie-title").textContent = movieTitle;
    document.getElementById("movie-genre").textContent = movieGenre;
    document.getElementById("movie-tagline").textContent = movieTagline;

    console.log(movieTitle);
    console.log(movieGenre);
  } else {
    result.textContent = "Please select a mood to get a movie recommendation.";
  }
});
