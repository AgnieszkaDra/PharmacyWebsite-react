import React from 'react'
import PropTypes from 'prop-types'

export const PatientDataOrder = (props) => {
  const { data } = props
  return (
    <div className={'mb-2'}>
      {data.name}
      <br></br>
      {data.email}
    </div>
  )
}

PatientDataOrder.propTypes = {
  data: PropTypes.object
}

export default PatientDataOrder
