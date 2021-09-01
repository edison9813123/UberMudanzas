import React, { useContext, useEffect } from 'react';
import { AuthBackground, AuthButton } from '../components/Auth/auth.styles';
import { SpacerBottom } from '../constants';
import { Text, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import axios from 'axios';


export const MainScreen = ({ navigation }) => {

  return (
    <AuthBackground>


      <View>
        <Text style={styles.title}> Uber Mudanzas </Text>

        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate('Login')}>
          {' '}
          Login
        </AuthButton>
        <SpacerBottom />
        <AuthButton
          icon="email"
          onPress={() => navigation.navigate('Register')}>
          {' '}
          Registro
        </AuthButton>
      </View>
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: 'Tajawal-Bold',
    marginBottom: 20,
  },
});
