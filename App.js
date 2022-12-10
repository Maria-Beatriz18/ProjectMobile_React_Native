import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import CadastroUsuarioScreen from './screens/CadastroUsuario';
import ListaContatosScreen from './screens/ListaContatos';
import CadastroContatoScreen from './screens/CadastroContato'
import ContatosScreen from './screens/Contatos';


const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Login">
<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
<Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} options={{ headerShown: false }} />
<Stack.Screen name="ListaContatos" component={ListaContatosScreen} options={{ headerShown: false }}/>
<Stack.Screen name="CadastroContato" component={CadastroContatoScreen}/>
<Stack.Screen name="Contatos" component={ContatosScreen}/>

</Stack.Navigator>
</NavigationContainer>
);
}

export default App;