import { View, ScrollView } from 'react-native'
import React from 'react'
import Conversas from '../../components/Conversas'
import AzulCaneta from '../../assets/azul-caneta.jpg'
import RogeriaPadaria from '../../assets/RogeriaPadaria.jpg'
import CarmenIgreja from '../../assets/CarmenIgreja.jpg'
import JamesSalada from '../../assets/JamesSalada.jpg'
import Mariaflores from '../../assets/MariaFlores.jpg'
import NeideAvon from '../../assets/NeideAvon.jpg'
import RodrigoLojinha from '../../assets/RodrigoLojinha.png'
import RaquelBolo from '../../assets/RaquelBolo.jpeg'

export default function Chats({route}) {
    const {  Aparecer } = route.params;
  console.log(Aparecer);
    return (
        <View>
            <ScrollView>
                <Conversas Imagem={AzulCaneta} Nome='Caneta Azul' Mensagem='Olha se vc nao me ama ent n me ligue' />

                <Conversas Imagem={JamesSalada} Nome='Jemes Salada de frutas' Mensagem='Me ve uma salada de frutas' />


                <Conversas Imagem={NeideAvon} Nome='Neide da Avon' Mensagem='A avon laçou um novo catalogo...' />

                <Conversas Imagem={RogeriaPadaria} Nome='Rogeria da Padaria' Mensagem='Veja as novidades do nosso...' />

                <Conversas Imagem={CarmenIgreja} Nome='Carmen da Igreja' Mensagem='Bom dia. minh a queria.' />

                <Conversas Imagem={Mariaflores} Nome='Maria das Flores' Mensagem='Me da meus 5 reais caloteira' />


                <Conversas Imagem={RaquelBolo} Nome='Raquel do bolo' Mensagem='O bolo ta pronto?' />

                <Conversas Imagem={RodrigoLojinha} Nome='Rodrigo da Lojinha' Mensagem='Chamada de voz perdida' />
            </ScrollView>
        </View>

    )
}