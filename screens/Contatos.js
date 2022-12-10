import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function Contatos({route,navigation}){


  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>


<View style={{ flex: 2, alignItems:"center", paddingTop:120}}>
<Input placeholder='nome'/>
<Input placeholder="email"  />
<Input placeholder="telefone"  />
</View>
  
  
<View >
<Button style={{ marginTop:50}} title="alterar"/>
</View>
<View style={{ paddingTop:20}}>
<Button style={{ marginTop:50}} title="excluir"
 buttonStyle={{backgroundColor: 'red'}} />
</View>
</View>
);};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  },
  });






 


  
  
  
  