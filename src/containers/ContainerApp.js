import { connect } from 'react-redux'
import { loadPersons } from '../actions/actionPersons'
import { loadImages } from "../actions/actionImage";
import { web3Connect, web3Disconnected } from '../actions/actionWeb3'
import App from '../App'

const mapDispatchToProps = (dispatch) => ({
  loadPersons: ()=>{
    dispatch(loadPersons())
  },
  loadImages: ()=>{
    dispatch(loadImages())
  },
  connectWeb3: ()=>{
    dispatch(web3Connect())
  },
  disconnectWeb3: ()=>{
    dispatch(web3Disconnected())
  },
});

export default connect(
  null,
  mapDispatchToProps
)(App)
