import React, { Component } from 'react';
//import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyB-qVTVdrp9KtBVzvHQvsKz4wJXKmuMQy4',
  //     authDomain: 'auth-tutorial-aabab.firebaseapp.com',
  //     databaseURL: 'https://auth-tutorial-aabab.firebaseio.com',
  //     storageBucket: 'auth-tutorial-aabab.appspot.com',
  //     messagingSenderId: '710595420208'
  //   });
  // }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
