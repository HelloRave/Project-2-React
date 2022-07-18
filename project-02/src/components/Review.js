import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Review(props) {
    return (
        <React.Fragment>
            <div className='container p-0 mb-3'>
                <button className='btn btn-primary btn-sm'
                    onClick={props.backToMain}>
                    <FontAwesomeIcon icon={faLeftLong} />
                </button>
            </div>

            <div className='container text-center border'>
                You are looking at reviews for: {props.addViewReview.title}
            </div>
            <div>
                {props.reviewData[0] ?
                    props.reviewData.map((obj) => {
                        return (
                            <React.Fragment>
                                <div className='container border'>
                                    <div>
                                        {[...Array(obj.rating)].map((element, index) => {
                                            return <FontAwesomeIcon icon={faStar} key={index} className='rating-star' />
                                        })}
                                        {[...Array(5 - obj.rating)].map((element, index) => {
                                            return <FontAwesomeIcon icon={faStar} key={index} className='faded-star' />
                                        })}
                                    </div>
                                    <div>{obj.plot}</div>
                                    <div>{obj.main_characters}</div>
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

            <div className='container border'>
                Add New
            </div>
        </React.Fragment>
    )
}