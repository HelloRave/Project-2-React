import React from 'react'
import Multiselect from 'multiselect-react-dropdown'

export default function UpdateManga(props) {

    let dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    let urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

    return (
        <div className='container border'>

            <div className='d-flex justify-content-center align-items-center'>
                <img src={props.beingUpdated.url} alt='manga-cover' />
            </div>

            <div>
                <label className='form-label'>
                    Image
                    {!props.updatedUrl && props.toUpdate ? <span className='validation-text'> * Required field</span> : null} 
                    {props.updatedUrl !== '' && !urlRegex.test(props.updatedUrl) && props.toUpdate ? <span className='validation-text'> * Invalid url</span> : null}
                </label>
                <input type="text"
                    className='form-control'
                    name='updatedUrl'
                    value={props.updatedUrl}
                    onChange={props.updateFormField} />
            </div>

            <div className='row'>
                <div className='col'>
                    <label className='form-label'>
                        Title
                        {!props.updatedTitle && props.toUpdate ? <span className='validation-text'> * Required field</span> : null}
                    </label>
                    <input type="text"
                        className='form-control'
                        name='updatedTitle'
                        value={props.updatedTitle}
                        onChange={props.updateFormField} />
                </div>
                <div className='col'>
                    <label className='form-label'>
                        Author
                        {!props.updatedAuthor && props.toUpdate ? <span className='validation-text'> * Required field</span> : null}
                    </label>
                    <input type="text"
                        className='form-control'
                        name='updatedAuthor'
                        value={props.updatedAuthor}
                        onChange={props.updateFormField} />
                </div>
            </div>

            <div>
                <label className='form-label'>
                    Genre
                    {props.selectedValue.length === 0 && props.toUpdate ? <span className='validation-text'> * Required field</span> : null}
                </label>
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
                <label className='form-label'>
                    Description
                    {!props.updatedDescription && props.toUpdate ? <span className='validation-text'> * Required field</span> : null}
                </label>
                <p>{props.beingUpdated.description}</p>
                <textarea className='form-control'
                    name='updatedDescription'
                    placeholder='New Description'
                    value={props.updatedDescription}
                    onChange={props.updateFormField} ></textarea>
            </div>

            <div className='row my-3'>
                <div className='col-4'>
                    <label className='form-label'>
                        First-published
                        {!props.updatedFirstPublished && props.toUpdate ? <span className='validation-text'> * Required field</span> : null} 
                        {props.updatedFirstPublished !== '' && !dateRegex.test(props.updatedFirstPublished) && props.toUpdate ? <span>* DD-MM-YYYY</span> : null}
                    </label>
                    <input type='text'
                        className='form-control'
                        name='updatedFirstPublished'
                        placeholder='DD-MM-YYYY'
                        value={props.updatedFirstPublished}
                        onChange={props.updateFormField} />
                </div>
                <div className='col-4'>
                    <label className='form-label'>
                        Volumes
                        {props.updatedVolumes === '' && props.toUpdate ? <span className='validation-text'> * Required field</span> : null} 
                        {props.updatedVolumes !== '' && !/^[1-9]\d*$/.test(props.updatedVolumes) && props.toUpdate ? <span className='validation-text'> * Positive integer please</span> : null}
                    </label>
                    <input type='number'
                        className='form-control'
                        name='updatedVolumes'
                        value={props.updatedVolumes}
                        onChange={props.updateNumberFormField} />
                </div>
                <div className='col-4'>
                    <label className='form-label'>
                        Chapters
                        {props.updatedChapters === '' && props.toUpdate ? <span className='validation-text'> * Required field</span> : null} 
                        {props.updatedChapters !== '' && !/^[1-9]\d*$/.test(props.updatedChapters) && props.toUpdate ? <span className='validation-text'> * Positive integer please</span> : null}
                    </label>
                    <input type='number'
                        className='form-control'
                        name='updatedChapters'
                        value={props.updatedChapters}
                        onChange={props.updateNumberFormField} />
                </div>
            </div>

            <div className='row my-3'>
                <div className='col-4'>
                    <label className='form-label'>
                        Serialization
                        {!props.updatedSerialization && props.toUpdate ? <span className='validation-text'> * Required field</span> : null}
                    </label>
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