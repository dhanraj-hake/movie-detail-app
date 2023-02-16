import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MovieContext from '../context/MovieContext';



import Logo from "../img/logo.png"


const NavBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const movieContext = useContext(MovieContext);

    const { searchMovie } = movieContext;

    const handalSubmit = (event)=>{
        event.preventDefault();
        console.log(searchInput);
        searchMovie(searchInput);
        
    }

    const handalChange = (event)=>{
        setSearchInput(event.target.value);
    }

    return (
        <Navbar bg="dark" expand="lg" className='fixed-top'>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={Logo} alt="" width={"45px"}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex" onSubmit={handalSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Search Movie"
                            className="me-2"
                            aria-label="Search"
                            onChange={handalChange}
                        />
                        <Button onClick={handalSubmit} variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
