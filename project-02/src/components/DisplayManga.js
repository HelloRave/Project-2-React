import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function DisplayManga(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='container'>
            <div className='row'>
                {props.data.map((obj) => {
                    return (
                        <React.Fragment key={obj._id}>
                            <div id='card' className='container col-12 col-sm-6 col-md-4  p-0'>
                                <div id='card-title' className='d-flex justify-content-center align-items-center'>{obj.title}</div>
                                <div id='manga-chapters' className='d-flex justify-content-center align-items-center'> Volumes: {obj.volumes} | Chapters: {obj.chapters} | Ongoing: {obj.ongoing ? 'Yes' : 'No'}</div>
                                <div id='genre-badges' className='d-flex justify-content-center align-items-center'>{obj.genre.map((genre) => {
                                    return <span id={genre} className='badge bg-primary mx-2'>{genre}</span>
                                })}</div>
                                <div id='manga-details' className='row m-0'>
                                    <div id='manga-image' className='col-6'>IMAGE</div>
                                    <div id='manga-description' className='col-6'>HELLO</div>
                                </div>
                                <div id='buttons' className='d-flex justify-content-around align-items-center'>
                                    <button className='btn btn-primary btn-sm'>Review</button>
                                    <button className='btn btn-warning btn-sm'>Update</button>
                                    <button className='btn btn-danger btn-sm'
                                        onClick={() => {props.beingDeleted(obj)}}>Delete</button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}