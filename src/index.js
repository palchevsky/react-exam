import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './store';
import './index.css';
import {AppConnect} from './store/connects';
import * as serviceWorker from './serviceWorker';

const store = storeFactory()

window.React = React
window.store = store

render(
  <Provider store = {store}> 
    <AppConnect />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
