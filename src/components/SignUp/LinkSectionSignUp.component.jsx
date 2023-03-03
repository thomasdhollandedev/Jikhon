import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

const LinkSectionSignUp = ({redirection}) => {
    return (
        <View>
            <Text>Déjà inscrit</Text>
            <TouchableHighlight onPress={redirection}>
                <RedirectLink />
            </TouchableHighlight>
        </View>
    )
}

const RedirectLink = () => {
    return (
        <Text style={{ color: 'red' }}>test</Text>
    )
}


export default LinkSectionSignUp