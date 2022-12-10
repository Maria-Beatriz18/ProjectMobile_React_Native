import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import axios from 'axios';


const addUser = async (nome, email, telefone, { navigation }) => {
  const result = await axios.post('http://professornilson.com/testeservico/clientes', {
      nome: nome,
      email: email,
      telefone: telefone
  })
  .then((response) => {
      navigation.goBack();
  })
  .catch((error) => {
      console.log(error);
  })
}


export default function CadastroContato({route,navigation}){

  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");

  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>


<View style={{ flex: 4, alignItems:"center", paddingTop:120}}>
<Input placeholder='nome'value={nome}
                onChangeText={nome => setNome(nome)}
                maxLength={255}/>
<Input placeholder="email" value={email}
                onChangeText={email => setEmail(email)}
                textContentType={'emailAddress'}
                maxLength={255} />
<Input placeholder="telefone"value={telefone}
                onChangeText={telefone => setTelefone(telefone)}
                textContentType={'telephoneNumber'}
                maxLength={255} />
</View>
  
  
<View style={{ flex: 2, alignItems:"center", paddingTop:50}} >
<Button style={{ marginTop:50}} title="Salvar"  onPress={
                () => addUser(nome, email, telefone, { navigation })
            }/>
</View>
</View>
);};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  },
  });






 


  
  
  
  