import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01030F',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  promptText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  otpInput: {
    width: 40,
    height: 50,
    backgroundColor: '#01030F',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#fff',
  },
  continueButton: {
    width: '80%',
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: 10,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendButton: {
    marginTop: 10,
  },
  resendButtonText: {
    color: '#007BFF',
    fontSize: 14,
  },
});
