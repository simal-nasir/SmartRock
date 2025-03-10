import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import LoginStyles from './Styles';

export default function LoginPage() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleLogin = () => {
    if (username.toLowerCase() === 'admin' && password === 'admin') {
      Alert.alert('Success', 'Login Successful', [
        { text: 'OK', onPress: () => navigation.navigate('HomePage') }
      ]);
    } else {
      Alert.alert('Error', 'Invalid Credentials');
    }
  };

  return (
    <View style={LoginStyles.container}>
      <Text style={LoginStyles.subtitle}>
        Real-time Concrete Strength & Temperature
      </Text>

      <View style={LoginStyles.formContainer}>

        <TextInput 
          style={LoginStyles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Email or username*"
          autoCapitalize="none"
        />

        <TextInput 
          style={LoginStyles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="Password*"
        />

        <CustomButton title="Sign In" onPress={handleLogin} />

        <TouchableOpacity 
          style={LoginStyles.createCompanyButton}
          onPress={() => alert('Create New Company Clicked')}
        >
          <Text style={LoginStyles.createCompanyText}>Create New Company</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Forgot Password Clicked')}>
          <Text style={LoginStyles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}