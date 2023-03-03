import { View, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../global/Inputs/CustomInput.component'
import CustomSwitch from '../global/Switches/CustomSwitch.component'

const FormSectionSignUp = () => {
    return (
        <View style={styles.view}>
            <CustomInput
                labelInput='Email *'
            />
            <CustomInput
                labelInput='Mot de passe *'
                isPasswordInput={true}
            />
            <CustomInput
                labelInput='Confirmer mot de passe *'
                isPasswordInput={true}
            />
            <CustomSwitch />
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
        marginTop: 30
    }
})

export default FormSectionSignUp