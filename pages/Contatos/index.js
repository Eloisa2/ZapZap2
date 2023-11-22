import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import ListaContatos from '../../components/ListaContatos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import base64 from 'base-64';

export default function Contatos({ navigation }) {
  const [contatos, setContatos] = useState([]);
  const [userId, setUserId] = useState(null);
  const [status,setStatus] = useState(false);

  useEffect(() => {
    const loadTokenAndDecode = async () => {
      try {
        const authToken = await AsyncStorage.getItem('authToken');
        console.log('Valor de authToken:', authToken);

        if (authToken) {
          const payload = authToken.split('.')[1]; // Obtém a parte do payload
          const decodedPayload = JSON.parse(base64.decode(payload)); // Decodifica a parte do payload
          console.log('Token Decodificado:', decodedPayload);

          // Obtém o ID do usuário do token
          setUserId(decodedPayload.id);
        } else {
          // Se não houver um token, navegue para a tela de login
          navigation.navigate('login');
        }
      } catch (error) {
        console.error('Erro ao obter ou decodificar o token:', error);
      }
    };

    loadTokenAndDecode();

    if (userId) {
      axios.get(`http://10.0.2.2:8000/meusContatos/${userId}`).then((response) => {
        setContatos(response.data);
      });
    }

  }, [navigation, userId]);


  const handleClickContato = async (idUsuarioContato) => {
    console.log(idUsuarioContato);
    console.log(userId);
    try {
        const response = await axios.post('http://10.0.2.2:8000/conversas', {
          usuario1:userId,
          usuario2:idUsuarioContato
            
        });

        console.log('Conversa criada:', response.data);
      navigation.navigate('ConversasChat', {
           id_conversas: idUsuarioContato,
           id_usuario_enviante: response.data.id_conversas,
       });
    } catch (error) {
        console.error('Erro ao criar conversa:', error);
    }
};
  return (
    <ScrollView>
      <View>
        {contatos.map((contato) => (
          <ListaContatos
            onPress={() => handleClickContato(contato.id_usuario)}
            Imagem={contato.imagem}
            Nome={contato.nome}
          />
        ))}
      </View>
    </ScrollView>
  );
}
