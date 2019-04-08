import {Component} from "react";
import React from "react";

class Account extends Component{
  render(){
    let {address} = this.props;
    return(
      <div className={'card'}>
        <div className={'person'}>
          <h2>{address}</h2>
        </div>
      </div>
    )
  }
}

export default Account
