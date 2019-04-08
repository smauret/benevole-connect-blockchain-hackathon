import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({choices, filter}) => (
  <div>
    <select placeholder='select-job' multiple onChange={filter}>
      {
        choices.map( choice => <option className={choice} key={choice} value={choice}>{choice}</option> )
      }
    </select>
  </div>
)

Filter.propTypes = {
  choices: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired
}
export default Filter
