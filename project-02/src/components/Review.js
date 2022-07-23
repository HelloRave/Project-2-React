import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Review(props) {

    let returnRating = (number) => {
        return props.reviewData.filter((obj) => {
            return obj.rating === number
        })
    }

    return (
        <React.Fragment>
            <div className='container mb-3'>
                <button className='btn btn-primary btn-sm'
                    onClick={props.backToMain}>
                    <FontAwesomeIcon icon={faLeftLong} />
                </button>
            </div>

            <div className='container text-center'>
                <p className='reviews-text mb-0'>Reviews for:{' '}
                    <span className='reviews-title-text'>{props.addViewReview.title}</span>
                </p>
            </div>

            <div className='container text-center mt-4 p-1'>
                <img src={props.addViewReview.url} alt='manga-cover' />
            </div>

            <div div className='container my-4'>
                {props.addViewReview.average_rating ?

                    <React.Fragment>

                        <div className='row align-items-center gy-3'>
                            <div className='col-12 col-sm-4'>
                                <CircularProgressbar value={props.addViewReview.average_rating}
                                    maxValue={5}
                                    text={props.addViewReview.average_rating}
                                    counterClockwise={true}
                                    styles={buildStyles({
                                        strokeLinecap: 'round',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `gold`,
                                        textColor: 'black',
                                        trailColor: '#d6d6d6'
                                    })} />
                            </div>
                            <div className='col-12 col-sm-8'>
                                <div className='d-flex align-items-center my-2'>
                                    <label>5 stars: </label>
                                    <ProgressBar className='flex-grow-1 mx-2' variant="success" now={(returnRating(5).length / props.reviewData.length) * 100} />
                                    <label>{`${(returnRating(5).length / props.reviewData.length) * 100}%`}</label>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <label>4 stars: </label>
                                    <ProgressBar className='flex-grow-1 mx-2' variant="success" now={(returnRating(4).length / props.reviewData.length) * 100} />
                                    <label>{`${(returnRating(4).length / props.reviewData.length) * 100}%`}</label>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <label>3 stars: </label>
                                    <ProgressBar className='flex-grow-1 mx-2' variant="success" now={(returnRating(3).length / props.reviewData.length) * 100} />
                                    <label>{`${(returnRating(3).length / props.reviewData.length) * 100}%`}</label>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <label>2 stars: </label>
                                    <ProgressBar className='flex-grow-1 mx-2' variant="success" now={(returnRating(2).length / props.reviewData.length) * 100} />
                                    <label>{`${(returnRating(2).length / props.reviewData.length) * 100}%`}</label>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <label>1 stars: </label>
                                    <ProgressBar className='flex-grow-1 mx-2' variant="success" now={(returnRating(1).length / props.reviewData.length) * 100} />
                                    <label>{`${(returnRating(1).length / props.reviewData.length) * 100}%`}</label>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>

                    :

                    <React.Fragment>
                        <div className='row align-items-center gy-3'>

                            <div className='col-12 col-sm-4 no-rating'>
                                <CircularProgressbar value={0}
                                    maxValue={5}
                                    text={'No Ratings Yet'}
                                    styles={buildStyles({
                                        textColor: 'black',
                                        trailColor: '#d6d6d6'
                                    })} />
                            </div>
                            <div className='col-12 col-sm-8'>
                                <div className='d-flex align-items-center my-2'>
                                    <label>5 stars: </label>
                                    <ProgressBar className='flex-grow-1 mx-2' variant="success" now={0} />
                                    <label>{``}</label>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <label>4 stars: </label>
                                    <ProgressBar className='flex-grow-1 mx-2' variant="success" now={0} />
                                    <label>{``}</label>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <label>3 stars: </label>
                                    <ProgressBar className='flex-grow-1 mx-2' variant="success" now={0} />
                                    <label>{``}</label>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <label>2 stars: </label>
                                    <ProgressBar className='flex-grow-1 mx-2' variant="success" now={0} />
                                    <label>{``}</label>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <label>1 stars: </label>
                                    <ProgressBar className='flex-grow-1 mx-2' variant="success" now={0} />
                                    <label>{``}</label>
                                </div>
                            </div>

                        </div>

                    </React.Fragment>

                }


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

                    <div>
                    </div>
                }
            </div>

            {props.reviewPage === 'to-add' ?
                <div className='container d-flex flex-column justify-content-center align-items-center p-4'
                    onClick={props.addReview}>
                    <div className='review-div'>
                        <div className='review-add-div d-flex justify-content-center align-items-center p-3'>
                            <FontAwesomeIcon icon={faPlus} className='review-add-icon' />
                        </div>
                        <div className='add-review-text mt-2'>
                            Add New Review
                        </div>
                    </div>

                </div>

                :

                <div className='container border p-4'>
                    <div className='row gy-3'>
                        <div className='col-12'>
                            <label className='form-label'>
                                Plot
                                {!props.reviewPlot && props.toAddReview ? <span className='validation-text'> * Required field</span> : null}
                            </label>
                            <textarea className='form-control'
                                name='reviewPlot'
                                style={{ border: `${!props.reviewPlot && props.toAddReview ? '1px solid red' : ''}` }}
                                value={props.reviewPlot}
                                onChange={props.updateFormField}></textarea>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>
                                Main Characters
                                {!props.reviewMainCharacters && props.toAddReview ? <span className='validation-text'> * Required field</span> : null}
                            </label>
                            <textarea className='form-control'
                                name='reviewMainCharacters'
                                style={{ border: `${!props.reviewMainCharacters && props.toAddReview ? '1px solid red' : ''}` }}
                                value={props.reviewMainCharacters}
                                onChange={props.updateFormField}></textarea>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>
                                Supporting Characters
                                {!props.reviewSupportingCharacters && props.toAddReview ? <span className='validation-text'> * Required field</span> : null}
                            </label>
                            <textarea className='form-control'
                                name='reviewSupportingCharacters'
                                style={{ border: `${!props.reviewSupportingCharacters && props.toAddReview ? '1px solid red' : ''}` }}
                                value={props.reviewSupportingCharacters}
                                onChange={props.updateFormField}></textarea>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <label className='form-label'>
                                Rating
                                {!props.reviewRating && props.toAddReview ? <span className='validation-text'> * Required field</span> : null}
                            </label>
                            <select class="form-select"
                                name='reviewRating'
                                style={{ border: `${!props.reviewRating && props.toAddReview ? '1px solid red' : ''}` }}
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
                            <button className='btn btn-secondary me-2'
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