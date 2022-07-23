import React from 'react'

export default function NewMangaReview(props) {
    return (
        <div className='container'>
            <div className='row gy-2'>
                <div className='col-12'>
                    <label className='form-label'>
                        Plot
                        {!props.plot && props.toAdd ? <span className='validation-text'> * Required field</span> : null}
                    </label>
                    <textarea className='form-control'
                        name='plot'
                        style={{ border: `${!props.plot && props.toAdd ? '1px solid red' : ''}` }}
                        value={props.plot}
                        onChange={props.updateFormField}></textarea>
                </div>
                <div className='col-12'>
                    <label className='form-label'>
                        Main Characters 
                        {!props.mainCharacters && props.toAdd ? <span className='validation-text'> * Required field</span> : null}
                    </label>
                    <textarea className='form-control'
                        name='mainCharacters'
                        style={{ border: `${!props.mainCharacters && props.toAdd ? '1px solid red' : ''}` }}
                        value={props.mainCharacters}
                        onChange={props.updateFormField}></textarea>
                </div>
                <div className='col-12'>
                    <label className='form-label'>
                        Supporting Characters 
                        {!props.supportingCharacters && props.toAdd ? <span className='validation-text'> * Required field</span> : null}
                    </label>
                    <textarea className='form-control'
                        name='supportingCharacters'
                        style={{ border: `${!props.supportingCharacters && props.toAdd ? '1px solid red' : ''}` }}
                        value={props.supportingCharacters}
                        onChange={props.updateFormField}></textarea>
                </div>
                <div className='col-12'>
                    <label className='form-label'>
                        Rating 
                        {!props.rating && props.toAdd ? <span className='validation-text'> * Required field</span> : null}
                    </label>
                    <select class="form-select"
                        name='rating'
                        style={{ border: `${!props.rating && props.toAdd ? '1px solid red' : ''}` }}
                        value={props.rating}
                        onChange={props.updateNumberFormField}>
                        <option value="">Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <button className='btn btn-secondary mt-3 me-2'
                onClick={props.backToFirstPage}>Back</button>
            <button className='btn btn-primary mt-3'
                onClick={props.confirmAdd}>Add</button>
        </div>
    )
}