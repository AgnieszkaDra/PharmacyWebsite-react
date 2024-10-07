import { useState } from 'react'

export const useShowElectronicPrescriptions = () => {
  const [electronicPrescription, setElectroPrescription] = useState([])

  const addElectroPrescription = (data) => {
    setElectroPrescription([...electronicPrescription, { id: Date.now(), ...data }])
  }

  const deleteElectroPrescription = (id) => {
    setElectroPrescription(electronicPrescription.filter((el) => el.id !== id))
  }

  return { electronicPrescription, addElectroPrescription, deleteElectroPrescription }
}
