import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      header: {
        flexDirection: 'row',
        backgroundColor: 'green',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 20,
        marginTop: 5,
      },
      subHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: 'black',
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        marginHorizontal: 15,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 10,
      },
      searchIcon: {
        marginRight: 5,
      },
      searchInput: {
        flex: 1,
        fontSize: 16,
        color: 'black',
      },
      projectItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginHorizontal: 15,
      },
      projectImage: {
        width: 40,
        height: 40,
        marginRight: 10,
      },
      projectName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      },
      projectSection: {
        fontSize: 14,
        color: 'gray',
      },
      projectUpdated: {
        fontSize: 14,
        color: 'blue',
      },
      newProjectButton: {
        flexDirection: 'row',
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        position: 'absolute',
        bottom: 20,
        left: 15,
        right: 15,
      },
      newProjectText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 5,
      },
});

export default HomeStyles;