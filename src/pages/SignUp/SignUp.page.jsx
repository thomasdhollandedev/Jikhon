import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import darkStyle from '../../assets/styles/darkStyle'
import TitleSectionSignUp from '../../components/SignUp/TitleSectionSignUp.component'
import FormSectionSignUp from '../../components/SignUp/FormSectionSignUp.component'

const SignUp = () => {
  return (
    <View
      style={[
        darkStyle.primaryBackground__BG,
        styles.mainView
      ]}
    >
      <TitleSectionSignUp />
      <FormSectionSignUp />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    height: '100%'
  }
})

export default SignUp