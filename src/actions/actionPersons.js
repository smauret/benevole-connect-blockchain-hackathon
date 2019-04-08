//import robohash from "../services/robohash";
import unsplash from "../services/unsplash"

export const FILTER_BY_JOBS = 'FILTER_BY_JOBS';
export const LOAD_PERSONS = 'LOAD_PERSONS';
export const RENDER_PICTURE = 'RENDER_PICTURE';

export const filterByJobs = event => ({
  type: FILTER_BY_JOBS,
  event: event
});

export const loadPersons = () => ({
  type: LOAD_PERSONS,
  payload: ''
});

export const renderPicture = (id, isLoaded, avatarURL, error) => ({
  type: RENDER_PICTURE,
  payload: {
    id,
    isLoaded,
    avatarURL,
    error,
  }
});

export const loadPicture = (id) =>

  async (dispatch) => {

    await unsplash().then((res) => {
      dispatch(dispatch(renderPicture(id, res.isLoaded, res.avatarURL, res.error)))
    })
  };

/*
export const loadPicture = (id) =>

  async (dispatch) => {

    await robohash().then((res) => {
      dispatch(renderPicture(id, res.isLoaded, res.avatarURL, res.error))
    })
  };
*/
