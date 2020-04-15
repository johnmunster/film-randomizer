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
        // Poster Image
        const posterImage = document.getElementById('poster-img');
        posterImage.src = randomFilms.posterImg;
        // Film Title
        const title = document.getElementById('film-title');
        title.textContent = randomFilms.filmTitle;
        // Release Date
        const release = document.getElementById('release-date');
        release.textContent = (`release date: ${randomFilms.releaseDate}`);
        // Director
        const director = document.getElementById('director-name');director.textContent = (`Directed by: ${randomFilms.director}`);
        // Genre
        const genre = document.getElementById('genre');genre.textContent = randomFilms.genre;

        //console.log(posterImage);

    });

    //data.films.forEach( film => console.log(film));

    let fantasyFilms = data.films.filter(function (genres) {
        return genres.certificate === '18'
    });
    console.log(fantasyFilms);

};

// Call function
getFilmCollection();