import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01030F',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  headerImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  logoContainer: {
    position: 'absolute',
    top: 165,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  promptText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 100,
    marginBottom: 50,
  },
  input: {
    width: '90%',
    backgroundColor: '#01030F',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'android' ? 15 : 10,
    marginTop: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    width: '90%',
    backgroundColor: '#01030F',
    borderColor: '#007BFF',
    borderWidth: 1,
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: 10,
  },
  signupButtonText: {
    color: '#007BFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 14,
    alignSelf: 'flex-start', 
    marginLeft: '65%',
  },
});
