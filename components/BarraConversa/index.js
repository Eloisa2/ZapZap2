import { View, Text, Image, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useContext } from 'react'

import { Ionicons } from '@expo/vector-icons';


import {
  useFonts,
  Roboto_700Bold,
  Roboto_100Thin,
  Roboto_300Light_Italic,
} from '@expo-google-fonts/roboto';
import { TemaContext } from '../../common/tema';
import BalaoChat from '../BalaoChat';

export default function BarraConversas(props) {
  const {tema,corLetra,fundoEscuro}=useContext(TemaContext);
  console.log(props.navegacao)
  const tamanhoStatus = StatusBar.currentHeight;
  const [FontLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_700Bold,
    Roboto_300Light_Italic
  });
  if (!FontLoaded) {
    return null;
  }
  return (
    <View style={{flex:1}}>

      <View 
      style={{ backgroundColor:tema, width: 'auto', marginTop: tamanhoStatus, alignItems: 'flex-start', flexDirection: 'row', alignItems: 'center',}}>

      <Ionicons name='chevron-back-outline' size={25} color={'#2596BB'} onPress={() => props.navegacao.goBack()}/>

      <Image
        style={{
          borderRadius: 50,
          height: 45,
          width: 45,
          marginBottom: 5,
          marginTop: 5,
        }}

        source={{uri:"https://stickerly.pstatic.net/sticker_pack/09DNgq69XoEvmn1BXeeFuA/GDHTF6/19/346da355-fa73-4007-aceb-7550bdc97dc4.png"}}/>

      <Text style={{ marginLeft: 10, fontFamily: 'Roboto_700Bold', fontSize: 16, color:'#2596BB' }}>Contato</Text>

      <Ionicons name='ellipsis-vertical-sharp' size={23} color={'#2596BB'}
        style={{ marginLeft: "55%" }}
      />
      </View>
        <ScrollView>
      <View style={{flex:1,backgroundColor:fundoEscuro}}>
        <BalaoChat/>
      </View>
        </ScrollView>

      <View style={{backgroundColor:tema,flexDirection:'row',alignItems:'flex-end',height:70,justifyContent:'center',alignItems:'center'}}>
        <TextInput style={{backgroundColor:'#d5d5d5',height:35,width:'80%', borderRadius:50,padding:10}}/>
        <Ionicons name='paper-plane-outline' size={30} color={'#2596BB'}
        style={{marginLeft:10}}
      />
      </View>

    </View>
  )
}