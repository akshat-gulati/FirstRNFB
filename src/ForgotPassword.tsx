import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { sendPasswordResetEmail } from "./Services/auth";
import { styles } from "./SharedStyleSheet";

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState("");

    const handleForgotPassword = async () => {
        if (!email) {
            Alert.alert("Email is empty");
            return;
        }
        try {
            await sendPasswordResetEmail(email);
            Alert.alert("Success", "Password reset link sent to your email address");
            setEmail("");
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            Alert.alert("Error", errorMessage);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ width: "100%", flex: 1, justifyContent: 'center', marginBottom: 100 }}>
                <Text style={styles.heading}>Forgot Password</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={styles.input}
                    placeholder="Enter Your Email"
                />
                <TouchableOpacity onPress={handleForgotPassword} style={styles.button}>
                    <Text>Reset Password</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                    <Text>Go Back to Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgotPassword;