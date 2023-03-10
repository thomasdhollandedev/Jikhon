import React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import auth from '@react-native-firebase/auth';
import Login from './src/components/Login/Login.page'
import SignUp from './src/components/SignUp/SignUp.page'
import Home from './src/components/Home/Home.page'
// import Profil from './src/components/Profil/Profil.page';


/*
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
*/
/*
const testFirebaseAuthAnonymous = async () => {
  try {
    const userCredential = await auth().signInAnonymously();
    console.log('Connected to Firebase anonymously with user ID:', userCredential.user.uid);
  } catch (e: any) {
    console.error('Failed to connect to Firebase:', e.message);
  }
};

testFirebaseAuthAnonymous();
*/

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{title:'', headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{title:'', headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{title:'', headerShown: false}}/>
        {/* <Stack.Screen name="Profil" component={Profil} options={{title:''}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
