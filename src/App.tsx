import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getApp, initializeApp } from '@react-native-firebase/app';
import Register from './Register';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Nav from './Nav';
import UserCRUD from './Components/UserCRUD';

// const firebaseApp = getApp();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Nav /> */}
      <UserCRUD />
      </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }

})