import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Register" options={{headerShown: false}} component={Register} />
        <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} component={ForgotPassword} 
/>
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default Nav;
