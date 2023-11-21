import { View, Text,Image, StatusBar} from 'react-native'
import React, { useContext } from 'react'
import{
  useFonts,
  Roboto_700Bold,
  Roboto_100Thin,
  Roboto_300Light_Italic,
}from '@expo-google-fonts/roboto';
import { TemaContext } from '../../common/tema';

export default function Conversas(props) {
  const {tema,corLetra}=useContext(TemaContext);
  const tamanhoStatus = StatusBar.currentHeight;
  const [FontLoaded]=useFonts({
    Roboto_100Thin,
    Roboto_700Bold,
    Roboto_300Light_Italic
  });
  if(!FontLoaded){
    return null;
  }
  return (
    <View style={{
      backgroundColor:tema,
      borderWidth:0.5,
      borderColor:'#d8d8d8',
      height:90,
      flexDirection:'row',
  }}>
    <View>
      <Image
     style={{
      backgroundColor:'#ffff',
      borderColor:'#d8d8d8',
      flexDirection:'row',
      borderRadius:50,
      height:70,
      width:70,
      marginTop:10,
      marginLeft:10
  }}
  source={props.Imagem}
    />
    </View>
    <View>
      <Text style={{color:corLetra,fontSize:16,marginBottom:10,marginTop:17,marginLeft:15,fontFamily:'Roboto_700Bold'}}>{props.Nome}</Text>
      <Text style={{color:'gray',fontSize:14, fontFamily:'Roboto_700Bold',marginLeft:15}}>{props.Mensagem}</Text>
    </View>
    
       
    </View>
  

  )
}