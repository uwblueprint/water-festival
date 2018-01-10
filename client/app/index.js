import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import Container from './container';
import reducers from './reducers';

const initalState = {};

const store = createStore(
	reducers,
	initalState,
	applyMiddleware(logger)
);

export default class WaterFestivalApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
