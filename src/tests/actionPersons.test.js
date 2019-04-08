import {FILTER_BY_JOBS, filterByJobs, LOAD_PERSONS, loadPersons, RENDER_PICTURE, renderPicture} from '../actions/actionPersons'

describe('FILTER_BY_JOBS', () => {
  it('should create an action to filter  by jobs', () => {
    const event = 'Filter event'
    const expectedAction = {
      type: FILTER_BY_JOBS,
      event
    };
    expect(filterByJobs(event)).toEqual(expectedAction)
  });

  it('should create an action to load persons', () => {
    const expectedAction = {
      type: LOAD_PERSONS,
      payload: ''
    };
    expect(loadPersons()).toEqual(expectedAction)
  })

  it('should create an action to render pictures', () => {
    let payload = {id: 'id', isLoaded: true, avatarURL: 'url', error: ''};
    const expectedAction = {
      type: RENDER_PICTURE,
      payload
    }
    expect(renderPicture('id',true,'url','')).toEqual(expectedAction)
  })

});
