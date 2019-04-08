import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import ContainerFilter from "./containers/ContainerFilter";
import ContainerListPerson from "./containers/ContainerListPerson";
import ContainerAccount from "./containers/ContainerAccount";
import ContainerSearchBar from "./containers/ContainerSearchBar"
import AppRouter from './router/AppRouter'

class App extends Component {

  componentDidMount(){
    this.props.connectWeb3();
    this.props.loadPersons();

  }

  render() {
    return (
      <div className="App">
          <ContainerSearchBar />
          <AppRouter/>
      </div>
    );
  }
}

export default App;
