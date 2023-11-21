import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import BarraConversas from '../../components/BarraConversa'
import { TemaContext } from '../../common/tema';

export default function ConversasChat({navigation}) {
  const {tema,corLetra}=useContext(TemaContext);

  console.log(navigation)
  return (
    <View style={{flex:1}}>
        <BarraConversas navegacao={navigation}/>
    </View>
  )
}