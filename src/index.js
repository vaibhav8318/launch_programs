import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';
import Router from './router';
import store from './redux/store';
import rootSaga from './redux/sagas';
import './config';
import '../styles/main.scss';

store.runSaga(rootSaga);

loadableReady(() => {
  ReactDom.hydrate(
    <Provider store={store}>
      <Router/>
    </Provider>,
    document.querySelector('#app')
  );
});
