import React from 'react'
import MyRoutes from './routes'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { TemaContext, TemaProvider } from './common/tema'

export default function App() {
  return (
    <TemaProvider>
         <NavigationContainer>
      <StatusBar 
        backgroundColor='#000'
        style='light'
      />
    <MyRoutes/>
    
    </NavigationContainer> 
    </TemaProvider>


  )
}



// backgroundColor={theme == 'Light' ? '#fff' : '#000'}
//       barStyle={theme == 'Light' ? 'dark-content' : 'light-content'}