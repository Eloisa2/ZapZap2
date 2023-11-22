import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import Conversas from '../../components/Conversas';
import AzulCaneta from '../../assets/azul-caneta.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decode } from 'react-native-pure-jwt';
import base64 from 'base-64';
import axios from 'axios';

export default function Chats({ navigation }) {
    const [decodedToken, setDecodedToken] = useState(null);
    const [conversas, setConversas] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const loadTokenAndDecode = async () => {
            try {
                const authToken = await AsyncStorage.getItem('authToken');
                console.log('Valor de authToken:', authToken);

                if (authToken) {
                    const payload = authToken.split('.')[1]; // Obtém a parte do payload
                    const decodedPayload = JSON.parse(base64.decode(payload)); // Decodifica a parte do payload
                    setDecodedToken(decodedPayload);
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

        // Verifique se tem um ID de usuário antes de fazer a chamada da API
        if (userId) {
            axios.get(`http://10.0.2.2:8000/minhasConversas/${userId}`).then((response) => setConversas(response.data));
        }
    }, [navigation, userId]);

    return (
        <View>
            <ScrollView>
                {conversas.map((elemento) => (
                    <Conversas Imagem={AzulCaneta} Nome={elemento.nome} Mensagem='Não disponível' />
                ))}
            </ScrollView>
        </View>
    );
}
