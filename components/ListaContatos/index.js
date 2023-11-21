import { View,Image,Text,StatusBar} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import React, { useContext } from 'react'
import{
  useFonts,
  Roboto_700Bold,
  Roboto_100Thin,
  Roboto_300Light_Italic,
}from '@expo-google-fonts/roboto';
import { TemaContext } from '../../common/tema';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ListaContatos({onPress,Imagem,Nome}) {
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
    <TouchableOpacity 
    onPress={onPress}
      style={{
        backgroundColor: tema,
        borderWidth: 0.4,
        borderColor: '#d8d8d8',
        flexDirection: 'row',
      }}
    
    >
      <View style={{flexDirection:'row',}}>
        <Image
          style={{
            backgroundColor: tema,
            borderColor: '#d8d8d8',
            flexDirection: 'row',
            borderRadius: 50,
            height: 60,
            width: 60,
            marginBottom: 10,
            marginLeft: 10,
            marginTop:5,
          }}
          source={Imagem} />

           <Text style={{color:corLetra,fontSize:16,marginBottom:10,marginTop:20,marginLeft:15,fontFamily:'Roboto_700Bold'}}>{Nome}</Text>
      </View>

      
    </TouchableOpacity>
  )
}