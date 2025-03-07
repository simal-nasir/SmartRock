import { StyleSheet } from 'react-native';

const LandingPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C6B39',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
  },
  link: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  button: {
    width: '90%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2C6B39',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingPageStyles;