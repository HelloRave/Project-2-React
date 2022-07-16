import React from 'react'

export default function DisplayManga(props) {
    return (
        <React.Fragment key={props.obj._id}>
            <div id='card' className='col-12 col-sm-6 col-lg-4'>
                <div className='card-sub-div border'>
                    <div id='card-title' className='d-flex justify-content-center align-items-center'>{props.obj.title}</div>
                    <div id='manga-chapters' className='d-flex justify-content-center align-items-center'> Volumes: {props.obj.volumes} | Chapters: {props.obj.chapters} | Ongoing: {props.obj.ongoing ? 'Yes' : 'No'}</div>
                    <div id='genre-badges' className='d-flex justify-content-center align-items-center'>{props.obj.genre.map((genre) => {
                        return <span id={genre} className='badge bg-primary mx-2'>{genre}</span>
                    })}</div>
                    <div id='manga-details' className='row m-0'>
                        <div id='manga-image' className='col-5 p-0'>
                            <img src={props.obj.url} alt='manga-cover' />
                        </div>
                        <div id='manga-description' className='col-7'>{props.obj.description}</div>
                    </div>
                    <div id='buttons' className='d-flex justify-content-around align-items-center'>
                        <button className='btn btn-primary btn-sm'>Review</button>
                        
                        <button className='btn btn-warning btn-sm'
                            onClick={props.beingUpdated}>Update</button>
                        
                        <button type="button" 
                            className="btn btn-danger btn-sm" 
                            data-bs-toggle="modal" 
                            data-bs-target="#confirmDeletePopUp"
                            onClick={props.beingDeleted}>
                            Delete
                        </button>

                        <div className="modal fade" id="confirmDeletePopUp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body d-flex justify-content-between align-items-center">
                                        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                        <button type="button" 
                                            className="btn-close" 
                                            data-bs-dismiss="modal" 
                                            aria-label="Close"></button>
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