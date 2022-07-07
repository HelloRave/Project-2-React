import React from 'react'

export default function AddNewManga(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div>
                    <label>Image</label>
                    <input type="file" accept="image/*" />
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <label className='form-label'>Title</label>
                    <input type='text'
                        className='form-control'
                        name='title'
                        value={props.title}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-6'>
                    <label className='form-label'>Author</label>
                    <input type='text'
                        className='form-control'
                        name='author'
                        value={props.author}
                        onChange={props.updateFormField} />
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <label className='form-label'>Description</label>
                    <textarea className='form-control'
                        name='description'
                        value={props.description}
                        onChange={props.updateFormField} ></textarea>
                </div>
                <div className='col-6'>
                    <p className='m-0'>Genre</p>

                    {props.allGenre.map((obj) => {
                        return (
                            <React.Fragment key={obj.value}>
                                <input type='checkbox'
                                    className='form-check-input'
                                    name='genre'
                                    value={obj.value}
                                    checked={props.genre.includes(obj.value)}
                                    onChange={props.updateGenre} />
                                <label className='form-check-label'>{obj.display}</label>
                            </React.Fragment>

                        )
                    })}
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <label className='form-label'>First-published</label>
                    <input type='text'
                        className='form-control'
                        name='firstPublished'
                        value={props.firstPublished}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-4'>
                    <label className='form-label'>Volumes</label>
                    <input type='number'
                        className='form-control'
                        name='volumes'
                        value={props.volumes}
                        onChange={props.updateNumberFormField} />
                </div>
                <div className='col-4'>
                    <label className='form-label'>Chapters</label>
                    <input type='number'
                        className='form-control'
                        name='chapters'
                        value={props.chapters}
                        onChange={props.updateNumberFormField} />
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <label className='form-label'>Serialization</label>
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
                    <label className='form-check-label'>Yes</label>

                    <input type='radio'
                        name='ongoing'
                        className='form-check-input'
                        value='false'
                        checked={props.ongoing === false}
                        onChange={props.updateBooleanFormField} />
                    <label className='form-check-label'>No</label>
                </div>
                <div className='col-4'>
                    <p>Anime Adaptation</p>

                    <input type='radio'
                        name='animeAdaptation'
                        className='form-check-input'
                        value='true'
                        checked={props.animeAdaptation === true}
                        onChange={props.updateBooleanFormField} />
                    <label>Yes</label>

                    <input type='radio'
                        name='animeAdaptation'
                        className='form-check-input'
                        value='false'
                        checked={props.animeAdaptation === false}
                        onChange={props.updateBooleanFormField} />
                    <label>No</label>
                </div>
            </div>
            <button className='btn btn-primary'
                    onClick={props.continueToReview}>Next</button>
        </div>
    )
}