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
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

//Configuration
// GoogleSignin.configure({
//   webClientId: '865902810099-6nhf0r2nqqelq2rhnlef270haaqq3c2o.apps.googleusercontent.com',
// });
//Fin configuration

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Vérifier si un utilisateur est déjà connecté
  useEffect(() => {
    _isUserAuthenticated();
  }, []);

  const _isUserAuthenticated = () => {
    if (auth().currentUser) {
      console.log("L'utilisateur est déjà connecté, son id est: ", auth().currentUser.uid);
      props.navigation.navigate('Home');
    } else {
      console.log("L'utilisateur n'est pas connecté");
    }
  };

  //Connexion
  const onLoginPress = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        console.log("L'utilisateur est connecté, son id est: ", uid);
        props.navigation.navigate('Home')
      })
      .catch(error => {
        console.error(error);
        Alert(error);
      });
  }
  //Fin connexion

  //Connexion via google
  // async function onGoogleButtonPress() {
  //   // Check if your device supports Google Play
  //   console.log('dans la fonction');
  //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //   console.log('après GoogleSignin');
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();
  //   console.log('idToken :' + idToken);

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //   console.log('googleCredential :' + googleCredential);

  //   // Sign-in the user with the credential
  //   return auth()
  //     .signInWithCredential(googleCredential)
  //     .then(() => {
  //       console.log('Utilisateur connecté!');
  //       props.navigation.navigate('Home')
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       Alert(error);
  //     });
  // }
  //Fin Connexion via google

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
        onPress={() => onLoginPress()}>
        <Text style={styles.buttonTitle}>Se connecter</Text>
      </TouchableOpacity>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>Pas de compte? <Text onPress={() => props.navigation.navigate('SignUp')} style={styles.footerLink}>Créer un compte</Text></Text>
      </View>
      <View style={styles.bottomContent}>
        <TouchableOpacity style={styles.googleButton} onPress={() => onGoogleButtonPress().then(() => console.log('Connecté avec google !'))}>
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

export default Login;