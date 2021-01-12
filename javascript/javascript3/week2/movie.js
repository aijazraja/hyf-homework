
const moviesApi = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

fetchMovies();
async function fetchMovies() {
    try {
        const resp = await fetch(moviesApi);
        const data = await resp.json();
       // console.log(data);
        const badMovies=data.filter((oneMovie)=>oneMovie.rating<4);
        const badMoviesAfter2000=badMovies.filter((oneMovie)=>oneMovie.year>=2000);
        console.log('Bad Movies(Rating<4)');
        console.log(badMovies);
        console.log('\nBad movies after 2000');
        console.log(badMoviesAfter2000);
    } catch {
        console.log('Some error on loading')
    }  
}