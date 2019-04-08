import personsReducer from './personsReducer'
import web3Reducer from './web3reducer'
import imageReducer from './imageReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
  personsReducer,
  web3Reducer,
  imageReducer,
});

export default rootReducer
