import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity 
      style={{
        width: '90%',
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        height: 50,
      }} 
      onPress={onPress}
    >
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;