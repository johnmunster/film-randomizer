'use strict';

const button = document.getElementById('random-btn');

// Getting the json file
async function getFilmCollection() {
    const result = await fetch('./collection.json');
    const data = await result.json();
    //console.log(data);

    // Random Button
    button.addEventListener('click', function() {
        // Randomise Films
        let randomFilms = data.films[Math.floor(Math.random() * data.films.length)];
        //console.log(randomFilms);
        // Poster Image
        const posterImage = document.getElementById('poster-img');
        posterImage.src = randomFilms.posterImg;
        // Film Title
        const title = document.getElementById('film-title');
        title.textContent = (`${randomFilms.filmTitle} (${randomFilms.releaseDate})`);
        // Release Date
        //const release = document.getElementById('release-date');
        //release.textContent = (`release date: ${randomFilms.releaseDate}`);
        // Director
        const director = document.getElementById('director-name');director.textContent = (`Directed by: ${randomFilms.director}`);
        // Genre
        const genre = document.getElementById('genre');genre.textContent = randomFilms.genre;

        //console.log(posterImage);

    });

    for (let i = 0; i < data.films.length; i++) {
        let genres = data.films[i].genre;
        console.log(typeof genres);
    }

    for (let i = 0; i < data.films.length; i++) {
        let directors = data.films[i].director;
        console.log(typeof directors);
    }
};

// Call function
getFilmCollection();