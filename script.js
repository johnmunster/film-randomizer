const button = document.getElementById('random-btn');

// Getting the json file
async function getFilmCollection() {
    const result = await fetch('./collection.json');
    const data = await result.json();
    console.log(data);



        button.addEventListener('click', function() {
            let randomFilms = data.films[Math.floor(Math.random() * data.films.length)];
            const posterImage = document.getElementById('poster-img');
            posterImage
            const title = document.getElementById('film-title');
            title.textContent = randomFilms.filmTitle;
            const release = document.getElementById('release-date');
            release.textContent = (`release date: ${randomFilms.releaseDate}`);
            const director = document.getElementById('director-name');director.textContent = (`Directed by: ${randomFilms.Director}`);
            const genre = document.getElementById('genre');genre.textContent = randomFilms.Genre;
        });


};

getFilmCollection();