// This Demonstrates Firestore

import { Alert, StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addUserData, getUsers, updateUser, deleteUser } from '../Database/fireStoreCrud';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const UserCRUD: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const userList = await getUsers();
      setUsers(userList);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    if (!name || !email || !phone) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    const userData = { name, email, phone };
    try {
      if (editId) {
        await updateUser(editId, userData);
        Alert.alert('Success', 'User updated successfully');
      } else {
        await addUserData(userData);
        Alert.alert('Success', 'User added successfully');
      }
      setName('');
      setEmail('');
      setPhone('');
      setEditId(null);
      fetchUsers();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleEdit = (user: User) => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setEditId(user.id);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
      Alert.alert('Success', 'User deleted successfully');
      fetchUsers();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <Button title={editId ? 'Update User' : 'Add User'} onPress={handleSubmit} />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phone}</Text>
            <TouchableOpacity onPress={() => handleEdit(item)}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default UserCRUD;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth:1,
    borderRadius:20,
    margin:10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  editButton: {
    color: 'blue',
  },
  deleteButton: {
    color: 'red',
  },
});