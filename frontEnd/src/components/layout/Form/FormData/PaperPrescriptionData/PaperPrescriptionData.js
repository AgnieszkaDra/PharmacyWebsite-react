import React from 'react'
import Button from '../../../../ui/Button'
import { useInputFiles } from '../../../../../hooks/useInputFileValue'
import { FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types'

export const PaperPrescriptionData = (props) => {
  const { onChange } = props
  const { fileUploadForms, setFileUploadForms } = useInputFiles()

  const handleAddForm = () => {
    setFileUploadForms((prevForms) => [
      ...prevForms,
      { key: fileUploadForms.length }
    ])
  }

  const handleRemoveForm = (index) => {
    const updatedForms = [...fileUploadForms]
    updatedForms.splice(index, 1)
    setFileUploadForms(updatedForms)
  }

  return (
    <>
      <div>
        <form>
          <input
            type={'file'}
            id={'fileInput'}
            multiple
            name={'fileInput'}
            onChange={(e) => onChange(e)}
          />
        </form>
      </div>
      {fileUploadForms.map((formData, index) => (
        <div key={formData.key}>
          <form className={'mt-8'}>
            <input
              type={'file'}
              id={'fileInput'}
              multiple
              name={'fileInput'}
              onChange={(e) => onChange(e)}
            />
            <button
              type={'button'}
              onClick={() => handleRemoveForm(index)}
            >
              <FaTrash />
            </button>
          </form>
        </div>
      ))}
      <Button
        type={'submit'}
        className={'button__submit'}
        text={'Dodaj kolejną receptę papierową'}
        onClick={handleAddForm}
      />
    </>
  )
}

PaperPrescriptionData.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  onChange: PropTypes.func,
  result: PropTypes.func
}

export default PaperPrescriptionData
