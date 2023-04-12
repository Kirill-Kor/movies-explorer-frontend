
export function moviesFilter(unfilteredMovies, keyword) {
    
    if (!unfilteredMovies && !keyword) return;
    
    if (unfilteredMovies && !keyword) return document.querySelector('.checkbox').firstChild.checked ? unfilteredMovies : unfilteredMovies.filter(movie => movie.duration >= 40);
    

    let filteredMovies = unfilteredMovies.filter((movie) => {
        const params = movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
            || movie.nameEN.toLowerCase().includes(keyword.toLowerCase())
            || movie.director.toLowerCase().includes(keyword.toLowerCase())
            || movie.country.toLowerCase().includes(keyword.toLowerCase());
        if (params) return movie;
    })

    if (!JSON.parse(localStorage.getItem('checked'))) {
        filteredMovies = filteredMovies.filter(movie => movie.duration >= 40)
    }
    return filteredMovies;
}
