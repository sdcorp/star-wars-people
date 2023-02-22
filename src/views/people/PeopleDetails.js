import {
  CBadge,
  CCard,
  CCardBody,
  CCardLink,
  CCardFooter,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CSpinner,
} from '@coreui/react'
import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { usePerson } from './_hooks'

const PeopleDetails = () => {
  const { id: personId } = useParams()

  const { data: person, isLoading } = usePerson(personId)

  if (isLoading) return <CSpinner color="dark" />

  const lastUpdatedAt = new Date(person.edited).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const ownership = {
    films: person.films,
    species: person.species,
    vehicles: person.vehicles,
    starships: person.starships,
  }

  return (
    <div>
      {/* <pre>{JSON.stringify(person, null, 2)}</pre> */}
      <CCard>
        <CCardBody>
          <CCardTitle>{person.name}</CCardTitle>
          <CCardLink component={Link} to="/people">
            Go back
          </CCardLink>
        </CCardBody>
        <CListGroup flush>
          <CListGroupItem>
            Gender: <span className="fw-bold">{person.gender}</span>
          </CListGroupItem>
          <CListGroupItem>
            Birth Year: <span className="fw-bold">{person.birth_year}</span>
          </CListGroupItem>
          {Object.entries(ownership).map(([category, value]) => (
            <CListGroupItem
              key={category}
              className="d-flex justify-content-between align-items-center text-capitalize"
            >
              {category}
              <CBadge color="primary" shape="rounded-pill">
                {value.length}
              </CBadge>
            </CListGroupItem>
          ))}
        </CListGroup>
        <CCardFooter className="text-medium-emphasis">Last updated at: {lastUpdatedAt}</CCardFooter>
      </CCard>
    </div>
  )
}

export default PeopleDetails
