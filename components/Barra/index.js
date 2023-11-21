import { View, Text, Image, StatusBar, StyleSheet,TextInput, TouchableOpacity, Button} from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import Modal from 'react-native-modal';
import Send from './../../assets/send.png'
import { Ionicons } from '@expo/vector-icons'; 

import{
  useFonts,
  Roboto_700Bold,
  Roboto_100Thin,
  Roboto_300Light_Italic,
  
}from '@expo-google-fonts/roboto';
import { TemaContext, TemaProvider } from '../../common/tema';

export default function Barra(){
  const [isModalVisible, setModalVisible] = useState(false);
  const {tema,corLetra,setTema,setCorLetra,fundoEscuro,setFundoEscuro}=useContext(TemaContext);
  const [icone,setIcone]=useState('moon');
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [ModalContato, setModalContato] = useState(false);
  const AbrirModal=()=>{
    setModalContato(!ModalContato);
  }

  

  const tamanhoStatus = StatusBar.currentHeight;
  const [FontLoaded]=useFonts({
    Roboto_100Thin,
    Roboto_700Bold,

  });
  if(!FontLoaded){
    return null;
  }
  return (
    <View>
       <View
      style={{backgroundColor: tema, width: 'auto', marginTop: tamanhoStatus, alignItems:'flex-start',flexDirection:'row',}}>
      <Text
      style={styles.fonte} >
        Send</Text>

        <Image  style={{height:28,width:28,alignItems:'flex-start',marginTop:14,marginLeft:-8}} source={Send} />

        <View style={{flexDirection:"row"}}>


        <TouchableOpacity onPress={AbrirModal}>
          <View style={{marginTop: 15,flexDirection:'row',marginLeft: 210}}>
        <Ionicons name='person-add-outline' size={25} color={'#2596BB'} />
          </View>
        </TouchableOpacity> 
        

        <Modal
        isVisible={ModalContato}
        animationIn='fadeIn'
        animationOut='fadeOut'
        backdropOpacity={0.5}
        onBackdropPress={AbrirModal}

        style={{justifyContent:'center', alignItems:'center'}}
      >
        <View style={{ backgroundColor: 'white',width:'100%',justifyContent:'center', alignItems:'center',height:'auto',borderRadius:5}}>
          <Text style={{marginBottom:10,justifyContent:'center',marginTop:10,fontSize:19}}>Adicionar Contato</Text>

          <View>
            <View style={{flexDirection:'row',gap:5}}>
          <Text style={{marginTop:6}}>Nome:</Text>
        <TextInput style={{height:40,width:'80%',backgroundColor:'#d5d5d5',borderRadius:10,padding:10}}/>
            </View>

            <View style={{flexDirection:'row',gap:5,marginTop:20}}>
          <Text style={{marginTop:6}}>E-mail:</Text>
        <TextInput style={{height:40,width:'80%',backgroundColor:'#d5d5d5',borderRadius:10,padding:10}}/>
            </View>

        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{backgroundColor:'#2596BB',height:30,justifyContent:'center',width:100,alignItems:'center',marginBottom:10,marginTop:10}}>
            <Text style={{color:'#fff',}}> ADICIONAR</Text>
          </View>
        </TouchableOpacity>

          </View>

        </View>

      </Modal>

      <TouchableOpacity onPress={toggleModal}>
        <View style={{ marginTop: 12,flexDirection:'row',marginLeft:12 }}>
          <Ionicons name='menu-sharp' size={30} color={'#2596BB'} />
        </View>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        animationIn='fadeIn'
        animationOut='fadeOut'
        backdropOpacity={0.5}
        onBackdropPress={toggleModal}
      >
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10,marginBottom:600,width:180,marginLeft:170, }}>

      <View style={styles.modal}>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{
          tema == 'black' ? setTema('white') : setTema('black')
          fundoEscuro == '#041527' ? setFundoEscuro('#d5d5d5') : setFundoEscuro('#041527')
          corLetra == 'black' ? setCorLetra('white') : setCorLetra('black')
          tema == 'black' ? setIcone('sunny') : setIcone('moon')
        }}><Text>Tema Escuro </Text><Ionicons name={icone} size={20} color="black" style={{marginLeft:22}} /></TouchableOpacity>
      </View>

      <View style={styles.modal2}>      
      <Ionicons name='settings-sharp' size={20} /> 
      <Text>Configurações</Text>
        </View>  
        </View>
      </Modal>
    </View>
        </View>

        <View style={{justifyContent:'center',alignItems:'center',borderBottomWidth:0.2,borderColor:'d8d8d8',backgroundColor:tema}}>
        <TextInput
        placeholder='Buscar'
        style={{borderRadius:20,backgroundColor:'#D8D8D8',width:350,marginBottom:10,paddingLeft:10,height:25}}

        />
        </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
  fonte: {
    fontFamily:'Roboto_700Bold',
    fontSize: 25,
    color:'#2596BB',
    padding:12,
  },
  modal:{
    borderBottomWidth:1,
        borderColor:'#d5d5d5',
        padding:10,
        flexDirection:'row',
        marginLeft:-4
  },
  modal2:{
    borderBottomWidth:1,
        borderColor:'#d5d5d5',
        padding:10,
        flexDirection:'row',
        gap:5,
        marginLeft:-8
  }
  
});

