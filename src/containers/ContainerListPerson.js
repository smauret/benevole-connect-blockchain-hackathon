import { connect } from 'react-redux'
// import ListPerson from '../components/ListPerson'
import GridPerson from '../material-ui/GridPerson'
import {loadPicture} from "../actions/actionPersons";
import {updateXP} from "../actions/actionWeb3"

const mapStateToProps = (state) => {
  return{
    list: state.personsReducer.filteredPersons,
    images: state.imageReducer.results,
    payload: state.web3Reducer.payload,
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateXP: (id) => {
    dispatch(updateXP(id))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridPerson)
