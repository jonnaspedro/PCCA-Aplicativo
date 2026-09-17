import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';

import {
  sendPasswordResetEmail,
} from 'firebase/auth';

import { auth } from '../firebaseconfig';

export default function EsqueciSenhaScreen({
  navigation,
}) {
  const { width } = useWindowDimensions();

  const [email, setEmail] = useState('');
  const [enviando, setEnviando] = useState(false);

  const smallScreen = width < 360;
  const largeScreen = width >= 600;

  async function enviarRecuperacao() {
    const emailFormatado = email
      .trim()
      .toLowerCase();

    if (!emailFormatado) {
      Alert.alert(
        'Atenção',
        'Digite seu e-mail.'
      );
      return;
    }

    try {
      setEnviando(true);

      await sendPasswordResetEmail(
        auth,
        emailFormatado
      );

      Alert.alert(
        'E-mail enviado',
        'O link de recuperação foi enviado para seu e-mail.',
        [
          {
            text: 'Voltar para o login',
            onPress: () =>
              navigation.replace('Login'),
          },
        ]
      );

    } catch (error) {
      console.error(
        'Erro na recuperação:',
        error
      );

      if (
        error.code === 'auth/user-not-found'
      ) {
        Alert.alert(
          'E-mail não encontrado',
          'Não encontramos uma conta com esse e-mail.'
        );

      } else if (
        error.code === 'auth/invalid-email'
      ) {
        Alert.alert(
          'E-mail inválido',
          'Digite um e-mail válido.'
        );

      } else {
        Alert.alert(
          'Erro',
          'Não foi possível enviar o e-mail de recuperação.'
        );
      }

    } finally {
      setEnviando(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.content,
              {
                paddingHorizontal: smallScreen
                  ? 18
                  : largeScreen
                  ? 40
                  : 28,
              },
            ]}
          >
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
              disabled={enviando}
            >
              <Text style={styles.backText}>
                ‹
              </Text>
            </TouchableOpacity>

            <Text
              style={[
                styles.title,
                {
                  fontSize: smallScreen
                    ? 21
                    : 25,
                },
              ]}
            >
              Esqueceu sua senha?
            </Text>

            <Text style={styles.subtitle}>
              Digite seu e-mail e enviaremos um link
              para recuperar sua senha.
            </Text>

            <Text style={styles.label}>
              E-mail
            </Text>

            <TextInput
              style={[
                styles.input,
                {
                  height: smallScreen
                    ? 46
                    : 50,
                },
              ]}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              editable={!enviando}
            />

            <TouchableOpacity
              style={[
                styles.button,
                enviando &&
                  styles.buttonDisabled,
                {
                  height: smallScreen
                    ? 46
                    : 50,
                },
              ]}
              onPress={enviarRecuperacao}
              disabled={enviando}
              activeOpacity={0.8}
            >
              {enviando ? (
                <ActivityIndicator
                  color="#FFFFFF"
                />
              ) : (
                <Text style={styles.buttonText}>
                  Enviar recuperação
                </Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() =>
                navigation.replace('Login')
              }
              disabled={enviando}
            >
              <Text style={styles.loginText}>
                Voltar para o login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  keyboard: {
    flex: 1,
  },

  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 25,
  },

  content: {
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  backText: {
    fontSize: 34,
    fontWeight: '300',
    color: '#333',
  },

  title: {
    fontWeight: '700',
    color: '#149447',
    marginBottom: 7,
  },

  subtitle: {
    color: '#999',
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 30,
  },

  label: {
    fontSize: 13,
    color: '#555',
    marginBottom: 7,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#222',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },

  button: {
    width: '100%',
    backgroundColor: '#149447',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonDisabled: {
    opacity: 0.7,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  loginButton: {
    alignItems: 'center',
    marginTop: 22,
  },

  loginText: {
    color: '#149447',
    fontSize: 12,
    fontWeight: '600',
  },
});