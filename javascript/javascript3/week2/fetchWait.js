
                            /* Fetching and waiting */

const moviesApi1 = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

                             /*  async => await */

async function movies(seconds) {
    try {
        const response = await fetch(moviesApi1);
        const movies = await response.json();
        setTimeout(() => {

            movies.forEach(movie => {
                console.log(movie.title);
            });
        }, seconds * 1000);

    }
    catch (err) {
        console.log('there is problem with movies api');
    }
}
movies(3);

                     /* Promise => .then */

movies1(3).then(() => {
    console.log('Movies fetched ')


})
    .catch((error) => {
        console.log('Error on fetching movies data ' + error);

    });

    
function movies1(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          
                fetch(moviesApi1)
                    .then((response) => response.json())
                    .then((movieData) => {
                        movieData.forEach((oneMovie) => {
                            console.log(oneMovie.rating);
                        })

                        resolve();
                    })
        }, seconds * 1000);
    })
}
