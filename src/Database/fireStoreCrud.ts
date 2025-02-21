import firestore from '@react-native-firebase/firestore';

interface UserData {
    [key: string]: any;
}

export const addUserData = async (userData: UserData): Promise<void> => {
    try {
        await firestore().collection('users').add(userData);
        console.log('User Added Successfully');
    } catch (error) {
        console.error('Error adding user data', error);
    }
};

export const getUsers = async (): Promise<UserData[]> => {
    try {
        const usersSnapshot = await firestore().collection('users').get();
        const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Fetched Users', users);
        return users;
    } catch (error) {
        console.error('Error Fetching data', error);
        return [];
    }
};

export const updateUser = async (id: string, updatedData: Partial<UserData>): Promise<void> => {
    try {
        await firestore().collection('users').doc(id).update(updatedData);
        console.log('User Updated Successfully');
    } catch (error) {
        console.error('Error Updating user data', error);
    }
};

export const deleteUser = async (id: string): Promise<void> => {
    try {
        await firestore().collection('users').doc(id).delete();
        console.log('User Deleted Successfully');
    } catch (error) {
        console.error('Error Deleting user data', error);
    }
};