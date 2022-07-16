import React from 'react'
import Multiselect from 'multiselect-react-dropdown'

export default function UpdateManga(props) {
    return (
        <div className='container border'>

            <div className='d-flex justify-content-center align-items-center'>
                <img src={props.beingUpdated.url} alt='manga-cover' />
            </div>

            <div>
                <label className='form-label'>Image</label>
                <input type="text"
                    className='form-control'
                    name='updatedUrl'
                    value={props.updatedUrl}
                    onChange={props.updateFormField} />
            </div>

            <div className='row'>
                <div className='col'>
                    <label className='form-label'>Title</label>
                    <input type="text"
                        className='form-control'
                        name='updatedTitle'
                        value={props.updatedTitle}
                        onChange={props.updateFormField} />
                </div>
                <div className='col'>
                    <label className='form-label'>Author</label>
                    <input type="text"
                        className='form-control'
                        name='updatedAuthor'
                        value={props.updatedAuthor}
                        onChange={props.updateFormField} />
                </div>
            </div>

            <div>
                <label className='form-label'>Genre</label>
                <Multiselect
                    options={props.options}
                    selectedValues={props.selectedValue}
                    onSelect={props.onSelect}
                    onRemove={props.onRemove}
                    displayValue="name"
                    avoidHighlightFirstOption={props.avoidHighlightFirstOption}
                    hidePlaceholder={props.hidePlaceholder}
                />
            </div>

            <div>
                <label className='form-label'>Description</label>
                <p>{props.beingUpdated.description}</p>
                <textarea className='form-control'
                    name='updatedDescription'
                    placeholder='New Description'
                    value={props.updatedDescription}
                    onChange={props.updateFormField} ></textarea>
            </div>

            <div className='row my-3'>
                <div className='col-4'>
                    <label className='form-label'>First-published</label>
                    <input type='text'
                        className='form-control'
                        name='updatedFirstPublished'
                        placeholder='DD-MM-YYYY'
                        value={props.updatedFirstPublished}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-4'>
                    <label className='form-label'>Volumes</label>
                    <input type='number'
                        className='form-control'
                        name='updatedVolumes'
                        value={props.updatedVolumes}
                        onChange={props.updateNumberFormField} />
                </div>
                <div className='col-4'>
                    <label className='form-label'>Chapters</label>
                    <input type='number'
                        className='form-control'
                        name='updatedChapters'
                        value={props.updatedChapters}
                        onChange={props.updateNumberFormField} />
                </div>
            </div>

            <div className='row my-3'>
                <div className='col-4'>
                    <label className='form-label'>Serialization</label>
                    <input type='text'
                        className='form-control'
                        name='updatedSerialization'
                        value={props.updatedSerialization}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-4'>
                    <p>Ongoing</p>

                    <input type='radio'
                        name='updatedOngoing'
                        className='form-check-input'
                        value='true'
                        checked={props.updatedOngoing === true}
                        onChange={props.updateBooleanFormField} />
                    <label className='form-check-label ms-2'>Yes</label>

                    <input type='radio'
                        name='updatedOngoing'
                        className='form-check-input ms-4'
                        value='false'
                        checked={props.updatedOngoing === false}
                        onChange={props.updateBooleanFormField} />
                    <label className='form-check-label ms-2'>No</label>
                </div>
                <div className='col-4'>
                    <p>Anime Adaptation</p>

                    <input type='radio'
                        name='updatedAnimeAdaptation'
                        className='form-check-input'
                        value='true'
                        checked={props.updatedAnimeAdaptation === true}
                        onChange={props.updateBooleanFormField} />
                    <label className='form-check-label ms-2'>Yes</label>

                    <input type='radio'
                        name='updatedAnimeAdaptation'
                        className='form-check-input ms-4'
                        value='false'
                        checked={props.updatedAnimeAdaptation === false}
                        onChange={props.updateBooleanFormField} />
                    <label className='form-check-label ms-2'>No</label>
                </div>
            </div>

            <button className='btn btn-primary btn-sm'
                onClick={props.back}>Back</button>
            <button className='btn btn-danger btn-sm'
                    onClick={props.confirmUpdate}>Confirm</button>
        </div>
    )
}