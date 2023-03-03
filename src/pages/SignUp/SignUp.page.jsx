import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
} from 'react-native';
import auth from "@react-native-firebase/auth";
import Sign from '../../helpers/Sign/Sign.helper';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

//Configuration
GoogleSignin.configure({
  webClientId: '865902810099-6nhf0r2nqqelq2rhnlef270haaqq3c2o.apps.googleusercontent.com',
});
//Fin configuration

const SignUp = ({navigation}) => {

  //Création de compte via email
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSuccess = () => {
    navigation.navigate('Home');
  }

  return (

    <View style={styles.container}>
      <Text style={styles.textIntroduction}>Bienvenue sur Jikhon !</Text>
      <TextInput
        style={styles.input}
        placeholder='E-mail'
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder='Password'
        onChangeText={(text) => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Sign.onSignUp(email, password, handleSuccess)}>
        <Text style={styles.buttonTitle}>Créer un compte</Text>
      </TouchableOpacity>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>Déjà un compte? <Text onPress={() => navigation.navigate('SignIn')} style={styles.footerLink}>Se connecter</Text></Text>
      </View>
      <View style={styles.bottomContent}>
        <TouchableOpacity style={styles.googleButton} onPress={() => Sign.onGoogleSign(handleSuccess).then(() => console.log('Connecté avec google !'))}>
          <Image
            style={styles.googleIcon}
            source={{
              uri: "https://i.ibb.co/j82DCcR/search.png",
            }}
          />
          <Text style={styles.googleButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textIntroduction: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    width: 300,
  },

  logo: {
    marginTop: 100,
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    width: 200,
  },
  button: {
    backgroundColor: '#788eec',
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    width: 100,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d'
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  googleButton: {
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 34,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  googleButtonText: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600'
  },
  googleIcon: {
    height: 24,
    width: 24
  }
});

export default SignUp;