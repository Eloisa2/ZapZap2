import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import axios from 'axios';

const { width } = Dimensions.get('window');

const Balao = ({ sender, mensagem }) => {
  const isUsuarioAtual = sender === 'user';

  return (
    <View style={[styles.estilo, isUsuarioAtual ? styles.usuario : styles.outroBalao]}>
      <Text style={{ fontSize: 16 }}>{mensagem}</Text>
    </View>
  );
};

export default function BalaoChat({ idConversas, idUsuarioEnviante }) {
  const [mensagens, setMensagens] = useState([]);

  const obterMensagens = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8000/mensagens?id_conversas=${idConversas}`);
      setMensagens(response.data);
    } catch (error) {
      console.error('Erro ao obter mensagens:', error);
    }
  };


  useEffect(() => {
    obterMensagens();
  }, [idConversas]);

  return (
    <ScrollView>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'white',
      }}>
        {mensagens.map((mensagem, index) => (
          <Balao
            key={index}
            sender={mensagem.id_usuario_enviante === idUsuarioEnviante ? 'other' : 'user'}
            mensagem={mensagem.texto_mensagem}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  estilo: {
    maxWidth: width - 40,
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  usuario: {
    alignSelf: 'flex-end',
    backgroundColor: '#2596BB',
  },
  outroBalao: {
    alignSelf: 'flex-start',
    backgroundColor: '#87CAE1',
  }
});
