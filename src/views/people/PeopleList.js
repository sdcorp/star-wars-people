import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CSpinner,
} from '@coreui/react'

import { Link } from 'react-router-dom'

import { usePeopleList } from './_hooks'

import { Pagination } from './Pagination'

const PeopleList = () => {
  const [page, setPage] = React.useState(1)
  const { data: people, isLoading, isFetching } = usePeopleList(page)

  if (isLoading) return <CSpinner color="dark" />

  const pagesCount = Math.ceil(people.count / 10)
  const onPageChange = (v) => () => setPage((p) => p + v)

  return (
    <CCard className="mb-4">
      <CCardBody>
        <CTable hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Birth Year</CTableHeaderCell>
              <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
              <CTableHeaderCell scope="col">Link</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {people.results.map((person, idx) => (
              <CTableRow key={person.url}>
                <CTableHeaderCell scope="row">{person.name}</CTableHeaderCell>
                <CTableDataCell>{person.birth_year}</CTableDataCell>
                <CTableDataCell>{person.gender}</CTableDataCell>
                <CTableDataCell>
                  <Link to={person.url.split('/').at(-2)}>View Details</Link>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
        <br />
      </CCardBody>
      <CCardFooter className="d-flex align-items-center gap-4">
        <Pagination
          page={page}
          pagesCount={pagesCount}
          onPageSelect={setPage}
          onNext={onPageChange(1)}
          onPrevious={onPageChange(-1)}
        />
        {isFetching && (
          <div>
            Refreshing... <CSpinner color="dark" size="sm" />
          </div>
        )}
      </CCardFooter>
    </CCard>
  )
}

export default PeopleList
