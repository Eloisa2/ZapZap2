import React, { useEffect, useState, useCallback } from 'react';
import { View, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import Conversas from '../../components/Conversas';
import AzulCaneta from '../../assets/azul-caneta.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'base-64';
import axios from 'axios';

export default function Chats({ navigation }) {
  const [decodedToken, setDecodedToken] = useState(null);
  const [conversas, setConversas] = useState([]);
  const [userId, setUserId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadConversas();
    setRefreshing(false);
  }, [loadConversas]);

  const loadConversas = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8000/minhasConversas/${userId}`);
      setConversas(response.data);
    } catch (error) {
      console.error('Erro ao carregar conversas:', error);
    }
  };

  const handleConversaPress = (idConversa) => {
    navigation.navigate('ConversasChat', {
      id_conversas: idConversa,
      id_usuario_enviante: userId, 
    });
  };

  useEffect(() => {
    const loadTokenAndDecode = async () => {
      try {
        const authToken = await AsyncStorage.getItem('authToken');

        if (authToken) {
          const payload = authToken.split('.')[1];
          const decodedPayload = JSON.parse(base64.decode(payload));
          setDecodedToken(decodedPayload);
          setUserId(decodedPayload.id);
        } else {
          navigation.navigate('login');
        }
      } catch (error) {
        console.error('Erro ao obter ou decodificar o token:', error);
      }
    };

    loadTokenAndDecode();

    if (userId) {
      loadConversas();
    }
  }, [navigation, userId]);

  return (
    <View>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {conversas.map((elemento) => (
          <TouchableOpacity key={elemento.id_conversa} onPress={() => handleConversaPress(elemento.id_conversas)}>
            <Conversas Imagem={AzulCaneta} Nome={elemento.nome} Mensagem='Não disponível' />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
