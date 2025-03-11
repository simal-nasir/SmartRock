import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NewProjectStyles as styles } from './Styles';

const NewProject = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const setProjects = route.params?.setProjects || (() => {});

  const [projectName, setProjectName] = useState('');
  const [projectLocation, setProjectLocation] = useState('');

  const handleSave = () => {
    if (!projectName) return;

    const newProject = {
      id: Date.now().toString(),
      name: projectName,
      sections: 'No Sections',
      updated: 'Updated just now',
    };

    setProjects((prevProjects) => [...prevProjects, newProject]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Project</Text>
      </View>

      <TextInput
        style={styles.input}
        value={projectName}
        onChangeText={setProjectName}
        placeholder="Project Name"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        value={projectLocation}
        onChangeText={setProjectLocation}
        placeholder="Project Location"
        placeholderTextColor="#888"
      />

      <Text style={styles.locationText}>
        Location of your project will be used to derive ambient conditions. <Text style={styles.useLocation}>Use my location</Text> use my location <Text style={styles.selectMap}>select on map.</Text>
      </Text>

      <TouchableOpacity
        style={[styles.saveButton, !projectName && { backgroundColor: '#ccc' }]}
        onPress={handleSave}
        disabled={!projectName}
      >
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewProject;