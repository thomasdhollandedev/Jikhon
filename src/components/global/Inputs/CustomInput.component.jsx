import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import darkStyle from '../../../assets/styles/darkStyle';
import global from '../../../assets/styles/global';
import { StyleSheet } from 'react-native';

const CustomInput = ({ labelInput = "", valueInput = "", isPasswordInput = false, additionalStyle = {} }) => {
    const [text, setText] = useState(valueInput)
    const [isVisible, setIsVisible] = useState(false)
    return (
        <TextInput
            mode='outlined'
            label={labelInput}
            value={text}
            activeOutlineColor={darkStyle.primaryElement__VAR}
            selectionColor={darkStyle.primaryText__COLOR}
            outlineColor={darkStyle.secondaryElement__VAR}
            textColor={darkStyle.primaryText__VAR}
            right={
                isPasswordInput
                    ?
                    <TextInput.Icon
                        icon={isVisible ? "eye-off" : "eye"}
                        iconColor={darkStyle.primaryText__VAR}
                        onPress={() => setIsVisible(!isVisible)}
                    />
                    :
                    undefined
            }
            secureTextEntry={
                isPasswordInput ? !isVisible : isPasswordInput
            }
            error={false}
            outlineStyle={styles.outlineStyle}
            style={
                [
                    global.textInput,
                    styles.input,
                    additionalStyle
                ]
            }
            onChangeText={text => setText(text)}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        backgroundColor: darkStyle.primaryBackground__VAR
    },
    outlineStyle: {
        borderRadius: 10
    }
})

export default CustomInput