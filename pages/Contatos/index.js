import { View, Text, Button, ScrollView } from 'react-native'
import React from 'react'
import ListaContatos from '../../components/ListaContatos'
import AzulCaneta from '../../assets/azul-caneta.jpg'
import RogeriaPadaria from '../../assets/RogeriaPadaria.jpg'
import CarmenIgreja from '../../assets/CarmenIgreja.jpg'
import JamesSalada from '../../assets/JamesSalada.jpg'
import Mariaflores from '../../assets/MariaFlores.jpg'
import NeideAvon from '../../assets/NeideAvon.jpg'
import RodrigoLojinha from '../../assets/RodrigoLojinha.png'
import RaquelBolo from '../../assets/RaquelBolo.jpeg'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Contatos({navigation,route}) {
  const [contatos,setContatos]=useState([]);

  const {  Aparecer } = route.params;
  

  useEffect(()=>{
    axios.get('http://10.0.2.2:8000/contatos').then((response)=>{
    setContatos(response.data);
    })},[])

    console.log(Aparecer);

  return (
    <ScrollView>
         <View>
          {contatos.map((contato)=>(
          <ListaContatos
          onPress={()=>navigation.navigate('ConversasChat')}
          Imagem={contato.imagem} Nome={contato.nome}
          />
          ))}
    </View> 
    </ScrollView>

  )
}