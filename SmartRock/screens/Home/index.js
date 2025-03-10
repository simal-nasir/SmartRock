import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import HomeStyles from './Styles';
import { useNavigation } from '@react-navigation/native';

const projects = [
  { id: '1', name: 'app', sections: 'No Sections', updated: 'Updated never' }
];

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.header}>
        <TouchableOpacity >
          <Feather name="menu" size={24} color="white" style={{ marginTop: 23 }} />
        </TouchableOpacity>
        <Text style={[HomeStyles.headerTitle, { marginTop: 25 }]}>Smart</Text>
        <TouchableOpacity>
          <Feather name="wifi" size={24} color="white" style={{ marginTop: 25 }} />
        </TouchableOpacity>
      </View>

      <Text style={HomeStyles.subHeader}>Active Projects</Text>

      {/* Search Bar */}
      <View style={HomeStyles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" style={HomeStyles.searchIcon} />
        <TextInput placeholder="Search" style={HomeStyles.searchInput} />
        <Feather name="filter" size={20} color="gray" />
      </View>

      {/* Project List */}
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={HomeStyles.projectItem}>
            <View>
              <Text style={HomeStyles.projectName}>{item.name}</Text>
              <Text style={HomeStyles.projectSection}>{item.sections}</Text>
              <Text style={HomeStyles.projectUpdated}>{item.updated}</Text>
            </View>
            <TouchableOpacity>
              <Feather name="more-horizontal" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* New Project Button */}
      <TouchableOpacity style={HomeStyles.newProjectButton} onPress={() => navigation.navigate('NewProject')}>
        <Feather name="plus" size={20} color="white" />
        <Text style={HomeStyles.newProjectText}>New Project</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;