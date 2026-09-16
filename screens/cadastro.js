import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native';

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');

  function criarConta() {

    if (!nome || !email || !senha || !confirmar) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    if (senha !== confirmar) {
      Alert.alert(
        'Atenção',
        'As senhas não são iguais.'
      );
      return;
    }

    Alert.alert(
      'Sucesso',
      'Conta criada com sucesso!',
      [
        {
          text: 'Continuar',
          onPress: () => navigation.replace('Home')
        }
      ]
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.back}>
          ‹
        </Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Criar conta
      </Text>

      <Text style={styles.subtitle}>
        Preencha os dados para começar
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        placeholderTextColor="#999"
        value={confirmar}
        onChangeText={setConfirmar}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={criarConta}
      >
        <Text style={styles.buttonText}>
          Criar conta
        </Text>
      </TouchableOpacity>

      <View style={styles.loginArea}>

        <Text style={styles.loginText}>
          Já tem uma conta?
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginLink}>
            {' '}Entrar
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  content: {
    padding: 25,
    paddingTop: 45,
    paddingBottom: 40
  },

  back: {
    fontSize: 36,
    color: '#222',
    marginBottom: 25
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#149447'
  },

  subtitle: {
    color: '#999',
    fontSize: 13,
    marginTop: 5,
    marginBottom: 30
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14
  },

  button: {
    height: 52,
    backgroundColor: '#0FA33A',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15
  },

  loginArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25
  },

  loginText: {
    color: '#555',
    fontSize: 13
  },

  loginLink: {
    color: '#149447',
    fontWeight: '700',
    fontSize: 13
  }

});