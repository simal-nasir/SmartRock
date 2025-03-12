import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NewProjectStyles as styles } from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewProject = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const setProjects = route.params?.setProjects || (() => {});

  const [projectName, setProjectName] = useState('');
  const [projectLocation, setProjectLocation] = useState('');

  const handleSave = async () => {
    if (!projectName) return;

    const newProject = {
      id: Date.now().toString(),
      name: projectName,
      sections: 'No Sections',
      updated: 'Updated just now',
    };

    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects, newProject];

      // Save projects to AsyncStorage
      AsyncStorage.setItem('projects', JSON.stringify(updatedProjects));

      return updatedProjects;
    });

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
        Use current location? <Text style={styles.useLocation}>Yes</Text> | <Text style={styles.selectMap}>Select from Map</Text>
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