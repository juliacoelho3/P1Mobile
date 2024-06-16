import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { styles } from './styles';

import DisneyLogo from './src/assets/imagens/logo.png';
import HeaderImage from './src/assets/imagens/header.png';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}  
      keyboardVerticalOffset={20} 
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={HeaderImage} style={styles.headerImage} />
        <View style={styles.logoContainer}>
          <Image source={DisneyLogo} style={styles.logo} />
        </View>
        <Text style={styles.promptText}>Enter your details to continue</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.7}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} activeOpacity={0.7}>
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordButton} activeOpacity={0.7}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
