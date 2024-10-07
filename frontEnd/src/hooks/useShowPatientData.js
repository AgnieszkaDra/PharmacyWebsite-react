import { useState } from 'react'

export const useShowPatientData = () => {
  const [patientData, setPatientData] = useState([])
  const addPatientData = (data) => {
    setPatientData([...patientData, { id: Date.now(), ...data }])
  }

  const deletePatientData = (id) => {
    setPatientData(patientData.filter((el) => el.id !== id))
  }

  return { patientData, addPatientData, deletePatientData }
}
