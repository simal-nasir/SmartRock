import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import SectionStyles from './Styles';

const Section = ({ navigation }) => {
  const [sectionName, setSectionName] = useState('');
  const [sectionType, setSectionType] = useState('');
  const [allowInheritance, setAllowInheritance] = useState(false);
  const [mix, setMix] = useState('');
  const [threshold, setThreshold] = useState('');
  const [floorPlan, setFloorPlan] = useState('');

  return (
    <View style={SectionStyles.container}>
      {/* Header */}
      <View style={SectionStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
        <Text style={SectionStyles.headerTitle}>New Section</Text>
      </View>

      {/* Section Name Input */}
      <View style={SectionStyles.inputContainer}>
        <Text style={SectionStyles.label}>Section Name*</Text>
        <TextInput
          style={SectionStyles.input}
          placeholder="Section Name"
          value={sectionName}
          onChangeText={setSectionName}
        />
        {!sectionName && <Text style={SectionStyles.errorText}>Required</Text>}
      </View>

      {/* Section Type */}
      <TouchableOpacity style={SectionStyles.selectItem}>
        <Text style={SectionStyles.label}>Section Type*</Text>
        <Text style={SectionStyles.selectText}>{sectionType || 'Select'}</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      {/* Allow Section Inheritance */}
      <View style={SectionStyles.switchContainer}>
        <Text style={SectionStyles.label}>Allow Section Inheritance</Text>
        <Switch
          value={allowInheritance}
          onValueChange={setAllowInheritance}
        />
      </View>
      <Text style={SectionStyles.switchDescription}>
        Allows sensors to inherit a mix or threshold from their section.
      </Text>

      {/* Mix */}
      <TouchableOpacity style={SectionStyles.selectItem}>
        <Text style={SectionStyles.label}>Mix</Text>
        <Text style={SectionStyles.selectText}>{mix || 'Select'}</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      {/* Threshold */}
      <TouchableOpacity style={SectionStyles.selectItem}>
        <Text style={SectionStyles.label}>Threshold</Text>
        <Text style={SectionStyles.selectText}>{threshold || 'Select'}</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      {/* Floor Plan */}
      <TouchableOpacity style={SectionStyles.selectItem}>
        <Text style={SectionStyles.label}>Floor Plan</Text>
        <Text style={SectionStyles.selectText}>{floorPlan || 'Select'}</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity style={SectionStyles.saveButton}>
        <Text style={SectionStyles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Section;