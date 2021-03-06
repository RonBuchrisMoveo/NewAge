import React from 'react';
import ReactDOM from 'react-dom';
import {App} from 'App';
import { Provider } from 'react-redux';
import store from 'js/store'


import "swiper/css/bundle";
import 'assets/styles/main.scss';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
