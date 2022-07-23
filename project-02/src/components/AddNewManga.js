import React from 'react'

export default function AddNewManga(props) {

    let dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    let urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

    return (
        <div className='container'>
            <div className='row my-3'>
                <div>
                    <label className='form-label'>
                        Image 
                        {!props.url && props.toReview ? <span className='validation-text'> * Required field</span> : null} 
                        {props.url !== '' && !urlRegex.test(props.url) && props.toReview ? <span className='validation-text'> * Invalid url</span> : null}
                    </label>
                    <input type="text"
                        className='form-control'
                        style={{ border: `${(!props.url || !urlRegex.test(props.url)) && props.toReview ? '1px solid red' : ''}` }}
                        name='url'
                        value={props.url}
                        onChange={props.updateFormField} />
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-6'>
                    <label className='form-label'>
                        Title 
                        {!props.title && props.toReview ? <span className='validation-text'><br className='d-md-none'></br> * Required field</span> : null}
                    </label>
                    <input type='text'
                        className='form-control'
                        style={{ border: `${!props.title && props.toReview ? '1px solid red' : ''}` }}
                        name='title'
                        value={props.title}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-6'>
                    <label className='form-label'>
                        Author 
                        {!props.author && props.toReview ? <span className='validation-text'><br className='d-md-none'></br> * Required field</span> : null}
                    </label>
                    <input type='text'
                        className='form-control'
                        style={{ border: `${!props.author && props.toReview ? '1px solid red' : ''}` }}
                        name='author'
                        value={props.author}
                        onChange={props.updateFormField} />
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-12 col-md-6'>
                    <label className='form-label'>
                        Description 
                        {!props.description && props.toReview ? <span className='validation-text'> * Required field</span> : null}
                    </label>
                    <textarea className='form-control'
                        name='description'
                        style={{ border: `${!props.description && props.toReview ? '1px solid red' : ''}` }}
                        value={props.description}
                        onChange={props.updateFormField} ></textarea>
                </div>
                <div className='col-12 col-md-6 mt-3 mt-md-0'>
                    <p>
                        Genre 
                        {props.genre.length === 0 && props.toReview ? <span className='validation-text'> * Required field</span> : null}
                    </p>

                    <div className='row'>
                        {props.allGenre.map((obj) => {
                            return (
                                <div key={obj.value} className='col-4 col-sm-3'>
                                    <input type='checkbox'
                                        className='form-check-input'
                                        name='genre'
                                        style={{ border: `${props.genre.length === 0 && props.toReview ? '1px solid red' : ''}` }}
                                        value={obj.value}
                                        checked={props.genre.includes(obj.value)}
                                        onChange={props.updateGenre} />
                                    <label className='form-check-label ms-2'>{obj.display}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-6 col-sm-4'>
                    <label className='form-label'>
                        First-published 
                        {!props.firstPublished && props.toReview ? <span className='validation-text'><br className='d-md-none'></br>* Required field</span> : null} 
                        {props.firstPublished !== '' && !dateRegex.test(props.firstPublished) && props.toReview ? <span className='validation-text'> * DD-MM-YYYY</span> : null}
                    </label>
                    <input type='text'
                        className='form-control'
                        style={{ border: `${(!props.firstPublished || !dateRegex.test(props.firstPublished)) && props.toReview ? '1px solid red' : ''}` }}
                        name='firstPublished'
                        placeholder='DD-MM-YYYY'
                        value={props.firstPublished}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-6 col-sm-4'>
                    <label className='form-label'>
                        Volumes 
                        {props.volumes === '' && props.toReview ? <span className='validation-text'><br className='d-md-none'></br> * Required field</span> : null} 
                        {props.volumes !== '' && !/^[1-9]\d*$/.test(props.volumes) && props.toReview ? <span className='validation-text'><br className='d-md-none'></br> * Positive integer please</span> : null}
                    </label>
                    <input type='number'
                        className='form-control'
                        style={{ border: `${(!props.volumes || !/^[1-9]\d*$/.test(props.volumes)) && props.toReview ? '1px solid red' : ''}` }}
                        name='volumes'
                        value={props.volumes}
                        onChange={props.updateNumberFormField} />
                </div>
                <div className='d-none d-sm-grid col-4'>
                    <label className='form-label'>
                        Chapters 
                        {props.chapters === '' && props.toReview ? <span className='validation-text'><br className='d-md-none'></br> * Required field</span> : null} 
                        {props.chapters !== '' && !/^[1-9]\d*$/.test(props.chapters) && props.toReview ? <span className='validation-text'><br className='d-md-none'></br> * Positive integer please</span> : null}
                    </label>
                    <input type='number'
                        className='form-control'
                        style={{ border: `${(!props.chapters || !/^[1-9]\d*$/.test(props.chapters)) && props.toReview ? '1px solid red' : ''}` }}
                        name='chapters'
                        value={props.chapters}
                        onChange={props.updateNumberFormField} />
                </div>
            </div>
            <div className='row my-3'>
                <div className='d-sm-none col-6'>
                    <label className='form-label'>
                        Chapters 
                        {props.chapters === '' && props.toReview ? <span className='validation-text'><br className='d-md-none'></br> * Required field</span> : null} 
                        {props.chapters !== '' && !/^[1-9]\d*$/.test(props.chapters) && props.toReview ? <span className='validation-text'><br className='d-md-none'></br> * Positive integer please</span> : null}
                    </label>
                    <input type='number'
                        className='form-control'
                        style={{ border: `${(!props.chapters || !/^[1-9]\d*$/.test(props.chapters)) && props.toReview ? '1px solid red' : ''}` }}
                        name='chapters'
                        value={props.chapters}
                        onChange={props.updateNumberFormField} />
                </div>
                <div className='col-6 col-sm-4'>
                    <label className='form-label'>
                        Serialization 
                        {!props.serialization && props.toReview ? <span className='validation-text'><br className='d-md-none'></br> * Required field</span> : null}
                    </label>
                    <input type='text'
                        className='form-control'
                        style={{ border: `${!props.serialization && props.toReview ? '1px solid red' : ''}` }}
                        name='serialization'
                        value={props.serialization}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-6 col-sm-4 mt-3 mt-sm-0'>
                    <p>Ongoing</p>

                    <input type='radio'
                        name='ongoing'
                        className='form-check-input'
                        value='true'
                        checked={props.ongoing === true}
                        onChange={props.updateBooleanFormField} />
                    <label className='form-check-label ms-2'>Yes</label>

                    <input type='radio'
                        name='ongoing'
                        className='form-check-input ms-4'
                        value='false'
                        checked={props.ongoing === false}
                        onChange={props.updateBooleanFormField} />
                    <label className='form-check-label ms-2'>No</label>
                </div>
                <div className='col-6 col-sm-4 mt-3 mt-sm-0'>
                    <p>Anime Adaptation</p>

                    <input type='radio'
                        name='animeAdaptation'
                        className='form-check-input'
                        value='true'
                        checked={props.animeAdaptation === true}
                        onChange={props.updateBooleanFormField} />
                    <label className='form-check-label ms-2'>Yes</label>

                    <input type='radio'
                        name='animeAdaptation'
                        className='form-check-input ms-4'
                        value='false'
                        checked={props.animeAdaptation === false}
                        onChange={props.updateBooleanFormField} />
                    <label className='form-check-label ms-2'>No</label>
                </div>
            </div>
            <button className='btn btn-primary'
                onClick={props.continueToReview}>Next</button>
        </div>
    )
}