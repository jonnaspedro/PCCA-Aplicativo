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
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import { auth, db } from '../firebaseconfig';

import {
  doc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';

export default function CadastroScreen({ navigation }) {
  const { width } = useWindowDimensions();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  const smallScreen = width < 360;
  const largeScreen = width >= 600;

  async function cadastrar() {
    const nomeFormatado = nome.trim();
    const emailFormatado = email.trim().toLowerCase();

    if (
      !nomeFormatado ||
      !emailFormatado ||
      !senha ||
      !confirmarSenha
    ) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    const emailValido =
      /^[a-zA-Z0-9._%+-]+@(discente\.ifpe\.edu\.br|jaboatao\.ifpe\.edu\.br)$/;

    if (!emailValido.test(emailFormatado)) {
      Alert.alert(
        'E-mail inválido',
        'Use apenas e-mails institucionais do IFPE.'
      );
      return;
    }

    if (senha.length < 6) {
      Alert.alert(
        'Senha inválida',
        'A senha deve ter pelo menos 6 caracteres.'
      );
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert(
        'Erro',
        'As senhas não são iguais.'
      );
      return;
    }

    try {
      setCarregando(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          emailFormatado,
          senha
        );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: nomeFormatado,
      });

      await setDoc(doc(db, 'usuarios', user.uid), {
        uid: user.uid,
        nome: nomeFormatado,
        email: emailFormatado,
        criadoEm: serverTimestamp(),
      });

      Alert.alert(
        'Cadastro realizado',
        'Sua conta foi criada com sucesso!',
        [
          {
            text: 'Continuar',
            onPress: () => navigation.replace('Home'),
          },
        ]
      );

    } catch (error) {
      console.error(
        'Erro no cadastro:',
        error
      );

      if (
        error.code ===
        'auth/email-already-in-use'
      ) {
        Alert.alert(
          'E-mail já cadastrado',
          'Esse e-mail já possui uma conta.'
        );

      } else if (
        error.code === 'auth/weak-password'
      ) {
        Alert.alert(
          'Senha fraca',
          'A senha deve ter pelo menos 6 caracteres.'
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
          'Não foi possível criar sua conta. Tente novamente.'
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
              disabled={carregando}
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
              Criar sua conta
            </Text>

            <Text style={styles.subtitle}>
              Cadastre-se para compartilhar conhecimento
              com outros estudantes.
            </Text>

            <Text style={styles.label}>
              Nome
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="#999"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
              editable={!carregando}
            />

            <Text style={styles.label}>
              E-mail
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail institucional"
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
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              editable={!carregando}
            />

            <Text style={styles.label}>
              Confirmar senha
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite a senha novamente"
              placeholderTextColor="#999"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
              editable={!carregando}
            />

            <TouchableOpacity
              style={[
                styles.button,
                carregando &&
                  styles.buttonDisabled,
                {
                  height: smallScreen
                    ? 46
                    : 50,
                },
              ]}
              onPress={cadastrar}
              disabled={carregando}
              activeOpacity={0.8}
            >
              {carregando ? (
                <ActivityIndicator
                  color="#FFFFFF"
                />
              ) : (
                <Text style={styles.buttonText}>
                  Cadastrar
                </Text>
              )}
            </TouchableOpacity>

            <View style={styles.loginArea}>
              <Text style={styles.loginText}>
                Já possui uma conta?
              </Text>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Login')
                }
                disabled={carregando}
              >
                <Text style={styles.loginLink}>
                  Entrar
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
    marginBottom: 6,
  },

  subtitle: {
    color: '#999',
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 25,
  },

  label: {
    fontSize: 13,
    color: '#555',
    marginBottom: 7,
  },

  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#222',
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },

  button: {
    width: '100%',
    backgroundColor: '#149447',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },

  buttonDisabled: {
    opacity: 0.7,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  loginArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    paddingBottom: 10,
  },

  loginText: {
    color: '#555',
    fontSize: 12,
  },

  loginLink: {
    color: '#149447',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 5,
  },
});