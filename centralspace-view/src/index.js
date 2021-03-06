import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import $ from 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app/App';
import * as serviceWorker from './env/serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, useSelector } from 'react-redux';
import  globalReducer from './app/beautypage/reducers';
import thunk from 'redux-thunk';
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from "react-redux-firebase";
import firebase from "firebase/app";
import firebaseConfig from './env/firebaseConfig';
import Loader from './app/beautypage/components/utils/Loader';

// appling middleware(redux thunk) // list of middleware
const store = createStore(
  globalReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, firebaseConfig)
    // render DOM only when we finish this action (when we refresh we have LogOut Panel and next LogIn Panel)
    // rendering faster than firebase action
  )
);

// firebase.profile -> user details other than mail,uid ...
const reactReduxFirebaseProviderConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const reactReduxFirebaseProviderProps = {
  firebase,
  config: reactReduxFirebaseProviderConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions'
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="container"> <Loader /> </div>
  return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...reactReduxFirebaseProviderProps}>
      <React.StrictMode>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change unregister() to register() below.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
