import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles2';

import DisneyLogo from './src/assets/imagens/logo.png';

export default function OtpScreen() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={20}
    >
      <View style={styles.logoContainer}>
        <Image source={DisneyLogo} style={styles.logo} />
      </View>
      <Text style={styles.promptText}>Enter the OTP code</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOtpChange(index, value)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.continueButton} activeOpacity={0.7}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resendButton} activeOpacity={0.7}>
        <Text style={styles.resendButtonText}>Didn't receive the code? Resend</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
