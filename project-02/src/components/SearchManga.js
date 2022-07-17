import React from 'react'

export default function SearchManga(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <label className='form-label'>Title</label>
                    <input type='text'
                        className='form-control'
                        name='findTitle'
                        value={props.findTitle}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-6'>
                    <label className='form-label'>Author</label>
                    <input type='text'
                        className='form-control'
                        name='findAuthor'
                        value={props.findAuthor}
                        onChange={props.updateFormField} />
                </div>
            </div>
            <div className='row'>
                <div className='col-6 col-md-4'>
                    <label className='form-label'>Volumes</label>
                    <select class="form-select"
                        name='findVolume'
                        value={props.findVolume}
                        onChange={props.updateFormField}>
                        <option value="">Open this select menu</option>
                        <option value="1">1 - 20</option>
                        <option value="2">21 - 40</option>
                        <option value="3">Above 40</option>
                    </select>
                </div>
                <div className='col-6 col-md-4'>
                    <label className='form-label'>Chapters</label>
                    <select class="form-select"
                        name='findChapter'
                        value={props.findChapter}
                        onChange={props.updateFormField}>
                        <option value="">Open this select menu</option>
                        <option value="1">1 - 100</option>
                        <option value="2">101 - 200</option>
                        <option value="3">Above 200</option>
                    </select>
                </div>
                <div className='col-6 col-md-4'>
                    <label className='form-label'>Rating</label>
                    <select class="form-select"
                        name='findRating'
                        value={props.findRating}
                        onChange={props.updateFormField}>
                        <option value="">Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className='col-6 col-md-4'>
                    <label className='form-label'>Ongoing</label>

                    <div>
                        <input type='radio'
                            className='form-check-input'
                            name='findOngoing'
                            value='true'
                            checked={props.findOngoing}
                            onChange={props.updateBooleanFormField} />
                        <label className='form-check-label ms-2'>Yes</label>

                        <input type='radio'
                            className='form-check-input ms-3'
                            name='findOngoing'
                            value='false'
                            checked={!props.findOngoing && props.findOngoing !== ''}
                            onChange={props.updateBooleanFormField} />
                        <label className='form-check-label ms-2'>No</label>
                    </div>
                </div>
                <div className='col-12 col-md-8'>
                    <label className='form-label'>Genre</label>
                    <div className='row'>
                        {props.allGenre.map((obj) => {
                            return (
                                <div key={obj.value} className='col-4 col-lg-3'>
                                    <input type='checkbox'
                                        className='form-check-input'
                                        name='findGenre'
                                        value={obj.value}
                                        onChange={()=>{}} />
                                    <label className='form-check-label ms-2'>{obj.display}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <button className='btn btn-primary mt-3'>Search</button>
        </div>
    )
}