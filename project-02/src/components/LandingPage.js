import React from 'react'
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
import axios from 'axios'
import AddNewManga from './AddNewManga'
import NewMangaReview from './NewMangaReview'

export default class LandingPage extends React.Component {

    url = 'https://8888-hellorave-project2expre-sdcjkd5bg99.ws-us52.gitpod.io/'

    state = {
        data: [], // to be used to display manga cards
        active: 'add-new-manga',
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
            let response = await axios.post(this.url + 'add_new_manga', {
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


            </React.Fragment>

        )
    }
}