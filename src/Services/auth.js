import auth from '@react-native-firebase/auth';

export const registerUser = async (email, password) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        await userCredential.user.sendEmailVerification();
        return userCredential.user;
    } catch (error) {
        let errorMessage;
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = 'This email is already in use. Please use a different email address.';
                break;
            case 'auth/invalid-email':
                errorMessage = 'Invalid email.';
                break;
            case 'auth/weak-password':
                errorMessage = 'Please use a strong password.';
                break;
            default:
                errorMessage = 'An unknown error occurred.';
                break;
        }
        throw new Error(errorMessage);
    }
};


export const loginUser = async (email, password) => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password)
        const user = userCredential.user
        return { user, emailVerified: user.emailVerified }
    } catch (error) {
        let errorMessage
        switch (error.code) {
            case 'auth/wrong-password':
                errorMessage = 'Wrong Password'
                break;
            case 'auth/user-not-found':
                errorMessage = 'User Not Found!'
                break;

            default:
                errorMessage = 'Unknown Error'
                break;
        }
        throw new Error(errorMessage)
    }
}