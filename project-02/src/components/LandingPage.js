import React from 'react'
import axios from 'axios'
import AddNewManga from './AddNewManga'
import NewMangaReview from './NewMangaReview'
import DisplayManga from './DisplayManga'
import UpdateManga from './UpdateManga'
import SearchManga from './SearchManga'
import Review from './Review'


export default class LandingPage extends React.Component {

    url = 'https://8888-hellorave-project2expre-phg10y0wbqg.ws-us54.gitpod.io/'

    state = {
        data: [], // to be used to display manga cards
        newManga: {},
        active: 'display',
        url: '',
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
        updatedUrl: '',
        updatedTitle: '',
        updatedAuthor: '',
        options: [],
        selectedValue: [],
        updatedDescription: '',
        updatedFirstPublished: '',
        updatedVolumes: '',
        updatedChapters: '',
        updatedSerialization: '',
        updatedOngoing: '',
        updatedAnimeAdaptation: '',
        toUpdate: false, 
        beingDeleted: {},
        filteredData: [],
        findTitle: '',
        findAuthor: '',
        findVolume: '',
        findChapter: '',
        findRating: '',
        findOngoing: '',
        findGenre: [],
        addViewReview: [],
        reviewData: [],
        reviewPage: 'to-add',
        reviewPlot: '',
        reviewMainCharacters: '',
        reviewSupportingCharacters: '',
        reviewRating: '',
        toAddReview: false
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
        if (this.state[event.target.name].includes(event.target.value)) {
            let index = this.state[event.target.name].indexOf(event.target.value)
            this.setState({
                [event.target.name]: [...this.state[event.target.name].slice(0, index), ...this.state[event.target.name].slice(index + 1)]
            })
        } else {
            this.setState({
                [event.target.name]: [...this.state[event.target.name], event.target.value]
            })
        }
    }

    changePage = (page) => {
        this.setState({
            active: page
        })
    }

    continueToReview = async () => {

        let dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        let urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

        if (urlRegex.test(this.state.url) &&
            this.state.title &&
            this.state.author &&
            this.state.description &&
            this.state.genre &&
            /^[1-9]\d*$/.test(this.state.chapters) &&
            dateRegex.test(this.state.firstPublished) &&
            this.state.serialization &&
            /^[1-9]\d*$/.test(this.state.volumes)) {

            const newManga = {
                'url': this.state.url,
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
            }

            await this.setState({
                newManga: newManga,
                active: 'continue-to-review',
                toReview: true
            })
        } else {
            this.setState({
                toReview: true
            })
        }


    }

    addNewManga = async () => {
        try {

            if (this.state.plot &&
                this.state.mainCharacters &&
                this.state.supportingCharacters &&
                this.state.rating) {

                let authorResponse

                if (this.state.author) {
                    authorResponse = await axios.get(this.url + 'find_author/' + this.state.author)
                }

                let response = await axios.post(this.url + 'add_new_manga', {
                    'author_id': authorResponse.data[0] ? authorResponse.data[0]._id : '',
                    'url': this.state.url,
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
                    active: 'display',
                    toAdd: true
                })

                alert('Completed')
            }

            else {
                this.setState({
                    toAdd: true
                })
                alert('Empty fields')
            }
        } catch (e) {
            alert('Error')
        }
    }

    onSelect = (selectedList) => {
        this.setState({
            selectedValue: selectedList
        })
    }

    onRemove = (selectedList) => {
        this.setState({
            selectedValue: selectedList
        })
    }

