import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { loginUser } from "./Services/auth";
import { styles } from './SharedStyleSheet';
import { NavigationProp } from '@react-navigation/native';

const Login = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', "Please enter your email and password.");
            return;
        }
        try {
            const { emailVerified } = await loginUser(email, password);
            if (emailVerified) {
                Alert.alert("Success", "Logged in successfully.");
                setEmail('');
                setPassword('');
            } else {
                Alert.alert("Error", "Email not verified.");
            }
        } catch (error) {
            Alert.alert("Error", "An unknown error occurred.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ width: "100%", flex: 1, justifyContent: 'center', marginBottom: 100 }}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.enterDetails}>
                    <View style={styles.eachSection}>
                        <Text style={styles.heading}>Username</Text>
                        <TextInput
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize='none'
                            style={styles.input}
                            placeholder='Enter your username'
                        />
                    </View>
                    <View style={styles.eachSection}>
                        <Text style={styles.heading}>Password</Text>
                        <TextInput
                            value={password}
                            secureTextEntry
                            autoCapitalize='none'
                            onChangeText={setPassword}
                            style={styles.input}
                            placeholder='Enter your password'
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={{ alignSelf: 'flex-end', marginTop: 10 }}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.button}>
                <Text>Create a New Account</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;