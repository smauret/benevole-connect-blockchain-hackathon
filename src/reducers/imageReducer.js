import { LOAD_IMAGES } from "../actions/actionImage";

const initialState = {
  results: [{urls: {}}, {urls: {}}, {urls: {}}, {urls: {}}, {urls: {}}, {urls: {}}, {urls: {}}, {urls: {}}, {urls: {}}, {urls: {}}]
};

export default (state = initialState, action) => {
  switch(action.type){
    case LOAD_IMAGES:
      return Object.assign({}, state, {
        results: action.results
      });
    default:
      return state
  }
}
