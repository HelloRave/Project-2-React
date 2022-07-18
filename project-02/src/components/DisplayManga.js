import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare, faThumbsUp, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export default function DisplayManga(props) {
    return (
        <React.Fragment key={props.obj._id}>
            <div id='card' className='col-12 col-sm-6 col-lg-4'>
                <div className='card-sub-div border'>
                    <div id='card-title' className='d-flex justify-content-center align-items-center'>{props.obj.title}</div>
                    <div id='manga-chapters' className='d-flex justify-content-center align-items-center'> Volumes: {props.obj.volumes} | Chapters: {props.obj.chapters} | Ongoing: {props.obj.ongoing ? 'Yes' : 'No'}</div>
                    <div id='genre-badges' className='d-flex justify-content-center align-items-center'>{props.obj.genre.map((genre) => {
                        return <span className={`${genre} badge bg-primary mx-2`}>{genre}</span>
                    })}</div>
                    <div id='manga-details' className='row m-0'>
                        <div id='manga-image' className='col-5 p-0'>
                            <img src={props.obj.url} alt='manga-cover' />
                        </div>
                        <div id='manga-description' className='col-7'>{props.obj.description}</div>
                    </div>
                    <div id='buttons' className='d-flex justify-content-around align-items-center'>
                        <button className='btn btn-primary btn-sm'
                                onClick={props.viewReview}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span className='ms-1'>Review</span>
                        </button>

                        <button className='btn btn-warning btn-sm'
                            onClick={props.beingUpdated}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                            <span className='ms-1'>Edit</span>
                        </button>

                        <button type="button"
                            className="btn btn-danger btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#confirmDeletePopUp"
                            onClick={props.beingDeleted}>
                            <FontAwesomeIcon icon={faTrashCan} />
                            <span className='ms-1'>Delete</span>
                        </button>

                        <div className="modal fade" id="confirmDeletePopUp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="modal-title" id="staticBackdropLabel"></h5>
                                            <button type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                                            <FontAwesomeIcon icon={faCircleExclamation} className='alert-icon'/>
                                            <h4 className='my-4'>Are you sure you want to delete</h4>
                                            <p className='title-to-delete'>{props.obj.title}</p>
                                            <p>You will not be able to revert this!</p>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button"
                                            className="btn btn-danger"
                                            data-bs-dismiss="modal"
                                            onClick={props.confirmDelete}>Understood</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}