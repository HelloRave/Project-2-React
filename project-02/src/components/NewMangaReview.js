import React from 'react'

export default function NewMangaReview(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <label className='form-label'>Plot {!props.plot && props.toAdd? <span>* Required field</span> : null}</label>
                    <textarea className='form-control'
                        name='plot'
                        value={props.plot}
                        onChange={props.updateFormField}></textarea>
                </div>
                <div className='col-12'>
                    <label className='form-label'>Main Characters {!props.mainCharacters && props.toAdd? <span>* Required field</span> : null}</label>
                    <textarea className='form-control'
                        name='mainCharacters'
                        value={props.mainCharacters}
                        onChange={props.updateFormField}></textarea>
                </div>
                <div className='col-12'>
                    <label className='form-label'>Supporting Characters {!props.supportingCharacters && props.toAdd? <span>* Required field</span> : null}</label>
                    <textarea className='form-control'
                        name='supportingCharacters'
                        value={props.supportingCharacters}
                        onChange={props.updateFormField}></textarea>
                </div>
                <div className='col-12'>
                    <label className='form-label'>Rating {!props.rating && props.toAdd? <span>* Required field</span> : null}</label>
                    <input type='number'
                        className='form-control'
                        name='rating'
                        value={props.rating}
                        onChange={props.updateNumberFormField} />
                </div>
            </div>
            <button className='btn btn-danger'
                    onClick={props.backToFirstPage}>Back</button>
            <button className='btn btn-primary'
                    onClick={props.confirmAdd}>Add</button>
        </div>
    )
}