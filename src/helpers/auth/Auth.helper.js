import auth from "@react-native-firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '865902810099-6nhf0r2nqqelq2rhnlef270haaqq3c2o.apps.googleusercontent.com',
  });
  
const AuthHelper = {

  //Connexion via google
  async onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .then(() => {
        console.log('Compte créé!');
        props.navigation.navigate('Home')
      })
      .catch(error => {
        console.error(error);
        Alert(error);
      });
  }
  //Fin Connexion via google
    
}

export default AuthHelper;