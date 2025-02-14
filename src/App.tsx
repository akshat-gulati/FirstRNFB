import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getApp, initializeApp } from '@react-native-firebase/app';
import Register from './Register';
import Login from './Login';

const firebaseApp = getApp();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Register/>
      </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }

})