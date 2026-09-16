import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default function EsqueciSenha({ navigation }) {

  const [email, setEmail] = useState('');

  function continuar() {

    if (!email) {
      Alert.alert(
        'Atenção',
        'Digite seu e-mail.'
      );
      return;
    }

    navigation.navigate('Recuperar', {
      email
    });
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>
          ‹
        </Text>
      </TouchableOpacity>

      <View style={styles.content}>

        <View style={styles.icon}>
          <Text style={styles.iconText}>
            ?
          </Text>
        </View>

        <Text style={styles.title}>
          Esqueceu sua senha?
        </Text>

        <Text style={styles.subtitle}>
          Informe seu e-mail para receber as instruções
          de recuperação.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={continuar}
        >
          <Text style={styles.buttonText}>
            Continuar
          </Text>
        </TouchableOpacity>

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
    padding: 28,
    paddingTop: 120
  },

  icon: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#EAF7EE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },

  iconText: {
    fontSize: 27,
    color: '#149447',
    fontWeight: '700'
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#149447'
  },

  subtitle: {
    fontSize: 14,
    color: '#888',
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 25
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 15
  },

  button: {
    height: 52,
    backgroundColor: '#0FA33A',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700'
  }

});