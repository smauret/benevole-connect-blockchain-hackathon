import React from 'react';
import ReactDOM from 'react-dom';
import ContainerApp from '../containers/ContainerApp';
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { Provider } from 'react-redux'

it('renders without crashing', () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><ContainerApp /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
