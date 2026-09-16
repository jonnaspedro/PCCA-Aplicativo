import React from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import SplashScreen from './screens/splashScreen';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import EsqueciSenha from './screens/esqueciSenha';
import Recuperar from './screens/recuperar';

import HomeScreen from './screens/homeScreen';
import Estudar from './screens/estudar';
import Cronograma from './screens/cronograma';
import Comunidade from './screens/perguntas';
import Perfil from './screens/perfil';

import Resumos from './screens/resumos';
import Perguntas from './screens/perguntas';
import Grupos from './screens/grupos';
import Criar from './screens/criar';
import Notificacoes from './screens/notificacoes';
import Configuracoes from './screens/configuracoes';
import Ajuda from './screens/ajuda';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      >

        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />

        <Stack.Screen
          name="EsqueciSenha"
          component={EsqueciSenha}
        />

        <Stack.Screen
          name="Recuperar"
          component={Recuperar}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Estudar"
          component={Estudar}
        />

        <Stack.Screen
          name="Cronograma"
          component={Cronograma}
        />

        <Stack.Screen
          name="Comunidade"
          component={Comunidade}
        />

        <Stack.Screen
          name="Perfil"
          component={Perfil}
        />

        <Stack.Screen
          name="Resumos"
          component={Resumos}
        />

        <Stack.Screen
          name="Perguntas"
          component={Perguntas}
        />

        <Stack.Screen
          name="Grupos"
          component={Grupos}
        />

        <Stack.Screen
          name="Criar"
          component={Criar}
        />

        <Stack.Screen
          name="Notificacoes"
          component={Notificacoes}
        />

        <Stack.Screen
          name="Configuracoes"
          component={Configuracoes}
        />

        <Stack.Screen
          name="Ajuda"
          component={Ajuda}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}