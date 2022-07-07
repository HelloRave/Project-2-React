import React from 'react'
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
import axios from 'axios'
import AddNewManga from './AddNewManga'

export default class LandingPage extends React.Component {

    state = {
        title: '',
        author: '',
        description: '',
        genre: [],
        firstPublished: '',
        volumes: '',
        chapters: '',
        serialization: '',
        ongoing: true,
        animeAdaptation: true,
        plot: '',
        mainCharacters: '',
        supportingCharacters: '',
        rating: '',
        allGenre: []
    }

    async componentDidMount() {
        let genreResponse = await axios.get('../json/genre.json')
        this.setState({
            allGenre: genreResponse.data
        })
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateNumberFormField = (event) => {
        this.setState({
            [event.target.name]: Number(event.target.value)
        })
    }

    updateBooleanFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value === 'true' ? true : false
        })
    }

    updateGenre = (event) => {
        if (this.state.genre.includes(event.target.value)) {
            let index = this.state.genre.indexOf(event.target.value)
            this.setState({
                genre: [...this.state.genre.slice(0, index), ...this.state.genre.slice(index + 1)]
            })
        } else {
            this.setState({
                genre: [...this.state.genre, event.target.value]
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant='dark' expand="sm">
                    <Container>
                        <Navbar.Brand href="#home" className='me-auto'>XXXX</Navbar.Brand>
                        <Form className="d-none d-sm-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="d-sm-none">
                                <Nav.Link href="#home" className='text-center'>Home</Nav.Link>
                                <Nav.Link href="#link" className='text-center'>Search</Nav.Link>
                                <Nav.Link href="#link" className='text-center'>Add New</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <AddNewManga title={this.state.title}
                             author={this.state.author}
                             description={this.state.description}
                             allGenre={this.state.allGenre}
                             genre={this.state.genre}
                             firstPublished={this.state.firstPublished}
                             volumes={this.state.volumes}
                             chapters={this.state.chapters}
                             serialization={this.state.serialization}
                             ongoing={this.state.ongoing}
                             animeAdaptation={this.state.animeAdaptation}
                             updateFormField={this.updateFormField}
                             updateGenre={this.updateGenre}
                             updateNumberFormField={this.updateNumberFormField}
                             updateBooleanFormField={this.updateBooleanFormField}/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <label className='form-label'>Plot</label>
                            <textarea className='form-control'
                                name='plot'
                                value={this.state.plot}
                                onChange={this.updateFormField}></textarea>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>Main Characters</label>
                            <textarea className='form-control'
                                name='mainCharacters'
                                value={this.state.mainCharacters}
                                onChange={this.updateFormField}></textarea>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>Supporting Characters</label>
                            <textarea className='form-control'
                                name='supportingCharacters'
                                value={this.state.supportingCharacters}
                                onChange={this.updateFormField}></textarea>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>Rating</label>
                            <input type='number'
                                className='form-control'
                                name='rating'
                                value={this.state.rating}
                                onChange={this.updateNumberFormField} />
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}