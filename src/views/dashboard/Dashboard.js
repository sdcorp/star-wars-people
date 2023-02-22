import React from 'react'

import { CCard, CCardBody } from '@coreui/react'

import CIcon from '@coreui/icons-react'

import { cilStar } from '@coreui/icons'

const Dashboard = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody className="text-center p-5">
          <CIcon icon={cilStar} size="9xl" />
          <h1 className="card-title p-4 mb-0">Greetings, padawan! Welcome to Star Wars Universe</h1>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
