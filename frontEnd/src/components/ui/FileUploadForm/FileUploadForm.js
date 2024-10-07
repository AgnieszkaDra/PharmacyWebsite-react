import React, { useState } from 'react'
import { useShowPaperPrescriptions } from '../../../hooks/useShowPaperPrescriptions'
const FileUploadForm = () => {
  const [setSelectedFile] = useState(null)
  const { imageSrc, setImageSrc, sharedId } = useShowPaperPrescriptions()
  const handleFileChange2 = (event) => {
    // Update the state with the selected file

    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()

      // reader.onload = (e) => {
      //   setImageSrc([...imageSrc, { firstImage: e.target.result, id: idFile }])
      // }
      reader.onload = (e) => {
        setImageSrc([...imageSrc, { firstImage: e.target.result, id: sharedId }])
      }

      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // You can perform additional logic here before submitting the form
    // For example, you might want to send the file to a server for processing

    // Reset the file input after processing
    setSelectedFile(null)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Other form fields can go here */}

        <label htmlFor={'fileInput'}>Select a file:</label>
        <input
          type={'file'}
          id={'fileInput'}
          name={'fileInput'}
          onChange={(e) => handleFileChange2(e)}
        />

        {/* Submit button */}
        <input
          type={'submit'}
          value={'Upload'}
        />
      </form>
    </div>
  )
}

export default FileUploadForm
