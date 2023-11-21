import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from '../../pages/Cadastro'
import TabNavigator from '../Tab';
import Login from '../../pages/Login';
import ConversasChat from '../../pages/ConversasChat';

const Stack=createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='cadastro' component={Cadastro} initialParams={{Aparecer:false}}/>
        <Stack.Screen name='login' component={Login} initialParams={{Aparecer:false}}/>
        <Stack.Screen name='tabnavigator' component={TabNavigator} initialParams={{Aparecer:false}}/>
        <Stack.Screen name='ConversasChat' component={ConversasChat} initialParams={{Aparecer:false}}/>
    </Stack.Navigator>
  )
}