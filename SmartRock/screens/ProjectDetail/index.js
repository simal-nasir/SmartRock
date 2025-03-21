import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {ProjectDetailStyles as styles} from './Styles'
import { useNavigation } from '@react-navigation/native';


const ProjectDetail = () => {
  const route = useRoute();
  const project = route.params?.project || {};
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{project.name || 'Project Details'}</Text>

      <View style={styles.imageContainer}>
        {/* <Image source={require("")} style={styles.image} /> */}
      </View>

      <Text style={styles.noSectionsText}>No Sections</Text>
      <Text style={styles.descriptionText}>Sections are concrete pours.</Text>

      <TouchableOpacity style={styles.refreshButton}>
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.newSectionButton} onPress={() => navigation.navigate('Section')}>
        <Text style={styles.newSectionButtonText}>+ New Section</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProjectDetail;