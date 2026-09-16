import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function Ajuda({ navigation }) {

  const perguntas = [
    'Como criar uma conta?',
    'Como criar um resumo?',
    'Como fazer uma pergunta?',
    'Como responder outros alunos?',
    'Como alterar minha senha?',
    'Como editar meu perfil?'
  ];

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={styles.header}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.back}>
              ‹
            </Text>
          </TouchableOpacity>

          <Text style={styles.title}>
            Ajuda e suporte
          </Text>

          <View style={{ width: 30 }} />

        </View>

        <Text style={styles.subtitle}>
          Como podemos ajudar?
        </Text>

        {perguntas.map((item, index) => (

          <TouchableOpacity
            style={styles.item}
            key={index}
          >

            <Text style={styles.question}>
              {item}
            </Text>

            <Text style={styles.arrow}>
              ›
            </Text>

          </TouchableOpacity>

        ))}

        <View style={styles.contact}>

          <Text style={styles.contactTitle}>
            Ainda precisa de ajuda?
          </Text>

          <Text style={styles.contactText}>
            Entre em contato com nossa equipe.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Entrar em contato
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  scroll: {
    padding: 20,
    paddingTop: 48
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  back: {
    fontSize: 36
  },

  title: {
    color: '#149447',
    fontSize: 20,
    fontWeight: '700'
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 30,
    marginBottom: 12
  },

  item: {
    minHeight: 55,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center'
  },

  question: {
    flex: 1,
    color: '#444',
    fontSize: 13
  },

  arrow: {
    fontSize: 22,
    color: '#AAA'
  },

  contact: {
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#EAF7EE',
    alignItems: 'center'
  },

  contactTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#149447'
  },

  contactText: {
    fontSize: 11,
    color: '#666',
    marginTop: 5
  },

  button: {
    backgroundColor: '#149447',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 15
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700'
  }

});