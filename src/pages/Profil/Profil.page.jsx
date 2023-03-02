import React from 'react';
import {
    View,
    Text,
} from 'react-native';
/*
import { Card, ListItem, Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import * as commonStyle from '../../utils/commonStyle';
*/

const Profil = (props) => {

    const {id} = props.route.params;

    return (
        <View>
            <Text>Test Profil</Text>
            <Text>ID Utilisateur: {id}</Text>
        </View>
    );
};


export default Profil;