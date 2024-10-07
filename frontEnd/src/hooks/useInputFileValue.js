import { useState } from 'react'

export const useInputFiles = () => {
  const [inputsFiles] = useState([])
  const [fileUploadForms, setFileUploadForms] = useState([])
  const handleAddForm = () => {
    setFileUploadForms((prevForms) => [
      ...prevForms,
      { key: fileUploadForms.length }
    ])
  }

  return { inputsFiles, handleAddForm, fileUploadForms, setFileUploadForms }
}
