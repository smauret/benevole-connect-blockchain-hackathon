import { connect } from 'react-redux'
import { filterByJobs } from '../actions/actionPersons'
//import Filter from '../components/Filter'
import SelectJob from '../material-ui/SelectJobs'

const mapStateToProps = (state) => ({
  choices: state.personsReducer.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  filter: (event)=>{
    event.persist();
    dispatch(filterByJobs(event))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectJob)
