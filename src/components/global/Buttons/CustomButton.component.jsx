import React from 'react'
import global from '../../../assets/styles/global'
import lightStyle from '../../../assets/styles/lightStyle'
import darkStyle from '../../../assets/styles/darkStyle'
import { Button } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

const CustomButton = ({ textButton = '', primary = true, disable = false, actionFunction = () => { } }, additionalStyle = {}) => {
  return (
    <View style={[
      styles.view,
      primary ? darkStyle.primaryBtnShadow : darkStyle.secondaryBtnShadow,
      ]}>
      <Button
        uppercase
        textColor={
          primary ? darkStyle.textPrimaryElement__VAR : darkStyle.primaryText__VAR
        }
        style={
          [
            // primary ? darkStyle.primaryElement__BG : darkStyle.secondaryElement__BG,
            {
              borderRadius: 10,
              width: '100%',
              height: 40,
            },
            additionalStyle
          ]
        }
        labelStyle={global.textButton}
        disabled={disable}
        onPress={actionFunction}
      >
        {textButton}
      </Button >
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    width: '80%',
    borderRadius: 10,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CustomButton