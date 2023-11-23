import React, { useEffect, useState, useCallback } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import ListaContatos from '../../components/ListaContatos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import base64 from 'base-64';

export default function Contatos({ navigation }) {
  const [contatos, setContatos] = useState([]);
  const [userId, setUserId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadContatos();
    setRefreshing(false);
  }, [loadContatos]);

  const loadContatos = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8000/meusContatos/${userId}`);
      setContatos(response.data);
    } catch (error) {
      console.error('Erro ao carregar contatos:', error);
    }
  };

  const handleClickContato = async (idUsuarioContato) => {
  try {
    const existingConversationResponse = await axios.get(`http://10.0.2.2:8000/conversas/${userId}/${idUsuarioContato}`);

    if (existingConversationResponse.data.length > 0) {
      const existingConversation = existingConversationResponse.data[0];
      navigation.navigate('ConversasChat', {
        id_conversas: existingConversation.id_conversas,
        id_usuario_enviante: userId,
      });
    } else {
      console.log(userId);
      console.log(idUsuarioContato)
      const newConversationResponse = await axios.post('http://10.0.2.2:8000/conversas', {
        usuario1: userId,
        usuario2: idUsuarioContato,
      });
      console.log('Conversa criada:', newConversationResponse.data);

      await loadContatos(); // Espera o carregamento dos contatos antes de navegar

      navigation.navigate('ConversasChat', {
        id_conversas: newConversationResponse.data.id_conversas,
        id_usuario_enviante: userId,
      });
    }
  } catch (error) {
    console.error('Erro ao criar ou verificar conversa:', error);
  }
};


  useEffect(() => {
    const loadTokenAndDecode = async () => {
      try {
        const authToken = await AsyncStorage.getItem('authToken');

        if (authToken) {
          const payload = authToken.split('.')[1];
          const decodedPayload = JSON.parse(base64.decode(payload));
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
      loadContatos();
    }
  }, [navigation, userId]);

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View>
        {contatos.map((contato) => (
          <ListaContatos
            key={contato.id_usuario}
            onPress={() => handleClickContato(contato.id_usuario)}
            Imagem={contato.imagem}
            Nome={contato.nome}
          />
        ))}
      </View>
    </ScrollView>
  );
}
