import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from '../../pages/Chats'
import Contatos from '../../pages/Contatos'
import Perfil from '../../pages/Perfil'
import { Ionicons } from '@expo/vector-icons';
import Barra from '../Barra'
import { TemaContext } from '../../common/tema';


export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  const {tema,corLetra}=useContext(TemaContext);

  return (
    <>
    <Barra/>
  <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Chats') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Contatos') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'earth' : 'earth-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle:{backgroundColor:tema,borderTopWidth:0},
        tabBarActiveTintColor: '#2596BB',
        tabBarInactiveTintColor: '#8F8F8F',

      })}>


      <Tab.Screen options={{ headerShown: false }} name="Chats" component={Chats} initialParams={{ Aparecer: false }} />

      <Tab.Screen options={{ headerShown: false }} name="Contatos" component={Contatos} initialParams={{ Aparecer: true }} />

      <Tab.Screen options={{ headerShown: false }} name="Perfil" component={Perfil} initialParams={{ Aparecer: false }} />
      
</Tab.Navigator>
</>
  )
}


