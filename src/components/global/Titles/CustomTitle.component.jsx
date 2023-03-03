import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import global from '../../../assets/styles/global'
import darkStyle from '../../../assets/styles/darkStyle'

const CustomTitle = ({ title }) => {
    return (
        <View
            style={styles.view}
        >
            <Text
            style={[
                global.title,
                darkStyle.primaryText__COLOR,
            ]}
            >
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20
    },
    text: {

    }
})

export default CustomTitle