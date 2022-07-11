import React from 'react'
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
import axios from 'axios'
import AddNewManga from './AddNewManga'
import NewMangaReview from './NewMangaReview'
import DisplayManga from './DisplayManga'

export default class LandingPage extends React.Component {

    url = 'https://8888-hellorave-project2expre-gqp481jqux4.ws-us53.gitpod.io/'

    state = {
        data: [], // to be used to display manga cards
        newManga: {},
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
        allGenre: [],
        toReview: false,
        toAdd: false,
        beingUpdated: {},
        beingDeleted: {}
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

        let dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

        if (this.state.title &&
            this.state.author &&
            this.state.genre &&
            /^[1-9]\d*$/.test(this.state.chapters) &&
            dateRegex.test(this.state.firstPublished) &&
            this.state.serialization &&
            /^[1-9]\d*$/.test(this.state.volumes)) {

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
                newManga: newManga,
                active: '',
                toReview: true
            })
        } else {
            this.setState({
                toReview: true
            })
        }


    }

    backToFirstPage = () => {
        this.setState({
            active: 'add-new-manga'
        })
    }

    addNewManga = async () => {
        try {

            let authorResponse

            if (this.state.author) {
                authorResponse = await axios.get(this.url + 'find_author/' + this.state.author)
            }

            let response = await axios.post(this.url + 'add_new_manga', {
                'author_id': authorResponse.data[0] ? authorResponse.data[0]._id : '',
                'title': this.state.title,
                'author_name': this.state.author,
                'description': this.state.description,
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

            let lastAdded = {
                ...this.state.newManga,
                _id: response.data.insertedId,
                'plot': this.state.plot,
                'main_characters': this.state.mainCharacters,
                'supporting_characters': this.state.supportingCharacters,
                'rating': this.state.rating
            }

            this.setState({
                data: [...this.state.data, lastAdded],
                active: 'add-new-manga'
            })

            alert('Completed')
        } catch (e) {
            alert('Error')

            this.setState({
                toAdd: true
            })
        }
    }


    beingDeleted = (manga) => {
        this.setState({
            beingDeleted: manga
        })
    }

    mangaCardDisplay = (manga) => {
        if (manga._id === this.state.beingDeleted._id) {
            return (
                <React.Fragment>
                    <div id='card' className='container col-12 col-sm-6 col-md-4 p-0'>
                        <div>Manga being deleted: {manga.title}</div>
                        <button className='btn btn-primary btn-sm'
                                onClick={() => {
                                    this.setState({
                                        beingDeleted: {}
                                    })
                                }}>Back</button>
                        <button className='btn btn-danger btn-sm'>Confirm</button>
                    </div>
                </React.Fragment>
            )
        } else if (manga._id === this.state.beingUpdated._id) {
            return (
                <React.Fragment>
                    <div id='card' className='container col-12 col-sm-6 col-md-4 p-0'>
                        Manga being deleted: {manga.title}
                        <div className='row my-3'>
                            <div>
                                <label className='form-label'>Image</label>
                                <input type="text"
                                    className='form-control' />
                            </div>
                        </div>
                        <div className='row my-3'>
                            <div className='col-6'>
                                <label className='form-label'>Title</label>
                                <input type='text'
                                    className='form-control'
                                    name='title' />
                            </div>
                            <div className='col-6'>
                                <label className='form-label'>Author</label>
                                <input type='text'
                                    className='form-control'
                                    name='author' />
                            </div>
                        </div>
                        <button className='btn btn-primary btn-sm'
                                onClick={() => {
                                    this.setState({
                                        beingUpdated: {}
                                    })
                                }}>Back</button>
                        <button className='btn btn-danger btn-sm'>Confirm</button>
                    </div>
                </React.Fragment>
            )
        } else {
            return <DisplayManga obj={manga}
                beingUpdated={() => {
                    this.setState({
                        beingUpdated: manga
                    })
                }
                }
                beingDeleted={this.beingDeleted} />
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* NavBar */}
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

                {/* Manga Display */}
                <div className='container'>
                    <div className='row gy-4'>
                        {this.state.data.map((obj) => {
                            return (
                                this.mangaCardDisplay(obj)
                            )
                        })}
                    </div>
                </div>

                {/* Add New Manga */}
                {
                    this.state.active === 'add-new-manga' ?
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
                            toReview={this.state.toReview}
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
                            toAdd={this.state.toAdd}
                            updateFormField={this.updateFormField}
                            updateNumberFormField={this.updateNumberFormField}
                            backToFirstPage={this.backToFirstPage}
                            confirmAdd={this.addNewManga} />
                }

                {/* Filter */}
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