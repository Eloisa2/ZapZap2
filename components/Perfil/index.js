import { View, Text, Image, Button } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TemaContext } from '../../common/tema';


export default function PerfilComponent(props) {  
  const {tema,corLetra}=useContext(TemaContext);

  return (
    <View style={{
      borderColor:'#d8d8d8',
      height: 60,
      width:'100%',
      marginTop:20,
      display:'flex',
      borderBottomWidth:0.5,
      justifyContent:'center',
      alignItems:'center',

     }}>


    </View>
  )
}