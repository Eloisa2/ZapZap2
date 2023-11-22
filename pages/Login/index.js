import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { AuthContext } from './AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const { cadastrar, login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Verificar se há um token armazenado
    const checkToken = async () => {
      try {
        const authToken = await AsyncStorage.getItem('authToken');
        if (authToken) {
          navigation.replace('tabnavigator');
        }
      } catch (error) {
        console.error('Erro ao verificar o token:', error);
      }
    };

    checkToken();
  }, []); // Executar apenas uma vez, quando o componente é montado

  const handleCadastro = async () => {
    try {
      await login(email, password);

      navigation.replace('tabnavigator');
    } catch (error) {
      Alert.alert('Erro', 'Falha no cadastro. Verifique suas informações.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#010C13' }}>
      <Text style={{ fontSize: 30, marginBottom: 40, color: '#fff' }}>Login</Text>

      <TextInput
        placeholder='Email'
        placeholderTextColor={'gray'}
        style={{
          backgroundColor: '#02193B',
          borderRadius: 20,
          marginBottom: 20,
          padding: 12,
          width: 300,
          height: 40,
          color: '#fff'
        }}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        secureTextEntry={true}
        placeholder='Senha'
        placeholderTextColor={'gray'}
        style={{
          backgroundColor: '#02193B',
          borderRadius: 20,
          marginBottom: 20,
          padding: 12,
          width: 300,
          height: 40,
          color: '#fff'
        }}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity onPress={handleCadastro}>
        <View style={{ backgroundColor: '#012965', height: 40, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
          <Text style={{ color: '#fff' }}>ENTRAR</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
        <Text style={{ color: '#fff', marginTop: 20 }}>Não tem conta? Faça cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}
