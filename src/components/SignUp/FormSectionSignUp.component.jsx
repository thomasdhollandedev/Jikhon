import { View, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../global/Inputs/CustomInput.component'
import CustomSwitch from '../global/Switches/CustomSwitch.component'
import CustomButton from '../global/Buttons/CustomButton.component'
import CustomDivider from '../global/Dividers/CustomDivider.component'
import GoogleButton from '../global/Buttons/GoogleButton.component'

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
            <CustomSwitch
                text="En m’inscrivant, j’accepte les CGU et la politique de confidentialité"
                additionalStyleView={{ marginTop: 10 }}
            />
            <CustomButton
                textButton="Je m'inscris"
                additionalStyleView={{ marginTop: 10 }}
            />
            <CustomDivider 
            text="ou continuer avec"
            additionalStyleView={{marginTop: 20, marginBottom: 20}} 
            />
            <GoogleButton />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: 10,
        marginTop: 30
    }
})

export default FormSectionSignUp