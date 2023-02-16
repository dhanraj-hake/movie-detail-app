import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import MovieContext from '../context/MovieContext';
import Movie from './Movie'


const MoviesList = () => {

    const [movies1, setMovies] = useState([]);

    const movieContext = useContext(MovieContext);

    const { movies, fetchTrendingMovie } = movieContext;

    
    useEffect(() => {
        fetchTrendingMovie();
    }, [])

    return (
        <div className='movie-list'>
            <Container className='my-4'>
                <div className="movie-grid">

                    {movies.map((movie) => {
                        return <Movie key={movie.id} movie={movie} />
                    })}


                </div>
                   <h1 style={{textAlign : "center"}}>
                        {movies.length===0 ? "No Move Found": ""}
                       
                       </h1>

            </Container>

        </div>
    )
}

export default MoviesList
