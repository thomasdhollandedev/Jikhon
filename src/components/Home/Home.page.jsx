import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import auth from "@react-native-firebase/auth";


const Home = (props) => {

    //Avoir l'id utilisateur
    const [userID, setUserID] = useState('');

    useEffect(() => {
        setUserID(auth().currentUser.uid);
    }, []);

    //Transférer les informations utilisateur à la page profil
    console.log('Props:', props);

    // const onProfil = (userID) => {
    //     props.navigation.navigate('Profil', {
    //         id: userID
    //     });
    // };

    //Vérifier si un utilisateur est déjà connecté
    if (auth().currentUser) {
        console.log("L'utilisateur est déjà connecté, son id est: ", auth().currentUser.uid);
        props.navigation.navigate('Home');
    } else {
        console.log("L'utilisateur n'est pas connecté");
        props.navigation.navigate('Login');
    }

    //Bouton de déconnexion
    const onSignOut = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!');
                props.navigation.navigate('Login');
            })
            .catch(error => {
                console.error(error);
                Alert(error);
              });
    };

    return (

        <View>
            <Text> Home </Text>
            {/* <Text onPress={() => onProfil(userID)}> ID Utilisateur: {userID}</Text> */}
            <Text onPress={() => onSignOut()}>Se déconnecter</Text>
        </View>
    );
}

export default Home;