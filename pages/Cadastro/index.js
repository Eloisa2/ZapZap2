import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import axios from 'axios';
export default function Cadastro({ navigation }) {
  
  const [etapa, setEtapa] = useState(1);
  const [email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [Nome, setNome] = useState('');
  const [Sobrenome, setSobrenome] = useState('');
  const [Telefone, setTelefone] = useState('');

async function testaGet(){
  await axios.get('http://127.0.0.1:8000/');
}
   const enviaDados= async ()=>{
     body={
      'email':email,
       'password':Senha,
       'telefone':Telefone,
       'nome':Nome
     }
     await axios.post('http://10.0.2.2:8000/usuarios',body);
   }


  const handleNext = () => {
    if (etapa === 1) {
      if (email && Senha === confirmSenha) {
        setEtapa(2);
      } else {
        alert('Por favor, preencha o email e as senhas corretamente.');
      }
    }
  };

  const handleBack = () => {
    if (etapa === 2) {
      setEtapa(1);
    }
  };


  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#010C13',
    }}>
      {etapa === 1 ? (
        <View style={{ alignItems: 'center' }}>
          <Text style={{fontSize: 30, color: '#fff', marginBottom: 40 }}>Bem Vindo(a)</Text>

          <TextInput value={email} onChangeText={text => setEmail(text)}
            placeholder='Email'
            placeholderTextColor={'gray'}
            style={{
              backgroundColor: '#02193B',
              borderRadius: 20,
              marginBottom: 20,
              padding: 12,
              width: '90%',
              height: 40,
              color: '#fff'

            }} />

          <TextInput
            secureTextEntry={true}
            placeholder='Senha'
            placeholderTextColor={'gray'}
            value={Senha}
            onChangeText={text => setSenha(text)}
            style={{
              backgroundColor: '#02193B',
              borderRadius: 20,
              marginBottom: 20,
              padding: 12,
              width: '90%',
              height: 40,
              color: 'white'
            }}
          />

          <TextInput
            secureTextEntry={true}
            value={confirmSenha}
            placeholder='Confirmar Senha'
            placeholderTextColor={'gray'}
            onChangeText={text => setConfirmSenha(text)}
            style={{
              backgroundColor: '#02193B',
              borderRadius: 20,
              marginBottom: 20,
              padding: 12, 
              width: '90%',
              height: 40,
              color: '#fff'
            }}
          />
        </View>
      ) : (
        <View style={{ alignItems: 'center' }}>

          <Text style={{ fontSize: 30, color: '#fff', marginBottom: 40 }}>Bem Vindo(a)</Text>

          <TextInput value={Nome} onChangeText={text => setNome(text)}
            placeholder='Nome'
            placeholderTextColor={'gray'}
            style={{
              backgroundColor: '#02193B',
              borderRadius: 20,
              marginBottom: 20,
              padding: 10,
              width: '90%',
              height: 40,
              color: '#fff',
            }} />


          <TextInput value={Telefone} onChangeText={text => setTelefone(text)}
            placeholder='Telefone'
            placeholderTextColor={'gray'}
            style={{
              backgroundColor: '#02193B',
              borderRadius: 20,
              marginBottom: 20,
              padding: 10,
              width: '90%',
              height: 40,
              color: '#fff'
            }} />
        </View>
      )}

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        {etapa === 1 ? (
          <TouchableOpacity onPress={()=>testaGet()}>
            <View style={{backgroundColor:'#012965', height:40,width:80,alignItems:'center',justifyContent:'center',borderRadius:15}}>
              <Text style={{color:'#fff'}}>PROXIMO</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleBack}>
            <View style={{backgroundColor:'#012965', height:40,width:80,alignItems:'center',justifyContent:'center',borderRadius:15}}>
              <Text style={{color:'#fff'}}>VOLTAR</Text>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('tabnavigator')}>
            <View style={{backgroundColor:'#012965', height:40,width:80,alignItems:'center',justifyContent:'center', borderRadius:15}}>
              <Text style={{color:'#fff'}}>ENTRAR</Text>
            </View>
          </TouchableOpacity>
          
      </View>

      <TouchableOpacity
      onPress={()=>enviaDados()}
      style={{alignItems:'center'}} >
      <View style={{height:35,width:100,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'#fff'}}>Ja tem conta?</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}

