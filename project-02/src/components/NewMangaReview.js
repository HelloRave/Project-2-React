import React from 'react'

export default function NewMangaReview(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <label className='form-label'>Plot</label>
                    <textarea className='form-control'
                        name='plot'
                        value={props.plot}
                        onChange={props.updateFormField}></textarea>
                </div>
                <div className='col-12'>
                    <label className='form-label'>Main Characters</label>
                    <textarea className='form-control'
                        name='mainCharacters'
                        value={props.mainCharacters}
                        onChange={props.updateFormField}></textarea>
                </div>
                <div className='col-12'>
                    <label className='form-label'>Supporting Characters</label>
                    <textarea className='form-control'
                        name='supportingCharacters'
                        value={props.supportingCharacters}
                        onChange={props.updateFormField}></textarea>
                </div>
                <div className='col-12'>
                    <label className='form-label'>Rating</label>
                    <input type='number'
                        className='form-control'
                        name='rating'
                        value={props.rating}
                        onChange={props.updateNumberFormField} />
                </div>
            </div>
            <button className='btn btn-primary'
                    onClick={props.confirmAdd}>Add</button>
        </div>
    )
}