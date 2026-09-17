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
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';

import { auth } from '../firebaseconfig';

export default function LoginScreen({ navigation }) {
  const { width } = useWindowDimensions();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const smallScreen = width < 360;
  const largeScreen = width >= 600;

  async function entrar() {
    if (!email.trim() || !senha) {
      Alert.alert(
        'Atenção',
        'Preencha seu e-mail e sua senha.'
      );
      return;
    }

    try {
      setCarregando(true);

      const emailFormatado = email
        .trim()
        .toLowerCase();

      if (Platform.OS === 'web' && lembrar) {
        await setPersistence(
          auth,
          browserLocalPersistence
        );
      }

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          emailFormatado,
          senha
        );

      console.log(
        'Usuário logado:',
        userCredential.user.email
      );

      navigation.replace('Home');

    } catch (error) {
      console.error('Erro no login:', error);

      if (
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/user-not-found'
      ) {
        Alert.alert(
          'Login inválido',
          'E-mail ou senha incorretos.'
        );

      } else if (error.code === 'auth/invalid-email') {
        Alert.alert(
          'E-mail inválido',
          'Digite um e-mail válido.'
        );

      } else if (error.code === 'auth/too-many-requests') {
        Alert.alert(
          'Muitas tentativas',
          'Tente novamente mais tarde.'
        );

      } else {
        Alert.alert(
          'Erro',
          'Não foi possível realizar o login.'
        );
      }

    } finally {
      setCarregando(false);
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
              activeOpacity={0.7}
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
              Bem-vindo de volta!
            </Text>

            <Text style={styles.subtitle}>
              Acesse sua conta para continuar
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
              placeholder="E-mail"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              editable={!carregando}
            />

            <Text style={styles.label}>
              Senha
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
              placeholder="Senha"
              placeholderTextColor="#999"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              editable={!carregando}
            />

            <View style={styles.options}>

              <TouchableOpacity
                style={styles.rememberArea}
                onPress={() =>
                  setLembrar(!lembrar)
                }
                activeOpacity={0.7}
              >

            
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    'EsqueciSenha'
                  )
                }
                activeOpacity={0.7}
              >
                <Text style={styles.forgot}>
                  Esqueceu sua senha?
                </Text>
              </TouchableOpacity>

            </View>

            <TouchableOpacity
              style={[
                styles.button,
                {
                  height: smallScreen
                    ? 46
                    : 50,
                },
                carregando &&
                  styles.buttonDisabled,
              ]}
              onPress={entrar}
              disabled={carregando}
              activeOpacity={0.8}
            >
              {carregando ? (
                <ActivityIndicator
                  color="#FFFFFF"
                />
              ) : (
                <Text style={styles.buttonText}>
                  Entrar
                </Text>
              )}
            </TouchableOpacity>


            <View style={styles.registerArea}>
              <Text style={styles.registerText}>
                Não tem uma conta?
              </Text>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Cadastro')
                }
                activeOpacity={0.7}
              >
                <Text style={styles.registerLink}>
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </View>

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
    marginBottom: 18,
  },

  backText: {
    fontSize: 34,
    fontWeight: '300',
    color: '#333',
  },

  title: {
    fontWeight: '700',
    color: '#149447',
    marginBottom: 5,
  },

  subtitle: {
    color: '#999',
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 28,
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
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },

  options: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },

  rememberArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 3,
    marginRight: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxChecked: {
    backgroundColor: '#149447',
    borderColor: '#149447',
  },

  check: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

  remember: {
    color: '#555',
    fontSize: 12,
  },

  forgot: {
    color: '#149447',
    fontSize: 12,
    fontWeight: '600',
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

  orContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#EEEEEE',
  },

  or: {
    color: '#999',
    fontSize: 12,
    marginHorizontal: 10,
  },

  googleButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  google: {
    color: '#4285F4',
    fontSize: 19,
    fontWeight: '700',
    marginRight: 9,
  },

  googleText: {
    color: '#444',
    fontSize: 13,
  },

  registerArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 23,
    paddingBottom: 10,
  },

  registerText: {
    color: '#555',
    fontSize: 12,
  },

  registerLink: {
    color: '#149447',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 5,
  },
});