import { View, Text, Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import darkStyle from '../../../assets/styles/darkStyle'

const CustomSwitch = ({ switchOn = false, text = null }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(switchOn)

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)

    return (
        <View style={styles.view}>
            <Switch
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
                trackColor={{
                    false: darkStyle.secondaryElement__VAR,
                    true: darkStyle.primaryElement__VAR
                }}
                thumbColor={darkStyle.primaryText__VAR}
                ios_background={darkStyle.secondaryElement__VAR}
            />
            {text !== null &&
                <Text>{text}</Text>
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
    }
})

export default CustomSwitch