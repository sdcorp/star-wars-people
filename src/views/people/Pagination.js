import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'
import PropTypes from 'prop-types'

export const Pagination = ({ page, pagesCount, onNext, onPrevious, onPageSelect }) => {
  return (
    <CPagination className="my-2" aria-label="Page navigation">
      <CPaginationItem aria-label="Previous" disabled={page === 1} onClick={onPrevious}>
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      {Array(pagesCount)
        .fill(null)
        .map((_, idx) => (
          <CPaginationItem
            key={idx}
            active={idx + 1 === page}
            onClick={(e) => onPageSelect(+e?.target?.innerText)}
          >
            {idx + 1}
          </CPaginationItem>
        ))}
      <CPaginationItem disabled={page === pagesCount} onClick={onNext} aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
  )
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onPageSelect: PropTypes.func.isRequired,
}
