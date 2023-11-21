import { View, Text, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import PerfilIcone from '../../assets/perfil-icon.png'
import { Ionicons } from '@expo/vector-icons';

import {
  useFonts,
  Roboto_700Bold,
  Roboto_100Thin,
  Roboto_300Light_Italic,
} from '@expo-google-fonts/roboto';
import { TemaContext } from '../../common/tema';


export default function Perfil({route}) {
  const {tema,corLetra}=useContext(TemaContext);
  const {  Aparecer } = route.params;
  console.log(Aparecer);
  const [FontLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_700Bold,
    Roboto_300Light_Italic
  });
  if (!FontLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:tema
      }}
    >
      <TouchableOpacity activeOpacity={0.7}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              backgroundColor: tema,
              borderRadius: 100,
              height: 140,
              width: 140,
              marginTop: 10,
              justifyContent: 'center',
            }}
            source={PerfilIcone} />
        </View>

        <View style={{
          marginTop: -30,
          marginLeft: 90
        }}>
          <Ionicons name={"add-circle-sharp"} size={30} color="#2596BB" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={{ color: corLetra, fontSize: 20, fontFamily: 'Roboto_700Bold', marginTop: 15, textAlign: 'center' }}>Nome</Text>
      </TouchableOpacity>

    </View>
  )
}