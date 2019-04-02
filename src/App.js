import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

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
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
