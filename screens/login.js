import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {

    if (!email || !senha) {
      Alert.alert(
        'Atenção',
        'Preencha seu e-mail e sua senha.'
      );
      return;
    }

    navigation.replace('Home');
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>

      <View style={styles.content}>

        <Text style={styles.title}>
          Bem-vindo de volta!
        </Text>

        <Text style={styles.subtitle}>
          Acesse sua conta para continuar
        </Text>

        <Text style={styles.label}>
          E-mail
        </Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>
          Senha
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <View style={styles.options}>

          <TouchableOpacity>
            <Text style={styles.remember}>
              □ Lembrar-me
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EsqueciSenha')
            }
          >
            <Text style={styles.forgot}>
              Esqueceu sua senha?
            </Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={entrar}
        >
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>

        <Text style={styles.or}>
          ou
        </Text>

        <TouchableOpacity style={styles.googleButton}>

          <Text style={styles.google}>
            G
          </Text>

          <Text style={styles.googleText}>
            Entrar com Google
          </Text>

        </TouchableOpacity>

        <View style={styles.registerArea}>

          <Text style={styles.registerText}>
            Não tem uma conta?
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Cadastro')
            }
          >
            <Text style={styles.registerLink}>
              {' '}Cadastre-se
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  back: {
    position: 'absolute',
    top: 42,
    left: 20,
    zIndex: 5
  },

  backText: {
    fontSize: 36,
    color: '#222'
  },

  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 110
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

  label: {
    fontSize: 13,
    color: '#555',
    marginBottom: 7
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#E4E4E4',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 17,
    fontSize: 14,
    color: '#222'
  },

  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22
  },

  remember: {
    color: '#555',
    fontSize: 12
  },

  forgot: {
    color: '#149447',
    fontSize: 12,
    fontWeight: '600'
  },

  button: {
    height: 52,
    backgroundColor: '#0FA33A',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700'
  },

  or: {
    textAlign: 'center',
    color: '#999',
    marginVertical: 14
  },

  googleButton: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  google: {
    color: '#4285F4',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 10
  },

  googleText: {
    color: '#444',
    fontSize: 14
  },

  registerArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25
  },

  registerText: {
    color: '#555',
    fontSize: 13
  },

  registerLink: {
    color: '#149447',
    fontSize: 13,
    fontWeight: '700'
  }

});