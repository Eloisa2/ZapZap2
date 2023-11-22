// AuthContext.js
import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'base-64';

import axios from 'axios';

const API_URL = 'http://10.0.2.2:8000';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const storeToken = async (token) => {

    try {
      await AsyncStorage.setItem('authToken', token);
      console.log('token armazenado com sucesso')
    } catch (error) {
      console.error('Erro ao armazenar o token:', error);
    }
  };

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      return token;
    } catch (error) {
      console.error('Erro ao obter o token:', error);
      return null;
    }
  };

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
    } catch (error) {
      console.error('Erro ao remover o token:', error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
  
      if (response.data.token) {
        const token = response.data.token;
        storeToken(token); // Armazenar o token no AsyncStorage
        setUser({ token }); // Atualizar o estado do usuário
        console.log('Login efetuado com sucesso');
        return token; // Retornar o token
      } else {
        console.error('Token não recebido na resposta');
        return null;
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      return null;
    }
  };
  

  const cadastrar = async (nome, email, password, telefone) => {
    const dados = {
        nome,
        email,
        password,
        telefone
    };

    try {
        const response = await axios.post(`${API_URL}/usuarios`, dados);
        const token = response.data.token;
        
        return token;

    } catch (error) {
        // Lida com erros, se necessário...
        console.error('Erro durante o cadastro:', error);
    }
};
const getUserName = async () => {
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      if (authToken) {
        const payload = authToken.split('.')[1];
        const decodedPayload = JSON.parse(base64.decode(payload));
        return decodedPayload.nome; // Assumindo que o nome do usuário está no campo 'nome' do token
      }
    } catch (error) {
      console.error('Erro ao obter ou decodificar o token:', error);
    }
  };

  const logout = async () => {
    await removeToken();
    setUser(null);

  };

  const checkAuth = async () => {
    try {
      const token = await getToken();

      if (token) {
        setUser({ token });
      }

      setLoading(false);
      return token
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, cadastrar, logout,storeToken,getUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
