import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function DisplayManga(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <React.Fragment key={props.obj._id}>
            <div id='card' className='container col-12 col-sm-6 col-md-4 p-0'>
                <div id='card-title' className='d-flex justify-content-center align-items-center'>{props.obj.title}</div>
                <div id='manga-chapters' className='d-flex justify-content-center align-items-center'> Volumes: {props.obj.volumes} | Chapters: {props.obj.chapters} | Ongoing: {props.obj.ongoing ? 'Yes' : 'No'}</div>
                <div id='genre-badges' className='d-flex justify-content-center align-items-center'>{props.obj.genre.map((genre) => {
                    return <span id={genre} className='badge bg-primary mx-2'>{genre}</span>
                })}</div>
                <div id='manga-details' className='row m-0'>
                    <div id='manga-image' className='col-6'>IMAGE</div>
                    <div id='manga-description' className='col-6'>HELLO</div>
                </div>
                <div id='buttons' className='d-flex justify-content-around align-items-center'>
                    <button className='btn btn-primary btn-sm'>Review</button>
                    <button className='btn btn-warning btn-sm'
                            onClick={props.beingUpdated}>Update</button>
                    <button className='btn btn-danger btn-sm'
                        onClick={() => { props.beingDeleted(props.obj) }}>Delete</button>

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
}