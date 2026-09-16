import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';

export default function Criar({ navigation }) {

  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');

  function publicar() {

    if (!titulo || !conteudo) {
      Alert.alert(
        'Atenção',
        'Preencha os campos antes de publicar.'
      );
      return;
    }

    Alert.alert(
      'Publicado',
      'Seu conteúdo foi publicado!',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack()
        }
      ]
    );
  }

  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.scroll}
      >

        <View style={styles.header}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.back}>
              ‹
            </Text>
          </TouchableOpacity>

          <Text style={styles.title}>
            Criar
          </Text>

          <View style={{ width: 30 }} />

        </View>

        <Text style={styles.label}>
          O que você deseja criar?
        </Text>

        <View style={styles.types}>

          <TouchableOpacity style={styles.typeActive}>
            <Text style={styles.typeActiveText}>
              Pergunta
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.type}>
            <Text style={styles.typeText}>
              Resumo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.type}>
            <Text style={styles.typeText}>
              Material
            </Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.label}>
          Título
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite um título"
          placeholderTextColor="#999"
          value={titulo}
          onChangeText={setTitulo}
        />

        <Text style={styles.label}>
          Conteúdo
        </Text>

        <TextInput
          style={styles.textarea}
          placeholder="Escreva sua pergunta ou conteúdo..."
          placeholderTextColor="#999"
          multiline
          textAlignVertical="top"
          value={conteudo}
          onChangeText={setConteudo}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={publicar}
        >
          <Text style={styles.buttonText}>
            Publicar
          </Text>
        </TouchableOpacity>

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
    padding: 22,
    paddingTop: 48
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25
  },

  back: {
    fontSize: 36
  },

  title: {
    fontSize: 21,
    fontWeight: '700',
    color: '#149447'
  },

  label: {
    fontSize: 13,
    color: '#444',
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 10
  },

  types: {
    flexDirection: 'row',
    marginBottom: 10
  },

  typeActive: {
    backgroundColor: '#149447',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20
  },

  typeActiveText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700'
  },

  type: {
    paddingHorizontal: 16,
    paddingVertical: 9
  },

  typeText: {
    color: '#777',
    fontSize: 11
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 14
  },

  textarea: {
    height: 180,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 14,
    fontSize: 13
  },

  button: {
    height: 52,
    backgroundColor: '#149447',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700'
  }

});