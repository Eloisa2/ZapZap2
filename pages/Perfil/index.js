import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PerfilIcone from '../../assets/perfil-icon.png';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { TemaContext } from '../../common/tema';
import { AuthContext } from './../Login/AuthContext'; 

export default function Perfil({ route, navigation }) {
  const { tema, corLetra } = useContext(TemaContext);
  const { Aparecer } = route.params;
  const { logout,getUserName } = useContext(AuthContext);
  const [userName, setUserName] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      navigation.replace('login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  useEffect(() => {
    const fetchUserName = async () => {
      const name = await getUserName(); // Utilize a função para obter o nome
      setUserName(name);
    };

    fetchUserName();
  }, []);

  const [FontLoaded] = useFonts({
    Roboto_700Bold,
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
        backgroundColor: tema,
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
            source={PerfilIcone}
          />
        </View>

        <View style={{
          marginTop: -30,
          marginLeft: 90
        }}>
          <Ionicons name={"add-circle-sharp"} size={30} color="#2596BB" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={{ color: corLetra, fontSize: 20, fontFamily: 'Roboto_700Bold', marginTop: 15, textAlign: 'center' }}>{userName}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={{ marginTop: 20 }}>
        <View style={{ backgroundColor: '#012965', height: 40, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
          <Text style={{ color: '#fff' }}>Sair</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
