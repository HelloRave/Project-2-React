import React from 'react'
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'

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
        rating: ''
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
        if (this.state.genre.includes(event.target.value)){
            let index = this.state.genre.indexOf(event.target.value)
            this.setState({
                genre: [...this.state.genre.slice(0,index), ...this.state.genre.slice(index + 1)]
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
                <div className='container'>
                    <div className='row'>
                        <div>
                            <label>Image</label>
                            <input type="file" accept="image/*" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <label className='form-label'>Title</label>
                            <input type='text' 
                                   className='form-control' 
                                   name='title' 
                                   value={this.state.title}
                                   onChange={this.updateFormField}/>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Author</label>
                            <input type='text' 
                                   className='form-control'
                                   name='author' 
                                   value={this.state.author}
                                   onChange={this.updateFormField} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <label className='form-label'>Description</label>
                            <textarea className='form-control'
                                      name='description' 
                                      value={this.state.description}
                                      onChange={this.updateFormField} ></textarea>
                        </div>
                        <div className='col-6'>
                            <p className='m-0'>Genre</p>

                            <input type='checkbox' 
                                   className='form-check-input' 
                                   name='genre'
                                   value='action'
                                   checked={this.state.genre.includes('action')}
                                   onChange={this.updateGenre} />
                            <label className='form-check-label'>Action</label>

                            <input type='checkbox' 
                                   className='form-check-input' 
                                   name='genre'
                                   value='adventure'
                                   checked={this.state.genre.includes('adventure')}
                                   onChange={this.updateGenre} />
                            <label className='form-check-label'>Adventure</label>

                            <input type='checkbox' className='form-check-input' name='' />
                            <label className='form-check-label'>Comedy</label>

                            <input type='checkbox' className='form-check-input' name='' />
                            <label className='form-check-label'>Drama</label>

                            <input type='checkbox' className='form-check-input' name='' />
                            <label className='form-check-label'>Fantasy</label>
                            
                            <input type='checkbox' className='form-check-input' name='' />
                            <label className='form-check-label'>Horror</label>
                            
                            <input type='checkbox' className='form-check-input' name='' />
                            <label className='form-check-label'>Mystery</label>
                            
                            <input type='checkbox' className='form-check-input' name='' />
                            <label className='form-check-label'>Sports</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label className='form-label'>First-published</label>
                            <input type='text' 
                                   className='form-control'
                                   name='firstPublished' 
                                   value={this.state.firstPublished}
                                   onChange={this.updateFormField}/>
                        </div>
                        <div className='col-4'>
                            <label className='form-label'>Volumes</label>
                            <input type='number' 
                                   className='form-control'
                                   name='volumes' 
                                   value={this.state.volumes}
                                   onChange={this.updateNumberFormField}/>
                        </div>
                        <div className='col-4'>
                            <label className='form-label'>Chapters</label>
                            <input type='number' 
                                   className='form-control'
                                   name='chapters' 
                                   value={this.state.chapters}
                                   onChange={this.updateNumberFormField} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label className='form-label'>Serialization</label>
                            <input type='text' 
                                   className='form-control'
                                   name='serialization' 
                                   value={this.state.serialization}
                                   onChange={this.updateFormField} />
                        </div>
                        <div className='col-4'>
                            <p>Ongoing</p>

                            <input type='radio' 
                                   name='ongoing' 
                                   className='form-check-input'
                                   value='true'
                                   checked={this.state.ongoing === true}
                                   onChange={this.updateBooleanFormField} />
                            <label className='form-check-label'>Yes</label>

                            <input type='radio' 
                                   name='ongoing' 
                                   className='form-check-input'
                                   value='false'
                                   checked={this.state.ongoing === false}
                                   onChange={this.updateBooleanFormField} />
                            <label className='form-check-label'>No</label>
                        </div>
                        <div className='col-4'>
                            <p>Anime Adaptation</p>

                            <input type='radio' 
                                   name='animeAdaptation' 
                                   className='form-check-input'
                                   value='true'
                                   checked={this.state.animeAdaptation === true}
                                   onChange={this.updateBooleanFormField} />
                            <label>Yes</label>

                            <input type='radio' 
                                   name='animeAdaptation' 
                                   className='form-check-input' 
                                   value='false'
                                   checked={this.state.animeAdaptation === false}
                                   onChange={this.updateBooleanFormField}/>
                            <label>No</label>
                        </div>
                    </div>
                </div>
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
                                   onChange={this.updateNumberFormField}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}