    confirmUpdate = async () => {
        try {

            let dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
            let urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

            if (urlRegex.test(this.state.updatedUrl) &&
                this.state.updatedTitle &&
                this.state.updatedAuthor &&
                this.state.updatedDescription &&
                this.state.selectedValue[0] &&
                /^[1-9]\d*$/.test(this.state.updatedChapters) &&
                dateRegex.test(this.state.updatedFirstPublished) &&
                this.state.updatedSerialization &&
                /^[1-9]\d*$/.test(this.state.updatedVolumes)) {

                await axios.patch(this.url + 'update_manga/' + this.state.beingUpdated._id, {
                    'url': this.state.updatedUrl,
                    'title': this.state.updatedTitle,
                    'author_name': this.state.updatedAuthor,
                    'description': this.state.updatedDescription,
                    'genre': this.state.selectedValue.map((obj) => obj.name),
                    'anime_adaptation': this.state.updatedAnimeAdaptation,
                    'chapters': this.state.updatedChapters,
                    'ongoing': this.state.updatedOngoing,
                    'published': this.state.updatedFirstPublished,
                    'serialization': this.state.updatedSerialization,
                    'volumes': this.state.updatedVolumes,
                })

                let index = this.state.data.findIndex((manga) => {
                    return manga._id === this.state.beingUpdated._id
                })

                let updatedManga = {
                    '_id': this.state.beingUpdated._id,
                    'url': this.state.updatedUrl,
                    'title': this.state.updatedTitle,
                    'author':{
                        '_id': this.state.beingUpdated.author._id,
                        'name': this.state.updatedAuthor
                    },
                    'description': this.state.updatedDescription,
                    'genre': this.state.selectedValue.map((obj) => obj.name),
                    'anime_adaptation': this.state.updatedAnimeAdaptation,
                    'chapters': this.state.updatedChapters,
                    'ongoing': this.state.updatedOngoing,
                    'published': this.state.updatedFirstPublished,
                    'serialization': this.state.updatedSerialization,
                    'volumes': this.state.updatedVolumes,
                    'reviews': this.state.beingUpdated.reviews
                }

                this.setState({
                    data: [
                        ...this.state.data.slice(0, index),
                        updatedManga,
                        ...this.state.data.slice(index + 1)
                    ],
                    active: 'display',
                    toUpdate: true
                })

                alert('Completed')
            }

            else {
                this.setState({
                    toUpdate: true
                })
                alert('Missing fields')
            }
        } catch (e) {
            alert('Error')
        }
    }

    confirmDelete = async () => {
        try {

            await axios.delete(this.url + 'delete_manga/' + this.state.beingDeleted._id)

            let index = this.state.data.findIndex((manga) => {
                return manga._id === this.state.beingDeleted._id
            })

            this.setState({
                data: [...this.state.data.slice(0, index), ...this.state.data.slice(index + 1)]
            })

        } catch (e) {
            alert('Error')
        }
    }

    searchManga = async () => {

        try {
            let response = await axios.get(this.url + 'find_manga/', {
                params: {
                    "author_name": this.state.findAuthor,
                    "title": this.state.findTitle,
                    "ongoing": this.state.findOngoing,
                    "genre": this.state.findGenre,
                    "min_rating": this.state.findRating,
                    "max_volume": this.state.findVolume.split('-')[1],
                    "min_volume": this.state.findVolume.split('-')[0],
                    "max_chapter": this.state.findChapter.split('-')[1],
                    "min_chapter": this.state.findChapter.split('-')[0]
                }
            })

            this.setState({
                filteredData: response.data
            })

            alert('Completed')
        } catch (e) {
            alert('Error')
        }

    }

    viewReview = async (manga) => {
        try {

            await this.setState({
                addViewReview: manga
            })

            let reviewResponse = await axios.get(this.url + 'find_review/' + this.state.addViewReview._id)

            this.setState({
                reviewData: reviewResponse.data,
                active: 'review'
            })
        } catch (e) {
            alert('Error')
        }

    }

