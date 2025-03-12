import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import HomeStyles from './Styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = () => {
  const navigation = useNavigation();
  const [projects, setProjects] = useState([]);

  // Load projects from AsyncStorage when the app starts
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const storedProjects = await AsyncStorage.getItem('projects');
        if (storedProjects) {
          setProjects(JSON.parse(storedProjects));
        }
      } catch (error) {
        console.error('Failed to load projects', error);
      }
    };
    loadProjects();
  }, []);

  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="white" style={{ marginTop: 23 }} />
        </TouchableOpacity>
        <Text style={[HomeStyles.headerTitle, { marginTop: 25 }]}>Smart</Text>
        <TouchableOpacity>
          <Feather name="wifi" size={24} color="white" style={{ marginTop: 25 }} />
        </TouchableOpacity>
      </View>

      <Text style={HomeStyles.subHeader}>Active Projects</Text>

      <View style={HomeStyles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" style={HomeStyles.searchIcon} />
        <TextInput placeholder="Search" style={HomeStyles.searchInput} />
        <Feather name="filter" size={20} color="gray" />
      </View>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={HomeStyles.projectItem}
            onPress={() => navigation.navigate('ProjectDetail', { project: item })}
          >
            <View>
              <Text style={HomeStyles.projectName}>{item.name}</Text>
              <Text style={HomeStyles.projectSection}>{item.sections}</Text>
              <Text style={HomeStyles.projectUpdated}>{item.updated}</Text>
            </View>
            <Feather name="more-horizontal" size={24} color="black" />
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={HomeStyles.newProjectButton}
        onPress={() => navigation.navigate('NewProject', { setProjects })}
      >
        <Feather name="plus" size={20} color="white" />
        <Text style={HomeStyles.newProjectText}>New Project</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;