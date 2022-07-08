import React from 'react'
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
import axios from 'axios'
import AddNewManga from './AddNewManga'
import NewMangaReview from './NewMangaReview'

export default class LandingPage extends React.Component {

    url = 'https://8888-hellorave-project2expre-gj9n7el4lj3.ws-us53.gitpod.io/'
    
    state = {
        data: [], // to be used to display manga cards
        active: 'add-new-manga',
        title: '',
        author_id: '',
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
        let genreRequest = await axios.get('../json/genre.json')
        let allMangaRequest = await axios.get(this.url)

        let [genreResponse, allMangaResponse] = await axios.all([genreRequest, allMangaRequest])

        this.setState({
            data: allMangaResponse.data,
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

    continueToReview = async () => {
        const newManga = {
            'title': this.state.title,
            'author_name': this.state.author,
            'genre': this.state.genre,
            'anime_adaptation': this.state.animeAdaptation,
            'chapters': this.state.chapters,
            'ongoing': this.state.ongoing,
            'published': this.state.firstPublished,
            'serialization': this.state.serialization,
            'volumes': this.state.volumes,
        }

        await this.setState({
            data: [...this.state.data, newManga],
            active: ''
        })

        console.log(this.state.data[this.state.data.length - 1])
    }

    addNewManga = async () => {
        try {

            let authorResponse = await axios.get(this.url + 'find_author/' + this.state.author)
            let response = await axios.post(this.url + 'add_new_manga', {
                'author_id': authorResponse.data[0]._id ? authorResponse.data[0]._id : '',
                'title': this.state.title,
                'author_name': this.state.author,
                'genre': this.state.genre,
                'anime_adaptation': this.state.animeAdaptation,
                'chapters': this.state.chapters,
                'ongoing': this.state.ongoing,
                'published': this.state.firstPublished,
                'serialization': this.state.serialization,
                'volumes': this.state.volumes,
                'plot': this.state.plot,
                'main_characters': this.state.mainCharacters,
                'supporting_characters': this.state.supportingCharacters,
                'rating': this.state.rating
            })

            let lastIndex = this.state.data.length - 1
            let lastAdded = this.state.data[lastIndex]
            lastAdded = {
                ...lastAdded,
                _id: response.data.insertedId,
                'plot': this.state.plot,
                'main_characters': this.state.mainCharacters,
                'supporting_characters': this.state.supportingCharacters,
                'rating': this.state.rating
            }

            this.setState({
                data: [...this.state.data.slice(0, lastIndex), lastAdded]
            })

            alert('Completed')
        } catch (e) {
            alert('Error')
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
                <div>
                    {this.state.data.map((obj) => {
                        return (
                            <React.Fragment key={obj._id}>
                                <p>{obj.title}</p>
                                <p>{obj.published}</p>
                            </React.Fragment>

                        )
                    })}
                </div>
                {this.state.active === 'add-new-manga' ?
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
                        updateBooleanFormField={this.updateBooleanFormField}
                        continueToReview={this.continueToReview} />

                    :

                    <NewMangaReview plot={this.state.plot}
                        mainCharacters={this.state.mainCharacters}
                        supportingCharacters={this.state.supportingCharacters}
                        rating={this.state.rating}
                        updateFormField={this.updateFormField}
                        updateNumberFormField={this.updateNumberFormField}
                        confirmAdd={this.addNewManga} />
                }

                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <label className='form-label'>Title</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Author</label>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='form-label'>Genre</label>
                            <Form.Select aria-label="Default select example">
                                <option>-- Select Genre --</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className='col'>
                            <label className='form-label'>Ongoing</label>
                            <Form.Select aria-label="Default select example">
                                <option>-- Select --</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </Form.Select>
                        </div>
                        <div className='col'>
                            <label className='form-label'>Volumes</label>
                            <Form.Select aria-label="Default select example">
                                <option>-- Select Genre --</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className='col'>
                            <label className='form-label'>Chapters</label>
                            <Form.Select aria-label="Default select example">
                                <option>-- Select Genre --</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className='col'>
                            <label className='form-label'>Rating</label>
                            <Form.Select aria-label="Default select example">
                                <option>-- Select Genre --</option>
                                <option value="1">0 - 3</option>
                                <option value="2">4 - 6</option>
                                <option value="3">7 - 10</option>
                            </Form.Select>
                        </div>
                    </div>
                    <button className='btn btn-primary'>Search</button>
                </div>


            </React.Fragment>

        )
    }
}