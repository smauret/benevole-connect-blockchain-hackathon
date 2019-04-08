import React from 'react'
import PropTypes from 'prop-types'
import Person from "./Person";
import '../css/ListPerson.css'

let ListPerson = ({list, fetchPicture}) => (
  <div>
    {
      ((typeof list !== 'undefined' && list.length !== 0) ?
          (<ul>
            {list.map((person) => (
              <li key={person.id}>
                <Person key={person.id} id={person.id} firstname={person.first_name} lastname={person.last_name}
                        email={person.email}
                        isLoaded={person.date} avatarURL={person.avatarURL} fetchPicture={fetchPicture}/>
              </li>
            ))}
          </ul>)
          :
          <h3>No one in the list</h3>
      )
    }
  </div>
);

ListPerson.propTypes = {
  list: PropTypes.array.isRequired
};

export default ListPerson
