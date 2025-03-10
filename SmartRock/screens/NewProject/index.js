import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NewProjectStyles as styles } from './Styles'
import { Ionicons } from '@expo/vector-icons';

const NewProject = () => {
  const navigation = useNavigation();
  const [projectName, setProjectName] = useState('');
  const [projectLocation, setProjectLocation] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="close" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Project</Text>
      </View>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Project Name*"
        value={projectName}
        onChangeText={setProjectName}
      />

      <TextInput
        style={styles.input}
        placeholder="Project Location"
        value={projectLocation}
        onChangeText={setProjectLocation}
      />

      {/* Location Description */}
      <Text style={styles.locationText}>
        Location of your project will be used to derive ambient conditions.{' '}
        <Text style={styles.useLocation}>Use my location</Text> use my location{' '}
        <Text style={styles.selectMap}>select on map.</Text>
      </Text>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} disabled={!projectName}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewProject;