import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Recuperar({ navigation, route }) {

  const email = route?.params?.email || '';

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
            ✓
          </Text>
        </View>

        <Text style={styles.title}>
          E-mail enviado!
        </Text>

        <Text style={styles.text}>
          Enviamos as instruções para recuperar
          sua senha.
        </Text>

        <Text style={styles.email}>
          {email}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>
            Voltar para o login
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
    left: 20
  },

  backText: {
    fontSize: 36
  },

  content: {
    flex: 1,
    padding: 28,
    paddingTop: 130
  },

  icon: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#EAF7EE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },

  iconText: {
    color: '#149447',
    fontSize: 30,
    fontWeight: '700'
  },

  title: {
    color: '#149447',
    fontSize: 26,
    fontWeight: '700'
  },

  text: {
    color: '#777',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10
  },

  email: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8
  },

  button: {
    height: 52,
    backgroundColor: '#0FA33A',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700'
  }

});