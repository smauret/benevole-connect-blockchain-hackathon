import {FILTER_BY_JOBS, LOAD_PERSONS, RENDER_PICTURE} from '../actions/actionPersons'
import PERSONS from "../static/persons.json"

const initialState = {
  jobs: [],
  persons: [],
  filteredPersons: [],
  isFetching: false
}

let fetchPersons = () => {
  return PERSONS
};

let fetchJobs = () => {
  return [...new Set(PERSONS.map(
    person => person.job
  ))]
};

let filterByJobs = (state, action) => {
  // Retrieve jobs selected in event object
  console.log('action: ', action)
  /*var options = action.event.target.options;
  var jobs = [];
  for (var i = 0, l = options.length; i < l; i++) {
    if (options[i].selected) {
      jobs.push(options[i].value);
    }
  }

  // If no job is selected return the entire list
  if (jobs.length === 0){
    return state.persons
  }else{ // Filter the list by job and returns array of ids of persons
    let copyState = {...state};
    return copyState.persons.filter((person) => jobs.includes(person.job));
  }*/

  if (action.event.target.value.length === 0){
    return state.persons
  }else{ // Filter the list by job and returns array of ids of persons
    let copyState = {...state};
    return copyState.persons.filter((person) => action.event.target.value.includes(person.job));
  }
};

let renderPicture = (state, action) => {
  let copy = {
    ...state,
    persons: [
      ...state.persons.slice(0,action.payload.id),
      {
        ...state.persons[action.payload.id],
        ...{isLoaded: action.payload.isLoaded,
        avatarURL: action.payload.avatarURL,
        error: action.payload.error}
      },
      ...state.persons.slice(action.payload.id+1),
    ],
    filteredPersons: [
      ...state.filteredPersons.slice(0,action.payload.id),
      {
        ...state.filteredPersons[action.payload.id],
        isLoaded: action.payload.isLoaded,
        avatarURL: action.payload.avatarURL,
        error: action.payload.error
      },
      ...state.filteredPersons.slice(action.payload.id+1),
    ]

  };
  return copy;
};

export default (state = initialState, action) => {
  switch(action.type){
    case FILTER_BY_JOBS:
      return {...state, ...{
          filteredPersons: filterByJobs(state,action)
        }};
    case LOAD_PERSONS:
      return {...state, ...{
          jobs: fetchJobs(),
          persons: fetchPersons(),
          filteredPersons: fetchPersons()
        }};
    case RENDER_PICTURE:
      return renderPicture(state, action)

    case 'CHANGE_MAIL':
      return {...state,
        filteredPersons: [
          {
            ...state.filteredPersons[0],
            email: 'gg'
          },
          ...state.filteredPersons.slice(1),
        ]
      };
    case 'UNCHANGE_MAIL':
      return {...state,
        filteredPersons: [
          {
            ...state.filteredPersons[0],
            email: 'gortiz0@mapy.cz'
          },
          ...state.filteredPersons.slice(1),
        ]
      }

    default:
      return state
  }
}
