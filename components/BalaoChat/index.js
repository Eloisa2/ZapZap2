import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const Balao = ({ sender, mensagem }) => {
  return (
    <View style={[styles.estilo, sender === 'user' ? styles.usuario : styles.outroBalao]}>
      <Text style={{ fontSize: 16 }}>{mensagem}</Text>
    </View>
  );
};

export default function BalaoChat() {
  return (
    <ScrollView>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
      }}>
        <Balao sender="other" mensagem="Olá! Como você está?" />
        <Balao sender="user" mensagem="Oi! Estou bem, e você?" />
        <Balao sender="other" mensagem="Estou ótimo, obrigado por perguntar!" />
        <Balao sender="user" mensagem="Que bom! Alguma novidade?" />
        <Balao sender="other" mensagem="Olha, se você não me ama
Então não me ligue
Não fique me fazendo queixa

Não faça como as outras já tem feito
Porque minha vida é sofrendo
Por causa de uma mulher bandida
Já teve noite de eu querer beber veneno

Reclamava do meu dominó
Não queria que eu saísse só
Me cobrava o que ela não foi
E por trás me fazia de boi

Reprimi demais, eu quase morro
Sim, eu fiz 51 de soro
Não me enforquei por muito pouco
Enrolei papel higiênico no pescoço

Olha, se você não me ama
Então não me ligue
Não fique me fazendo queixa

Não faça como as outras já tem feito
Porque minha vida é sofrendo
Por causa de uma mulher bandida
Já teve noite de eu querer beber veneno

Reprimi demais, eu quase morro
Sim, eu fiz 51 de soro
Não me enforquei por muito pouco
Enrolei papel higiênico no pescoço

Olha, se você não me ama
Então não me ligue
Não fique me fazendo queixa

Não faça como as outras já tem feito
Porque minha vida é sofrendo
Por causa de uma mulher bandida
Já teve noite de eu querer beber veneno

Olha, se você não me ama
Então não me ligue
Não fique me fazendo queixa

Não faça como as outras já tem feito
Que a minha vida é sofrendo
Por causa de uma mulher bandida
Já teve noite de eu querer beber veneno" />
      </View>
    </ScrollView>
  )
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

