import React, { useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default function SplashScreen({ navigation }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.logoArea}>

        <View style={styles.logoGrid}>

          <View style={styles.row}>
            <View style={styles.redBlock} />
            <View style={styles.greenBlock} />
            <View style={styles.greenBlock} />
          </View>

          <View style={styles.row}>
            <View style={styles.greenBlock} />
            <View style={styles.greenBlock} />
          </View>

          <View style={styles.row}>
            <View style={styles.greenBlock} />
            <View style={styles.greenBlock} />
            <View style={styles.greenBlock} />
          </View>

          <View style={styles.row}>
            <View style={styles.greenBlock} />
            <View style={styles.greenBlock} />
          </View>

          <View style={styles.row}>
            <View style={styles.greenBlock} />
            <View style={styles.greenBlock} />
          </View>

        </View>

        <Text style={styles.logoText}>
          PCCA
        </Text>

        <Text style={styles.description}>
          Plataforma de{'\n'}
          Compartilhamento de{'\n'}
          Conhecimento
        </Text>

      </View>

      <View style={styles.loading}>

        <View style={styles.spinner} />

        <Text style={styles.loadingText}>
          Carregando...
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logoArea: {
    alignItems: 'center'
  },

  logoGrid: {
    marginBottom: 10
  },

  row: {
    flexDirection: 'row',
    height: 19,
    marginBottom: 4
  },

  greenBlock: {
    width: 19,
    height: 19,
    backgroundColor: '#149447',
    borderRadius: 3,
    marginRight: 4
  },

  redBlock: {
    width: 19,
    height: 19,
    backgroundColor: '#D71920',
    borderRadius: 50,
    marginRight: 4
  },

  logoText: {
    fontSize: 38,
    fontWeight: '800',
    color: '#149447',
    letterSpacing: -1
  },

  description: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    color: '#176B35',
    marginTop: 4
  },

  loading: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center'
  },

  spinner: {
    width: 25,
    height: 25,
    borderWidth: 3,
    borderColor: '#149447',
    borderTopColor: '#FFFFFF',
    borderRadius: 50,
    marginBottom: 8
  },

  loadingText: {
    color: '#149447',
    fontSize: 13
  }

});