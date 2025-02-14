import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { loginUser } from "./Services/auth";
import { styles } from './SharedStyleSheet'

const Login = () => {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', "please Enter you id and password ")
            return
        }
        try {
            const { emailVerified } = await loginUser(email, password)
            if(emailVerified) {
                Alert.alert("Success", "logged-in")
                setemail('')
                setpassword('')
            }
            else{
                Alert.alert("Error", "Email not verified")

            }
        } catch (error) {
            Alert.alert("Error", "unknown error")


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
                </View>
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

