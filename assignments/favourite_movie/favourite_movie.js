const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if (operation=="remove") {
        movies.pop()
    }
    else {
        movies.push(movie)
    }
    return movies
}

module.exports = favouriteMovie;
