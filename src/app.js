import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB-qVTVdrp9KtBVzvHQvsKz4wJXKmuMQy4',
      authDomain: 'auth-tutorial-aabab.firebaseapp.com',
      databaseURL: 'https://auth-tutorial-aabab.firebaseio.com',
      storageBucket: 'auth-tutorial-aabab.appspot.com',
      messagingSenderId: '710595420208'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
