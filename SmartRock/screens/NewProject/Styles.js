import { StyleSheet } from 'react-native';

export const NewProjectStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:50,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    marginBottom: 15,
  },
  locationText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  useLocation: {
    color: 'green',
    fontWeight: 'bold',
  },
  selectMap: {
    color: 'green',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});