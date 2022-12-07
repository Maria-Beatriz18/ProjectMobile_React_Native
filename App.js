import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import CadastroUsuarioScreen from './screens/CadastroUsuario';

const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Login">
<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
<Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} options={{ headerShown: false }} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default App;