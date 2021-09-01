import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  AuthBackground,
  AuthButton,
  AuthCover,
  AuthInput,
} from '../components/Auth/auth.styles';
import { AuthContext } from '../context/Auth/auth.context';
import { TextInput } from 'react-native-paper';
import { Title, DefaultText, SpacerBottom } from '../constants';
import axios from 'axios';

export const LoginScreen = ({ navigation }) => {
  let product;
  useEffect(() => {
    getUsers();
  }, []);
  const api = axios.create({
    baseURL: 'http://192.168.1.35:8000/api/v1/',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  const token = '2|H0tnK2hkUdtvMzErNQPNRPXlJdsW9m6x7NnD1xoE'
  const getUsers = async () => {
    const res = await api.get('users', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    if (res) {
      console.log(res.data.data)
      product = res.data.data
      console.log(product.name)
    }
    else {
      console.log(res + 'error')
    }

  }
  const { isAuth, onLogin } = useContext(AuthContext);
  

   return (
    <AuthBackground>
      <AuthCover>
        <Title> Login </Title>
        <SpacerBottom />
        <AuthInput label="User Name" />
        <AuthInput label="Password" secureTextEntry />
        <SpacerBottom />
        <AuthButton onPress={() => onLogin()}> Login</AuthButton>
        <SpacerBottom />
        <DefaultText>
          Aun no tienes cuenta ?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text> Registrate </Text>
          </TouchableOpacity>{' '}
        </DefaultText>
      </AuthCover>
    </AuthBackground>
  ); 
};