    confirmAddReview = async () => {
        try {

            if (this.state.plot &&
                this.state.mainCharacters &&
                this.state.supportingCharacters &&
                this.state.rating) {

                let response = await axios.post(this.url + 'add_review/' + this.state.addViewReview._id, {
                    'title': this.state.addViewReview.title,
                    'plot': this.state.reviewPlot,
                    'main_characters': this.state.reviewMainCharacters,
                    'supporting_characters': this.state.reviewSupportingCharacters,
                    'rating': Number(this.state.reviewRating)
                })

                let addedReview = {
                    '_id': response.data.insertedId, //response.data has no insertedId
                    'manga': {
                        '_id': this.state.addViewReview._id,
                        'title': this.state.addViewReview.title
                    },
                    'plot': this.state.reviewPlot,
                    'main_characters': this.state.reviewMainCharacters,
                    'supporting_characters': this.state.reviewSupportingCharacters,
                    'rating': Number(this.state.reviewRating)
                }

                let ratingOnlyArray = this.state.reviewData.map((obj) => {
                    return obj.rating
                })

                let averageRating = (ratingOnlyArray.reduce((total, current) => { return total + current }, 0) + Number(this.state.reviewRating)) / (ratingOnlyArray.length + 1)

                let index = this.state.data.findIndex((data) => { return data._id === this.state.addViewReview._id })

                let currentManga = this.state.data[index]

                currentManga['average_rating'] = averageRating

                this.setState({
                    reviewData: [...this.state.reviewData, addedReview],
                    addViewReview: { ...this.state.addViewReview, 'average_rating': averageRating },
                    data: [
                        ...this.state.data.slice(0, index),
                        currentManga,
                        ...this.state.data.slice(index + 1)
                    ],
                    toAddReview: true
                })

                alert('Completed')

            }

            else {
                this.setState({
                    toAddReview: true
                })
                alert('Missing fields')
            }
        } catch (e) {
            alert('Error')
        }
    }

