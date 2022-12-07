import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function Login({route,navigation}){

   
 return (
  
    <View style={[styles.container, {
    flexDirection: "column"
    }]}>
  
  <View style={{ flex: 1,alignItems:"center", paddingTop:50}} >
    <Avatar
    rounded
    size="xlarge"
    source={{
      uri:
        'https://static.vecteezy.com/ti/vetor-gratis/p1/5026528-vector-illustration-female-avatar-in-flat-style-gr%C3%A1tis-vetor.jpg',
    }}
  />
  </View>

<View style={{ flex: 1, alignItems:"center", paddingTop:20}}>

<Input  leftIcon={{ type: 'font-awesome', name: 'user', color:'black' }}
 placeholder={' login'}/>

<Input  leftIcon={{ type: 'font-awesome', name: 'lock' , color:'black'}}
 placeholder={" senha"} secureTextEntry={true} />

</View>
  
<View style={{ paddingTop:40}} >
<Button  title="Login"/>
</View>

<View style={{ paddingTop:20}}>
<Button buttonStyle={{backgroundColor:"red"}} title="Cadastrar-se"
onPress={()=>navigation.navigate('CadastroUsuario')}/>
</View>
</View>
);};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  backgroundColor:'white'
  },
  });
