import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../css/Person.css'
import imgDefault from '../static/default.png'

class Person extends Component{
  componentDidMount(){
    let {id, isLoaded, fetchPicture} = this.props;
    if (!isLoaded){
      fetchPicture(id);
    }
  }

  render(){
    let {firstname, lastname, email, isLoaded, avatarURL} = this.props;
    return(
      <div className={'card'}>
        <div className={'person'}>
          <h2>{firstname}</h2>
          <h3>{lastname}</h3>
          <h3>{email}</h3>
        </div>
        <div className={'avatar'}>
          <img src={isLoaded === true ? avatarURL : imgDefault} alt="Avatar person"/>
        </div>
      </div>
    )
  }
}

Person.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default Person
