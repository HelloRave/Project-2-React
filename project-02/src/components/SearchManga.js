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
                        onChange={props.updateFormField}  />
                </div>
            </div>
            <div className='row'>
                <div className='col-6 col-md-4'>
                    <label className='form-label'>Volumes</label>
                    <select class="form-select" name='findVolume'>
                        <option>Open this select menu</option>
                        <option value="1">1 - 20</option>
                        <option value="2">21 - 40</option>
                        <option value="3">Above 40</option>
                    </select>
                </div>
                <div className='col-6 col-md-4'>
                    <label className='form-label'>Chapters</label>
                    <select class="form-select" name='findChapter'>
                        <option selected>Open this select menu</option>
                        <option value="1">1 - 100</option>
                        <option value="2">101 - 200</option>
                        <option value="3">Above 200</option>
                    </select>
                </div>
                <div className='col-6 col-md-4'>
                    <label className='form-label'>Rating</label>
                    <select class="form-select" name='findRating'>
                        <option selected>Open this select menu</option>
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
                            value='' />
                        <label className='form-check-label ms-2'>Yes</label>

                        <input type='radio'
                            className='form-check-input ms-3'
                            name='findOngoing'
                            value='' />
                        <label className='form-check-label ms-2'>No</label>
                    </div>
                </div>
                <div className='col-12 col-md-8'>
                    <label className='form-label'>Genre</label>
                    <div>
                        <input type='checkbox'
                            className='form-check-input'
                            name='findGenre'
                            value='' />
                        <label className='form-check-label ms-2'>Yes</label>
                        <input type='checkbox'
                            className='form-check-input ms-3'
                            name='findGenre'
                            value='' />
                        <label className='form-check-label ms-2'>Yes</label>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary mt-3'>Search</button>
        </div>
    )
}