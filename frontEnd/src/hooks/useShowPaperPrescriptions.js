import { useState } from 'react'
import { useInputFiles } from './useInputFileValue'

export const useShowPaperPrescriptions = () => {
  // eslint-disable-next-line no-unused-vars
  const [imageSrc, setImageSrc] = useState([])
  const [inputFile, setInputFile] = useState([])
  const { handleAddForm } = useInputFiles()
  const handleFileChange = (event, idFile) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()

      // reader.onload = (e) => {
      //   setImageSrc([...imageSrc, { firstImage: e.target.result, id: idFile }])
      // }
      reader.onload = (e) => {
        setImageSrc([...imageSrc, { firstImage: e.target.result }])
      }

      reader.readAsDataURL(file)
      handleAddForm()
    }
  }

  const addInputFileWithId = (e) => {
    alert('id')
    setInputFile([...inputFile])
  }

  const addPaperPrescription = (data) => {
    setImageSrc([...imageSrc, { id: Date.now(), ...data }])
  }

  const deletePaperPrescription = (id) => {
    console.log(id)
    setImageSrc(imageSrc.filter((el) => el.id !== id))
    setInputFile(inputFile.filter((el) => el.id !== id))
  }

  // const deletePaperPrescription = (id) => {
  //   setElectroPrescription(electronicPrescription.filter((el) => el.id !== id))
  // }
  return { imageSrc, setImageSrc, handleFileChange, addPaperPrescription, deletePaperPrescription, inputFile, addInputFileWithId }
}
