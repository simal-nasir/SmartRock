import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import LoginStyles from './Styles';

export default function LoginPage() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleLogin = () => {
    if (username === 'Admin' && password === 'admin') {
      alert('Login Successful');
      navigation.navigate('HomePage');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <View style={LoginStyles.container}>
      {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}

      <Text style={LoginStyles.subtitle}>
        Real-time Concrete Strength & Temperature
      </Text>

      <View style={LoginStyles.formContainer}>

        <TextInput 
          style={LoginStyles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Email or username*"
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