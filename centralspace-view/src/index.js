import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global/index.css';
import App from './components/global/App';
import * as serviceWorker from './env/serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import globalReducer from './store/reducers/globalReducer';
import thunk from 'redux-thunk';
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";
import firebaseConfig from './env/firebaseConfig';

// appling middleware(redux thunk) // list of middleware
const store = createStore(
  globalReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebaseConfig)
  )
);

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change unregister() to register() below.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
