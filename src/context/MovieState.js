import { useState } from "react";

import MovieContext from "./MovieContext";

const MovieState = (props) => {

    const [movies, setMovies] = useState([])


    const fetchTrendingMovie = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_TRENDING_URL);
            const result = await response.json();
            console.log(result.results)
            setMovies(result.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    const searchMovie = async (input) => {
        try {
            const response = await fetch(process.env.REACT_APP_SEARCH_URL + "&query=" + input);
            const result = await response.json();
            console.log(result.results)
            setMovies(result.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <MovieContext.Provider value={{ movies: movies, fetchTrendingMovie: fetchTrendingMovie, searchMovie: searchMovie }}>
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieState;