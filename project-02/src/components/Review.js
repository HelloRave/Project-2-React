import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Review(props) {
    return (
        <React.Fragment>
            <div className='container p-0 mb-3'>
                <button className='btn btn-primary btn-sm'
                    onClick={props.backToMain}>
                    <FontAwesomeIcon icon={faLeftLong} />
                </button>
            </div>

            <div className='container text-center p-1'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-4'>
                        <img src={props.addViewReview.url} alt='manga-cover' />
                    </div>
                    <div className='col-12 col-md-8'>
                        <p className='reviews-text mb-0'>Reviews for: </p>
                        <p className='reviews-title-text'>
                            {props.addViewReview.title}
                        </p>
                    </div>
                    <div>
                        {props.addViewReview.average_rating}
                    </div>
                </div>
            </div>
            <div>
                {props.reviewData[0] ?
                    props.reviewData.map((obj) => {
                        return (
                            <React.Fragment>
                                <div className='container border my-3 p-4'>
                                    <div className='mb-3'>
                                        Rating: <tab></tab>
                                        {[...Array(obj.rating)].map((element, index) => {
                                            return <FontAwesomeIcon icon={faStar} key={index} className='rating-star' />
                                        })}
                                        {[...Array(5 - obj.rating)].map((element, index) => {
                                            return <FontAwesomeIcon icon={faStar} key={index} className='faded-star' />
                                        })}
                                    </div>
                                    <div className='mb-3'>
                                        Plot: <tab></tab> {obj.plot}
                                    </div>
                                    <div className='mb-3'>
                                        Main Characters: <tab></tab> {obj.main_characters}
                                    </div>
                                    <div>
                                        Supporting Characters: <tab></tab> {obj.supporting_characters}
                                    </div>
                                </div>

                            </React.Fragment>
                        )
                    })

                    :

                    <div className='container'>
                        No Reviews Available, add new!
                    </div>
                }
            </div>

            {props.reviewPage === 'to-add' ?
                <div className='container d-flex flex-column justify-content-center align-items-center p-4'
                    onClick={props.addReview}>
                    <div className='review-add-div d-flex justify-content-center align-items-center p-3'>
                        <FontAwesomeIcon icon={faPlus} className='review-add-icon' />
                    </div>
                    <div className='mt-3'>
                        Add New Review
                    </div>
                </div>

                :

                <div className='container border p-4'>
                    <div className='row gy-3'>
                        <div className='col-12'>
                            <label className='form-label'>Plot</label>
                            <textarea className='form-control'
                                name='reviewPlot'
                                value={props.reviewPlot}
                                onChange={props.updateFormField}></textarea>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>Main Characters</label>
                            <textarea className='form-control'
                                name='reviewMainCharacters'
                                value={props.reviewMainCharacters}
                                onChange={props.updateFormField}></textarea>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>Supporting Characters</label>
                            <textarea className='form-control'
                                name='reviewSupportingCharacters'
                                value={props.reviewSupportingCharacters}
                                onChange={props.updateFormField}></textarea>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <label className='form-label'>Rating</label>
                            <select class="form-select"
                                name='reviewRating'
                                value={props.reviewRating}
                                onChange={props.updateFormField}>
                                <option value="">Open this select menu</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-danger me-2'
                                onClick={props.backToAddReview}>Back</button>
                            <button className='btn btn-primary'
                                onClick={props.confirmAddReview}>Add</button>
                        </div>
                    </div>
                </div>
            }

        </React.Fragment>
    )
}