    renderPage = () => {
        if (this.state.active === 'display') {
            return (
                <div className='container'>
                    <div className='row g-4'>
                        {this.state.data.map((obj) => {
                            return (
                                <DisplayManga obj={obj}
                                    viewReview={() => { this.viewReview(obj) }}
                                    beingUpdated={() => {
                                        this.setState({
                                            active: 'update-manga',
                                            beingUpdated: obj,
                                            updatedUrl: obj.url,
                                            updatedTitle: obj.title,
                                            updatedAuthor: obj.author.name,
                                            options: this.state.allGenre.map((obj) => {
                                                return { name: obj.value, id: obj.value }
                                            }),
                                            selectedValue: obj.genre.map((str) => {
                                                return { name: str, id: str }
                                            }),
                                            updatedFirstPublished: obj.published,
                                            updatedVolumes: obj.volumes,
                                            updatedChapters: obj.chapters,
                                            updatedSerialization: obj.serialization,
                                            updatedOngoing: obj.ongoing,
                                            updatedAnimeAdaptation: obj.anime_adaptation
                                        })
                                    }
                                    }
                                    beingDeleted={() => {
                                        this.setState({
                                            beingDeleted: obj
                                        })
                                    }
                                    }
                                    confirmDelete={this.confirmDelete} />
                            )
                        })}
                    </div>
                </div>
            )
        }
        else if (this.state.active === 'search') {
            return (
                <React.Fragment>
                    <SearchManga findTitle={this.state.findTitle}
                        findAuthor={this.state.findAuthor}
                        findVolume={this.state.findVolume}
                        findChapter={this.state.findChapter}
                        findRating={this.state.findRating}
                        findOngoing={this.state.findOngoing}
                        findGenre={this.state.findGenre}
                        allGenre={this.state.allGenre}
                        updateFormField={this.updateFormField}
                        updateBooleanFormField={this.updateBooleanFormField}
                        updateGenre={this.updateGenre}
                        searchManga={this.searchManga} />
                    <div className='container'>
                        <div className='row g-4'>
                            {this.state.filteredData.map((obj) => {
                                return (
                                    <DisplayManga obj={obj}
                                        viewReview={() => { this.viewReview(obj) }}
                                        beingUpdated={() => {
                                            this.setState({
                                                active: 'update-manga',
                                                beingUpdated: obj,
                                                updatedUrl: obj.url,
                                                updatedTitle: obj.title,
                                                updatedAuthor: obj.author.name,
                                                options: this.state.allGenre.map((obj) => {
                                                    return { name: obj.value, id: obj.value }
                                                }),
                                                selectedValue: obj.genre.map((str) => {
                                                    return { name: str, id: str }
                                                }),
                                                updatedFirstPublished: obj.published,
                                                updatedVolumes: obj.volumes,
                                                updatedChapters: obj.chapters,
                                                updatedSerialization: obj.serialization,
                                                updatedOngoing: obj.ongoing,
                                                updatedAnimeAdaptation: obj.anime_adaptation
                                            })
                                        }
                                        }
                                        beingDeleted={() => {
                                            this.setState({
                                                beingDeleted: obj
                                            })
                                        }
                                        }
                                        confirmDelete={this.confirmDelete} />
                                )
                            })}
                        </div>
                    </div>
                </React.Fragment>

            )
        }
        else if (this.state.active === 'update-manga') {
            return (<UpdateManga key={this.state.beingUpdated._id}
                beingUpdated={this.state.beingUpdated}
                updatedUrl={this.state.updatedUrl}
                updatedTitle={this.state.updatedTitle}
                updatedAuthor={this.state.updatedAuthor}
                options={this.state.options}
                selectedValue={this.state.selectedValue}
                avoidHighlightFirstOption={true}
                hidePlaceholder={true}
                onSelect={this.onSelect}
                onRemove={this.onRemove}
                updatedDescription={this.state.updatedDescription}
                updatedFirstPublished={this.state.updatedFirstPublished}
                updatedVolumes={this.state.updatedVolumes}
                updatedChapters={this.state.updatedChapters}
                updatedSerialization={this.state.updatedSerialization}
                updatedOngoing={this.state.updatedOngoing}
                updatedAnimeAdaptation={this.state.updatedAnimeAdaptation}
                toUpdate={this.state.toUpdate}
                updateNumberFormField={this.updateNumberFormField}
                updateFormField={this.updateFormField}
                updateBooleanFormField={this.updateBooleanFormField}
                back={() => {
                    this.setState({
                        active: 'display'
                    })
                }}
                confirmUpdate={this.confirmUpdate} />
            )
        }
        else if (this.state.active === 'add-new-manga') {
            return (
                <AddNewManga url={this.state.url}
                    title={this.state.title}
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
            )
        }
        else if (this.state.active === 'continue-to-review') {
            return (
                <NewMangaReview plot={this.state.plot}
                    mainCharacters={this.state.mainCharacters}
                    supportingCharacters={this.state.supportingCharacters}
                    rating={this.state.rating}
                    toAdd={this.state.toAdd}
                    updateFormField={this.updateFormField}
                    updateNumberFormField={this.updateNumberFormField}
                    backToFirstPage={() => {
                        this.setState({
                            active: 'add-new-manga'
                        })
                    }}
                    confirmAdd={this.addNewManga} />
            )
        }
        else if (this.state.active === 'review') {
            return (
                <Review reviewPlot={this.state.reviewPlot}
                    reviewMainCharacters={this.state.reviewMainCharacters}
                    reviewSupportingCharacters={this.state.reviewSupportingCharacters}
                    reviewRating={this.state.reviewRating}
                    toAddReview={this.state.toAddReview}
                    updateFormField={this.updateFormField}
                    backToMain={() => {
                        this.setState({
                            active: 'display',
                            reviewPage: 'to-add'
                        })
                    }}
                    addViewReview={this.state.addViewReview}
                    reviewData={this.state.reviewData}
                    reviewPage={this.state.reviewPage}
                    addReview={() => {
                        this.setState({
                            reviewPage: ''
                        })
                    }}
                    backToAddReview={() => {
                        this.setState({
                            reviewPage: 'to-add'
                        })
                    }}
                    confirmAddReview={this.confirmAddReview} />
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* NavBar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" onClick={() => this.changePage('display')}>Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className={this.state.active === 'display' ? 'nav-link active text-center' : 'nav-link text-center'}
                                        href="#"
                                        onClick={() => this.changePage('display')}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={this.state.active === 'search' ? 'nav-link active text-center' : 'nav-link text-center'}
                                        href="#"
                                        onClick={() => this.changePage('search')}>Search</a>
                                </li>
                                <li className="nav-item">
                                    <a className={this.state.active === 'add-new-manga' ? 'nav-link active text-center' : 'nav-link text-center'} href="#" onClick={() => this.changePage('add-new-manga')}>Add New</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className='container-fluid my-4'>
                    {this.renderPage()}
                </div>

            </React.Fragment>

        )
    }
}