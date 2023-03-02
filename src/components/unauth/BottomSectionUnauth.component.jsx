import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../global/Buttons/CustomButton.component'

const BottomSectionUnauth = () => {
  return (
    <View style={styles.view}>
        <CustomButton textButton='Se connecter' />
        <CustomButton textButton="S'inscrire" primary={false} />
    </View>
  )
}

const styles = StyleSheet.create({
    view : {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 25
    }
})

export default BottomSectionUnauth