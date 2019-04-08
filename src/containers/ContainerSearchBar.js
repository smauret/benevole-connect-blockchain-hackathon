import { connect } from 'react-redux'
//import Filter from '../components/Filter'
import SearchBar from '../material-ui/SearchBar'

const mapStateToProps = (state) => ({
  payload: state.web3Reducer.payload,
});


export default connect(
  mapStateToProps
)(SearchBar)
