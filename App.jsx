import React from 'react'
import HomeUnauth from './src/pages/Unauth/HomeUnauth.page';
import { View } from 'react-native';
import darkStyle from './src/assets/styles/darkStyle';

const App = () => {
  return (
    <View style={{backgroundColor: darkStyle.primaryBackground__VAR, height: '100%'}}>
      <HomeUnauth />
    </View>
  )
}

export default App