import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import darkStyle from '../../assets/styles/darkStyle'
import global from '../../assets/styles/global'

const TopSectionUnauth = () => {
    return (
        <View style={styles.mainView}>
            <Image
                source={require('./../../assets/images/logo/logo_jikhon_yellow.png')}
                style={styles.image}
            />
            <Text style={[
                global.title,
                darkStyle.primaryText__COLOR,
                styles.text
            ]}>Jikhon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        marginTop: 25,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    image: {
        width: 40,
        height: 40
    },
    text: {
        fontSize: 35
    }
})

export default TopSectionUnauth