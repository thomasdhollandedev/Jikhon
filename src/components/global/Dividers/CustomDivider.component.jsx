import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import darkStyle from '../../../assets/styles/darkStyle'

const CustomDivider = ({ text = null, additionalStyleView = {} }) => {
    return (
        <View
            style={[
                styles.mainView,
                additionalStyleView
            ]}
        >
            {text === null
                ?
                <View
                    style={[
                        styles.uniqueDivider,
                        darkStyle.secondaryElement__BG
                    ]}
                />
                : [
                    <View
                        key="dividerLeft"
                        style={[
                            styles.dividerLeft,
                            darkStyle.secondaryElement__BG
                        ]}
                    />,
                    <Text
                        key="dividerText"
                        style={[
                            styles.dividerText,
                            darkStyle.secondaryText__COLOR
                        ]}
                    >
                        {text}
                    </Text>,
                    <View
                        key="dividerRight"
                        style={[
                            styles.dividerRight,
                            darkStyle.secondaryElement__BG
                        ]}
                    />
                ]}
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    uniqueDivider: {
        flex: 1,
        height: 2,
        borderRadius: 10
    },
    dividerLeft: {
        flex: 1,
        height: 2,
        borderRadius: 10
    },
    dividerRight: {
        flex: 1,
        height: 2,
        borderRadius: 10
    },
    dividerText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14
    }
})

export default CustomDivider
