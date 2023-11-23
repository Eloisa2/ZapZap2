import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import BarraConversas from '../../components/BarraConversa'
import { TemaContext } from '../../common/tema';

export default function ConversasChat({ route, navigation }) {
  const { tema, corLetra } = useContext(TemaContext);
  const { id_conversas, id_usuario_enviante } = route.params;
  console.log(id_conversas,id_usuario_enviante)
  return (
    <View style={{ flex: 1 }}>
      <BarraConversas route={route} navigation={navigation} />
    </View>
  );
}
