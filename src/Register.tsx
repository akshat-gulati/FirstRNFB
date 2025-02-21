import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { registerUser } from "./Services/auth";
import { styles } from './SharedStyleSheet'

const Register = ({navigation}) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("err, Password Doesnt Match")
      return
    }
    try {
      await registerUser(email, password)
      Alert.alert("Success, Please check for verification email")
      setemail('')
      setpassword('')
      setconfirmPassword('')
    } catch (error: any) {
      Alert.alert('Error: ', error.message)

    }
  }
  
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex: 1, justifyContent: 'center', marginBottom: 100 }}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.enterDetails}>
          <View style={styles.eachSection}>
            <Text style={styles.heading}>Username</Text>
            <TextInput keyboardType='email-address' value={email} onChangeText={setemail} autoCapitalize='none' style={styles.input} placeholder='Enter your username' />
          </View>
          <View style={styles.eachSection}>
            <Text style={styles.heading}>Password</Text>
            <TextInput value={password} secureTextEntry autoCapitalize='none' onChangeText={setpassword} style={styles.input} placeholder='Enter your Password' />
          </View>
          <View style={styles.eachSection}>
            <Text style={styles.heading}>Confirm Password</Text>
            <TextInput value={confirmPassword} secureTextEntry autoCapitalize='none' onChangeText={setconfirmPassword} style={styles.input} placeholder='Enter your Confirm Password' />
          </View>
        </View>
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                          <Text>Login</Text>
                      </TouchableOpacity>
    </View>
  )
}

export default Register
