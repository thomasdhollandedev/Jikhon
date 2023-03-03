import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-paper'
import darkStyle from '../../../assets/styles/darkStyle'

const CustomSwitch = (switchOn = false) => {
    const [isSwitchOn, setIsSwitchOn] = useState(switchOn)

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)

    return (
        <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color={darkStyle.primaryElement__VAR}
        />
    )
}

export default CustomSwitch