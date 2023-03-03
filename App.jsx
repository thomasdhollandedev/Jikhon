import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeUnauth from './src/pages/Unauth/HomeUnauth.page';
import SignIn from './src/pages/SignIn/SignIn.page';
import SignUp from './src/pages/SignUp/SignUp.page';
import darkStyle from './src/assets/styles/darkStyle';
import ArrowBack from './src/assets/icons/arrowBack.svg'

const Stack = createNativeStackNavigator();

const Logo = () => {
  return (
    <TouchableOpacity>
      <Image
        style={styles.logo}
        source={require('./src/assets/images/logo/logo_jikhon_yellow.png')}
      />
    </TouchableOpacity>
  )
}

const options = ({ navigation }) => ({
  headerStyle: styles.headerBar,
  headerTintColor: darkStyle.primaryText__VAR,
  headerTitle: "",
  headerLeft: () => <ArrowBack onPress={() => navigation.goBack()} />,
  headerRight: () => <Logo />
})

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UnauthHome">
        <Stack.Screen
          name='UnauthHome'
          component={HomeUnauth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignIn'
          component={SignIn}
          options={options}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: darkStyle.primaryBackground__VAR,
  },
  logo: {
    width: 40,
    height: 40
  }
})

export default App;
