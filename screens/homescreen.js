import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { signOut } from 'firebase/auth';

import { auth } from '../firebaseconfig';

export default function HomeScreen({ navigation }) {

  async function sair() {
    try {
      await signOut(auth);

      navigation.replace('Login');

    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <Text style={styles.title}>
          PCCA
        </Text>

        <Text style={styles.welcome}>
          Bem-vindo!
        </Text>

        <Text style={styles.subtitle}>
          Compartilhe conhecimento e colabore
          com outros estudantes.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Comunidade
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonSecondaryText}>
            Meus conteúdos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={sair}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutText}>
            Sair da conta
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
    paddingHorizontal: 28,
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    color: '#149447',
    marginBottom: 30,
  },

  welcome: {
    fontSize: 25,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: '#888',
    lineHeight: 21,
    marginBottom: 30,
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#149447',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  buttonSecondary: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#149447',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonSecondaryText: {
    color: '#149447',
    fontSize: 14,
    fontWeight: '700',
  },

  logoutButton: {
    alignItems: 'center',
    marginTop: 30,
  },

  logoutText: {
    color: '#777',
    fontSize: 13,
    fontWeight: '600',
  },

});