import Web3 from 'web3';
import TruffleContract from 'truffle-contract'
import BenevoleConnect from '../build/contracts/BenevoleConnect'
export const WEB3_CONNECTED = 'WEB3_CONNECTED'
export const WEB3_DISCONNECTED = 'WEB3_DISCONNECTED'
export const UPDATE_XP = 'UPDATE_XP'

export const web3Connect = () => {
  return async (dispatch) => {
    /*eslint-disable */

    let output = (typeof web3 !== 'undefined') // web3 given by metamask
      ? { type: WEB3_CONNECTED, payload: { web3: new Web3(web3.currentProvider), isConnected: true, contract:{}, xp:100 } }
      : { type: WEB3_DISCONNECTED, payload: { web3: null, isConnected: false } };  // comment out for optional section
    // : { type: WEB3_CONNECTED, payload: { web3: new Web3(new Web3.providers.HttpProvider(web3Location)), isConnected: true } }  // comment in for optional section
    /*eslint-enable */

    let contract = await TruffleContract(BenevoleConnect);
    await contract.setProvider(output.payload.web3);

    output.payload.contract=contract;
    console.log('output', output)
    dispatch(output)
  }
}

export function web3Connected ({ web3, isConnected }) {
  return {
    type: WEB3_CONNECTED,
    payload: {
      web3,
      isConnected
    }
  }
}

export function web3Disconnected () {
  return {
    type: WEB3_DISCONNECTED,
    payload: {
      web3: null,
      contract: null,
      isConnected: false
    }
  }
}

export function updateXP (xp) {
  console.log('xp in action: ', xp)
  return {
    type: UPDATE_XP,
    payload: {
      xp: xp
    }
  }
}

//web3.currentProvider.publicConfigStore.on('update', callback); ??
