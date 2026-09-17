import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';

export default function TelaDeEntradaScreen({
  navigation,
}) {
  const { width, height } = useWindowDimensions();

  const smallScreen = width < 360;
  const landscape = width > height;

  const logoSize = Math.min(
    width * 0.55,
    landscape ? 180 : 220
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.content,
          {
            paddingHorizontal: smallScreen
              ? 18
              : 28,
          },
        ]}
      >
        <Image
          source={require('../images/logo.png')}
          style={{
            width: logoSize,
            height: logoSize,
            marginBottom: landscape ? 10 : 20,
          }}
          resizeMode="contain"
        />

        <Text
          style={[
            styles.title,
            {
              fontSize: smallScreen
                ? 25
                : 30,
            },
          ]}
        >
          PCCA
        </Text>

        <Text style={styles.subtitle}>
          Plataforma de Compartilhamento de
          Conhecimento entre Alunos
        </Text>

        <TouchableOpacity
          style={[
            styles.button,
            {
              width: Math.min(
                width - 56,
                360
              ),
              height: smallScreen
                ? 46
                : 50,
            },
          ]}
          onPress={() =>
            navigation.navigate('Login')
          }
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Entrar
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#149447',
    fontWeight: '700',
    marginBottom: 8,
  },

  subtitle: {
    width: '100%',
    maxWidth: 400,
    textAlign: 'center',
    color: '#888',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#149447',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});