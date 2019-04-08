import { connect } from 'react-redux'
//import Account from '../components/Account'
import CardAccount from '../material-ui/CardAccount'

const mapStateToProps = (state) => {
  return{
    address: state.web3Reducer.payload.web3.givenProvider.selectedAddress
  }
};


export default connect(
  mapStateToProps
)(CardAccount)
