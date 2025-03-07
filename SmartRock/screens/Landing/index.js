import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import LandingPageStyles from './Styles';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function LandingPage() {
  const navigation = useNavigation();

  return (
    <View style={LandingPageStyles.container}>
      {/* <Image source={require()} style={LandingPageStyles.logo} /> */}
      <Text style={LandingPageStyles.title}>Thank you for downloading SmartRock®</Text>
      <Text style={LandingPageStyles.description}>
        By clicking Accept, you are agreeing to Giatec’s{' '}
        <Text style={LandingPageStyles.link}>End User License Agreement</Text>
      </Text>
      <TouchableOpacity style={LandingPageStyles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={LandingPageStyles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
}