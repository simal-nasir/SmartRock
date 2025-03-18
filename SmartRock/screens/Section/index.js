import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch, Modal, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import SectionStyles from "./Styles";
import sectionTypes from "../../constants/sectionTypes";

const mixes = ["Mix 1", "Mix 2", "Mix 3"];
const thresholds = ["Threshold 1", "Threshold 2", "Threshold 3"];
const floorPlans = ["Plan 1", "Plan 2", "Plan 3"];

const Section = ({ navigation }) => {
  const [formData, setFormData] = useState({
    sectionName: "",
    sectionType: null,
    allowInheritance: false,
    mix: null,
    threshold: null,
    floorPlan: null,
  });

  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [currentSelection, setCurrentSelection] = useState("");

  const openModal = (type) => {
    setCurrentSelection(type);
    setModalVisible(true);
  };

  const selectItem = (item) => {
    setFormData({
      ...formData,
      [currentSelection === "SectionType" ? "sectionType" : currentSelection.toLowerCase()]: item
    });
    setModalVisible(false);
  };
  
  const validateForm = () => {
    let newErrors = {};
    if (!formData.sectionName.trim()) newErrors.sectionName = "Required";
    if (!formData.sectionType) newErrors.sectionType = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <View style={SectionStyles.container}>
      {/* Header */}
      <View style={SectionStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
        <Text style={SectionStyles.headerTitle}>New Section</Text>
      </View>

      {/* Section Name */}
      <View style={SectionStyles.inputContainer}>
        <Text style={SectionStyles.label}>Section Name*</Text>
        <TextInput
          style={SectionStyles.input}
          placeholder="Enter Section Name"
          value={formData.sectionName}
          onChangeText={(text) => setFormData({ ...formData, sectionName: text })}
        />
        {errors.sectionName && <Text style={SectionStyles.errorText}>{errors.sectionName}</Text>}
      </View>

      {/* Section Type */}
      <TouchableOpacity style={SectionStyles.selectItem} onPress={() => openModal("SectionType")}>
        <Text style={SectionStyles.label}>Section Type*</Text>
        <Text style={SectionStyles.selectText}>{formData.sectionType?.title || "Select"}</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>
      {errors.sectionType && <Text style={SectionStyles.errorText}>{errors.sectionType}</Text>}

      {/* Allow Inheritance */}
      <View style={SectionStyles.switchContainer}>
        <Text style={SectionStyles.label}>Allow Section Inheritance</Text>
        <Switch
          value={formData.allowInheritance}
          onValueChange={(value) => setFormData({ ...formData, allowInheritance: value })}
        />
      </View>

      {/* Mix Selection */}
      <TouchableOpacity style={SectionStyles.selectItem} onPress={() => openModal("Mix")}>
        <Text style={SectionStyles.label}>Mix</Text>
        <Text style={SectionStyles.selectText}>{formData.mix || "Select"}</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      {/* Threshold Selection */}
      <TouchableOpacity style={SectionStyles.selectItem} onPress={() => openModal("Threshold")}>
        <Text style={SectionStyles.label}>Threshold</Text>
        <Text style={SectionStyles.selectText}>{formData.threshold || "Select"}</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      {/* Floor Plan Selection */}
      <TouchableOpacity style={SectionStyles.selectItem} onPress={() => openModal("FloorPlan")}>
        <Text style={SectionStyles.label}>Floor Plan</Text>
        <Text style={SectionStyles.selectText}>{formData.floorPlan || "Select"}</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity style={SectionStyles.saveButton} onPress={handleSave}>
        <Text style={SectionStyles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={SectionStyles.modalContainer}>
          <View style={SectionStyles.modalContent}>
            <Text style={SectionStyles.modalTitle}>Select {currentSelection}</Text>
            <FlatList
              data={
                currentSelection === "SectionType"
                  ? sectionTypes
                  : currentSelection === "Mix"
                  ? mixes
                  : currentSelection === "Threshold"
                  ? thresholds
                  : floorPlans
              }
              keyExtractor={(item) => (typeof item === "object" ? item.id : item)}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={SectionStyles.modalItem}
                  onPress={() => selectItem(item)}
                >
                  <Text style={SectionStyles.modalItemText}>
                    {typeof item === "object" ? item.title : item}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={SectionStyles.modalClose}>
              <Text style={SectionStyles.modalCloseText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Section;