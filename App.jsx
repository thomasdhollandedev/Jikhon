import React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import auth from '@react-native-firebase/auth';
import SignIn from './src/pages/SignIn/SignIn.page'
import SignUp from './src/pages/SignUp/SignUp.page'
import Home from './src/pages/Home/Home.page'
// import Profil from './src/pages/Profil/Profil.page';


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
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn} options={{ title: '', headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ title: '', headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ title: '', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
