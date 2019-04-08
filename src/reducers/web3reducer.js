import {WEB3_CONNECTED, WEB3_DISCONNECTED, UPDATE_XP } from "../actions/actionWeb3";

const initialState = {
  payload: {
    web3: {
      givenProvider: {
        selectedAddress: 'undefined'
      }
    },
    contract: '',
    xp: 100
  }
};

export default (state = initialState, action) => {
  switch(action.type){
    case WEB3_CONNECTED:
      return Object.assign({}, state, {
        payload: action.payload
      });
    case WEB3_DISCONNECTED:
      return Object.assign({}, state, {
        payload: action.payload
      });
    case UPDATE_XP:
      console.log('Case UPDATE_XP',action)

      // let copy_payloadxp = Object.assign({},state.payload.xp, {xp:action.payload.xp});
      // console.log('copy_payloadxp', copy_payloadxp)

      // let copy_payload = Object.assign({},state, {state,...{payload: copy_payloadxp}});
      // console.log('copy_payload', copy_payload)

      //return Object.assign({}, state, {
      //  copy_payload
      //});
      console.log('potato')
      console.log({payload: {
          web3: state.payload.web3,
          contract: state.payload.contract,
          xp: action.payload.xp
        }})
      return  {payload: {
          web3: state.payload.web3,
          contract: state.payload.contract,
          xp: action.payload.xp
        }}
    default:
      return state
  }
}
