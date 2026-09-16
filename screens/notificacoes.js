import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function Notificacoes({ navigation }) {

  const notificacoes = [
    {
      titulo: 'Nova resposta',
      texto: 'Ana respondeu sua pergunta sobre Matemática.',
      tempo: '10 min'
    },
    {
      titulo: 'Nova tarefa',
      texto: 'Você adicionou uma nova tarefa ao cronograma.',
      tempo: '1h'
    },
    {
      titulo: 'Novo conteúdo',
      texto: 'Um novo resumo de Física está disponível.',
      tempo: '3h'
    }
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
            Notificações
          </Text>

          <View style={{ width: 30 }} />

        </View>

        {notificacoes.map((item, index) => (

          <TouchableOpacity
            style={styles.card}
            key={index}
          >

            <View style={styles.icon}>
              <Text style={styles.iconText}>
                •
              </Text>
            </View>

            <View style={styles.info}>

              <Text style={styles.notificationTitle}>
                {item.titulo}
              </Text>

              <Text style={styles.notificationText}>
                {item.texto}
              </Text>

            </View>

            <Text style={styles.time}>
              {item.tempo}
            </Text>

          </TouchableOpacity>

        ))}

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
    alignItems: 'center',
    marginBottom: 25
  },

  back: {
    fontSize: 36
  },

  title: {
    fontSize: 21,
    color: '#149447',
    fontWeight: '700'
  },

  card: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE'
  },

  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#EAF7EE',
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconText: {
    color: '#149447',
    fontSize: 25
  },

  info: {
    flex: 1,
    marginLeft: 12
  },

  notificationTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#333'
  },

  notificationText: {
    fontSize: 10,
    color: '#777',
    marginTop: 4,
    lineHeight: 15
  },

  time: {
    fontSize: 9,
    color: '#999'
  }

});