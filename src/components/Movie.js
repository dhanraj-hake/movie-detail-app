import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Movie = (props) => {

    const movie = props.movie;

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handalShow = () => {
        setShow(true);
    }

    return (
        <>
            <Card style={{ width: '20rem', height: "22rem", padding: "0 0 0.6rem 0", position: "relative" }}>
                <Card.Img variant="top" src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`: `https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg`} />
                <Card.Body>
                    <Card.Title className='text-center' >{movie.title ? movie.title.slice(0, 20) : movie.name ? movie.name.slice(0, 20) : ""}</Card.Title>
                    <Card.Text>
                        {movie.overview? movie.overview.slice(0, 75): ""}
                    </Card.Text>
                    <div className="center" style={{ textAlign: "center", position: "absolute", bottom: "8px", width: "90%" }}>
                        <Button onClick={handalShow} variant="primary">View More</Button>
                    </div>

                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size="lg" >
                <Modal.Header closeButton>
                    <Modal.Title>{movie.title ? movie.title : movie.name} <span style={{ color: "rgba(0, 0, 0, 0.567)" }}> ({movie.release_date})</span> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <img className='modal-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" width="95%" />
                        </div>
                        <div className='modal-desc'>
                            <p>

                                {movie.overview}
                            </p>
                        </div>

                        <div className="numbers">
                            
                            <div className="item popularity">
                                <span>Popularity</span>
                                <span>{movie.popularity}</span>
                            </div>

                            
                            <div className="item popularity">
                                <span>Average Vote</span>
                                <span>{movie.vote_average}</span>
                            </div>


                            
                            <div className="item popularity">
                                <span>Vote Count </span>
                                <span>{movie.vote_count}</span>
                            </div>
                            
                            <div className="item popularity">
                                <span>Release Date</span>
                                <span>{movie.release_date}</span>
                            </div>


                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Movie
