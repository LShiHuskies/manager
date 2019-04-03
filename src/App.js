import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    const config = {
        apiKey: "AIzaSyDSihxucC69_t15fZJyRwHjiCzZ5jAnSF4",
        authDomain: "manager-e1eee.firebaseapp.com",
        databaseURL: "https://manager-e1eee.firebaseio.com",
        projectId: "manager-e1eee",
        storageBucket: "manager-e1eee.appspot.com",
        messagingSenderId: "23345917905"
      };
      firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
