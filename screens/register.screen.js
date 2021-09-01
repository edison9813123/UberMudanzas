import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  AuthBackground,
  AuthButton,
  AuthInput,
  AuthCover,
} from '../components/Auth/auth.styles';
import {Title, SpacerBottom, DefaultText} from '../constants';

export const RegisterScreen = ({navigation}) => {
  return (
    <AuthBackground>
      <AuthCover>
        <Title> Registro</Title>
        <SpacerBottom />
        <AuthInput
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <AuthInput label="Password" secureTextEntry />
        <SpacerBottom />
        <AuthButton onPress={() => navigation.navigate('Login')}>
          {' '}
          Registro
        </AuthButton>
        <SpacerBottom />
        <DefaultText>
         Ya tienes cuenta Inicia sesion?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text> Logindiver </Text>
          </TouchableOpacity>{' '}
        </DefaultText>
      </AuthCover>
    </AuthBackground>
  );
};
