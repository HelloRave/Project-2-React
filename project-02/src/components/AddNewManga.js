import React from 'react'

export default function AddNewManga(props) {

    let dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

    return (
        <div className='container'>
            <div className='row my-3'>
                <div>
                    <label className='form-label'>Image</label>
                    <input type="text"
                        className='form-control' />
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-6'>
                    <label className='form-label'>Title {!props.title && props.toReview ? <span>* Required field</span> : null}</label>
                    <input type='text'
                        className='form-control'
                        style={{ border: `${!props.title && props.toReview ? '1px solid red' : ''}` }}
                        name='title'
                        value={props.title}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-6'>
                    <label className='form-label'>Author {!props.author && props.toReview ? <span>* Required field</span> : null}</label>
                    <input type='text'
                        className='form-control'
                        name='author'
                        value={props.author}
                        onChange={props.updateFormField} />
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-6'>
                    <label className='form-label'>Description {!props.description && props.toReview ? <span>* Required field</span> : null}</label>
                    <textarea className='form-control'
                        name='description'
                        value={props.description}
                        onChange={props.updateFormField} ></textarea>
                </div>
                <div className='col-6'>
                    <p>Genre {props.genre.length === 0 && props.toReview ? <span>* Required field</span> : null}</p>

                    <div className='row'>
                        {props.allGenre.map((obj) => {
                            return (
                                <div key={obj.value} className='col-3'>
                                    <input type='checkbox'
                                        className='form-check-input'
                                        name='genre'
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
                <div className='col-4'>
                    <label className='form-label'>First-published {!props.firstPublished && props.toReview ? <span>* Required field</span> : null} {props.firstPublished !== '' && !dateRegex.test(props.firstPublished) && props.toReview ? <span>* DD-MM-YYYY</span> : null}</label>
                    <input type='text'
                        className='form-control'
                        name='firstPublished'
                        placeholder='DD-MM-YYYY'
                        value={props.firstPublished}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-4'>
                    <label className='form-label'>Volumes {props.volumes === '' && props.toReview ? <span>* Required field</span> : null} {props.volumes !== '' && !/^[1-9]\d*$/.test(props.volumes) && props.toReview ? <span>* Positive integer please</span> : null}</label>
                    <input type='number'
                        className='form-control'
                        name='volumes'
                        value={props.volumes}
                        onChange={props.updateNumberFormField} />
                </div>
                <div className='col-4'>
                    <label className='form-label'>Chapters {props.chapters === '' && props.toReview ? <span>* Required field</span> : null} {props.chapters !== '' && !/^[1-9]\d*$/.test(props.chapters) && props.toReview ? <span>* Positive integer please</span> : null}</label>
                    <input type='number'
                        className='form-control'
                        name='chapters'
                        value={props.chapters}
                        onChange={props.updateNumberFormField} />
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-4'>
                    <label className='form-label'>Serialization {!props.serialization && props.toReview ? <span>* Required field</span> : null}</label>
                    <input type='text'
                        className='form-control'
                        name='serialization'
                        value={props.serialization}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-4'>
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
                <div className='col-4'>
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