import { View, Text, Image, StatusBar, TextInput, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TemaContext } from '../../common/tema';
import BalaoChat from '../BalaoChat';
import axios from 'axios';

export default function BarraConversas({ route, navigation }) {
  const { tema, corLetra, fundoEscuro } = useContext(TemaContext);
  const tamanhoStatus = StatusBar.currentHeight;
  const [nomeContato, setNomeContato] = useState(''); 
  const { id_conversas, id_usuario_enviante } = route.params;

  useEffect(() => {
    const obterNomeContato = async () => {
      try {
        const response = await axios.get(
          `http://10.0.2.2:8000/obter-nome-contato/${id_conversas}/${id_usuario_enviante}`
        );
        setNomeContato(response.data.nome_contato);
        console.log('funcionou');
      } catch (error) {
        console.error('Erro ao obter nome do contato:', error);
      }
    };

    obterNomeContato(); // Chama a função ao carregar o componente
  }, [id_conversas, id_usuario_enviante]); // Dependências para garantir que a função seja chamada quando esses valores mudarem

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: tema,
          width: 'auto',
          marginTop: tamanhoStatus,
          alignItems: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Ionicons name="chevron-back-outline" size={25} color={'#2596BB'} onPress={() => navigation.goBack()} />

        <Image
          style={{
            borderRadius: 50,
            height: 45,
            width: 45,
            marginBottom: 5,
            marginTop: 5,
          }}
          source={{
            uri: 'https://stickerly.pstatic.net/sticker_pack/09DNgq69XoEvmn1BXeeFuA/GDHTF6/19/346da355-fa73-4007-aceb-7550bdc97dc4.png',
          }}
        />

        <Text style={{ marginLeft: 10, fontFamily: 'Roboto_700Bold', fontSize: 16, color: '#2596BB' }}>{nomeContato}</Text>

        <Ionicons name="ellipsis-vertical-sharp" size={23} color={'#2596BB'} style={{ marginLeft: '55%' }} />
      </View>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: fundoEscuro }}>
        <BalaoChat idConversas={id_conversas} idUsuarioEnviante={id_usuario_enviante} />
        </View>
      </ScrollView>

      <View style={{ backgroundColor: tema, flexDirection: 'row', alignItems: 'flex-end', height: 70, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput style={{ backgroundColor: '#d5d5d5', height: 35, width: '80%', borderRadius: 50, padding: 10 }} />
        <Ionicons name="paper-plane-outline" size={30} color={'#2596BB'} style={{ marginLeft: 10 }} />
      </View>
    </View>
  );
}
