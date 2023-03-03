import auth from "@react-native-firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Sign = {

    onSignIn(email, password, handleSuccess) {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid;
                console.log('Utilisateur connecté, id: ', uid);
                //navigation.navigate('Home');
                handleSuccess();
            })
            .catch(error => {
                console.error(error);
                alert(error);
            });
    },

    onSignUp(email, password, handleSuccess) {
        if (email.length > 0 && password.length > 0) {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('Compte créé !');
                    //props.navigation.navigate('Home')
                    handleSuccess();
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('Cet email est déjà utilisé !');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('Email invalide !');
                    }

                    console.error(error);
                    alert(error);
                });
        } else {
            alert('Veuillez remplir tous les champs !');
        }
    },

    _isUserAuthenticated(handleSuccess) {
        if (auth().currentUser) {
            console.log('Utilisateur connecté, id:', auth().currentUser.uid);
            //navigation.navigate('Home');
            handleSuccess();
        } else {
            console.log('Utilisateur non connecté');
        }
    },

    async onGoogleSign(handleSuccess) {
        // Check if your device supports Google Play
        try {
            const response = await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            console.log('after GoogleSignin');
            console.log({GoogleSignin});
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();
            console.log('after idToken :' + idToken);
    
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            console.log('after googleCredential');
    
            // Sign-in the user with the credential
            return auth()
                .signInWithCredential(googleCredential)
                .then((response) => {
                    const uid = response.user.uid;
                    console.log('Utilisateur connecté avec google, id: ', uid);
                    handleSuccess();
                })
                .catch(error => {
                    console.error(error);
                    alert(error);
                });
            
        } catch (error) {
            console.log(error);
        }

    }
}

export default Sign;

/*
const handleSuccess = () => {
    console.log('success');
}

const signIn = (onSuccess) => {
    if (true) {
        onSuccess();
    }
}

signIn(handleSuccess);
*/