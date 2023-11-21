import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native'
import React from 'react' 

export default function Login({navigation}) {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#010C13'}}>

          <Text style={{fontSize: 30, marginBottom: 40, color:'#fff' }}>Bem Vindo(a)</Text>

          <TextInput
            placeholder='Email'
            placeholderTextColor={'gray'}
            style={{
              backgroundColor: '#02193B',
              borderRadius: 20,
              marginBottom: 20,
              padding: 12,
              width:300,
              height: 40,
              color: '#fff'
            }} />

          <TextInput
            secureTextEntry={true}
            placeholder='Senha'
            placeholderTextColor={'gray'}
            style={{
              backgroundColor: '#02193B',
              borderRadius: 20,
              marginBottom: 20,
              padding: 12,
              width:300,
              height: 40,
              color: '#fff'
            }}
          />

        <TouchableOpacity onPress={() => navigation.navigate('tabnavigator')}>
            <View style={{backgroundColor:'#012965', height:40,width:100,alignItems:'center',justifyContent:'center', borderRadius:15}}>
              <Text style={{color:'#fff'}}>ENTRAR</Text>
            </View>
          </TouchableOpacity>

    </View>
  )
}