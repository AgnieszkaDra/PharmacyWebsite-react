import { useState } from 'react'

export const useShowNonPrescriptions = () => {
  const [nonPrescription, setNonPrescription] = useState([])

  const addNonPrescription = (data) => {
    setNonPrescription([...nonPrescription, { id: Date.now(), ...data }])
  }

  const deleteNonPrescription = (id) => {
    setNonPrescription(nonPrescription.filter((el) => el.id !== id))
  }

  return { nonPrescription, addNonPrescription, deleteNonPrescription }
}
