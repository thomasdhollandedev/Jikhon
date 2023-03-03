import { View, Text, Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import darkStyle from '../../../assets/styles/darkStyle'
import global from '../../../assets/styles/global'

const CustomSwitch = ({ switchOn = false, text = null, additionalStyleView = {}, additionalStyleSwitch = {} }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(switchOn)

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)

    return (
        <View 
        style={[
            styles.view,
            additionalStyleView
        ]}
        >
            <Switch
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
                trackColor={{
                    false: darkStyle.secondaryElement__VAR,
                    true: darkStyle.primaryElement__VAR
                }}
                thumbColor={darkStyle.primaryText__VAR}
                ios_background={darkStyle.secondaryElement__VAR}
                style={[
                    additionalStyleSwitch
                ]}
            />
            {text !== null &&
                <Text
                    style={[
                        global.textPlaceholder,
                        darkStyle.primaryText__COLOR,
                        styles.text
                    ]}
                >
                    {text}
                </Text>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    view: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        flex: 1
    }
})

export default CustomSwitch