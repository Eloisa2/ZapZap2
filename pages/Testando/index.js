// import { View, Text, Button } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// export default function Testando() {
//     const [data,setData]=useState('');
    
//     useEffect(() => {

//         axios.interceptors.request.use(request => {
//             console.log('Starting Request', request)
//             return request
//         })
        
//         axios.interceptors.response.use(response => {
//             console.log('Response:', response)
//             return response
//         })
//         const fetchDadosDoLaravel = async () => {
//           try {
//             await axios.get('http://10.0.2.2:8000/token').then((response)=>{
//                 console.log(response.data)
//             }
//             );
//             console.log(data)
//           } catch (error) {
//             console.error('Erro ao obter dados do Laravel:', error);
//           }
//         };
    
//         fetchDadosDoLaravel();
//       }, []);
//   return (
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text>Test {data}</Text>
//       <Button title='teste' />
//     </View>
//   )
// }


import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Testando({navigation}) {
    const [email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Nome, setNome] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [token,setToken]=useState('')
    

    useEffect(()=>{
        const tokenObtido=axios.get('http://10.0.2.2:8000/token').then((response)=>{
            setToken(response.data);
        });
        console.log(token);
    },[])

    function teste(){
        console.log(token);

        
        axios.post(`http://10.0.2.2:8000/usuarios?_token=${token}`,{
            email : email,
            password : Senha,
            telefone : Telefone,
            nome : Nome

        }).then((response)=>{
            console.log('funcionou');
        })
    }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',
      padding: 20,
      backgroundColor: '#010C13'}}>
        <View style={{flexDirection:'row'}}>
      <Text style={{color:'white',marginRight:10}}>Nome:</Text>
      <TextInput 
      onChangeText={(e)=>setNome(e)} 
            style={{
              backgroundColor: '#031439',
              borderRadius: 10,
              marginBottom: 20,
              padding: 12,
              width: '80%',
              height: 40,
              color: '#fff'

            }}/>
        </View>

        <View style={{flexDirection:'row'}}>
      <Text style={{color:'white',marginRight:10}}>Email:</Text>
      <TextInput 
      onChangeText={(e)=>setEmail(e)}
      style={{
        backgroundColor: '#031439',
        borderRadius: 10,
        marginBottom: 20,
        padding: 12,
        width: '80%',
        height: 40,
        color: '#fff'

      }}
      />
        </View>

        <View style={{flexDirection:'row'}}>
      <Text style={{color:'white',marginRight:5,marginLeft:-12}}>Telefone:</Text>
      <TextInput 
      onChangeText={(e)=>setTelefone(e)} 
      style={{
        backgroundColor: '#031439',
        borderRadius: 10,
        marginBottom: 20,
        padding: 12,
        width: '80%',
        height: 40,
        color: '#fff'

      }}
      />
        </View>

        <View style={{flexDirection:'row'}}>
      <Text style={{color:'white',marginRight:10}}>Senha:</Text>
      <TextInput 
      onChangeText={(e)=>setSenha(e)} 
      style={{
        backgroundColor: '#031439',
        borderRadius: 10,
        marginBottom: 20,
        padding: 12,
        width: '80%',
        height: 40,
        color: '#fff'

      }}/>
        </View>
      <TouchableOpacity onPress={() => navigation.navigate('tabnavigator')} >
            <View style={{backgroundColor:'#012965', height:40,width:95,alignItems:'center',justifyContent:'center', borderRadius:5}}>
              <Text style={{color:'#fff'}}>CADASTRAR</Text>
            </View>
          </TouchableOpacity>
          {/* onPress={()=>{teste()}} */}
    </View>
  )
}