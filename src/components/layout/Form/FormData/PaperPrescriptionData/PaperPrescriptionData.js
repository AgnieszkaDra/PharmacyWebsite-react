import React from 'react'
import { Button } from '../../../../ui'
import { useInputFiles } from '../../../../../hooks'
import { FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types'

const PaperPrescriptionData = (props) => {
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
            onChange={onChange}
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
              onChange={onChange}
            />
            <Button
              type={'button'}
              onClick={() => handleRemoveForm(index)}
            >
              <FaTrash />
            </Button>
          </form>
        </div>
      ))}
      <Button
        type={'submit'}
        className={'button__submit'}
        onClick={handleAddForm}
      >
        <p>Dodaj kolejną receptę papierową</p>
      </Button>
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
