import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function Perguntas({ navigation }) {

  const perguntas = [
    {
      nome: 'Ana Silva',
      materia: 'Matemática',
      tempo: '2h',
      pergunta: 'Alguém pode me ajudar com este exercício de funções?',
      respostas: '5 respostas'
    },
    {
      nome: 'Pedro Lucas',
      materia: 'Física',
      tempo: '4h',
      pergunta: 'Não entendi como calcular a velocidade média, alguém explica?',
      respostas: '3 respostas'
    },
    {
      nome: 'Maria Eduarda',
      materia: 'Química',
      tempo: '5h',
      pergunta: 'Alguém tem um bom resumo sobre ligações químicas?',
      respostas: '4 respostas'
    }
  ];

  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>

          <Text style={styles.title}>
            Comunidade
          </Text>

          <TouchableOpacity
            style={styles.newButton}
            onPress={() =>
              navigation.navigate('Criar')
            }
          >
            <Text style={styles.newText}>
              + Nova pergunta
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.tabs}>

          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>
              Perguntas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.tabText}>
              Mais recentes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.tabText}>
              Mais curtidas
            </Text>
          </TouchableOpacity>

        </View>

        {perguntas.map((item, index) => (

          <TouchableOpacity
            key={index}
            style={styles.card}
          >

            <View style={styles.userRow}>

              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {item.nome.charAt(0)}
                </Text>
              </View>

              <View style={styles.userInfo}>

                <Text style={styles.name}>
                  {item.nome}
                </Text>

                <Text style={styles.subject}>
                  {item.materia}
                </Text>

              </View>

              <Text style={styles.time}>
                {item.tempo}
              </Text>

            </View>

            <Text style={styles.question}>
              {item.pergunta}
            </Text>

            <View style={styles.footer}>

              <Text style={styles.answers}>
                ○ {item.respostas}
              </Text>

              <Text style={styles.like}>
                ♡ 12
              </Text>

            </View>

          </TouchableOpacity>

        ))}

      </ScrollView>

      <BottomBar navigation={navigation} />

    </View>
  );
}

function BottomBar({ navigation }) {

  return (
    <View style={styles.bottom}>

      <TouchableOpacity
        style={styles.tabBottom}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.icon}>⌂</Text>
        <Text style={styles.text}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabBottom}
        onPress={() => navigation.navigate('Estudar')}
      >
        <Text style={styles.icon}>▣</Text>
        <Text style={styles.text}>Estudos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabBottom}
        onPress={() => navigation.navigate('Cronograma')}
      >
        <Text style={styles.icon}>□</Text>
        <Text style={styles.text}>Cronograma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabBottom}>
        <Text style={styles.activeIcon}>♧</Text>
        <Text style={styles.activeText}>Comunidade</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabBottom}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={styles.icon}>♙</Text>
        <Text style={styles.text}>Perfil</Text>
      </TouchableOpacity>

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
    paddingTop: 50,
    paddingBottom: 100
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontSize: 22,
    color: '#149447',
    fontWeight: '700'
  },

  newButton: {
    backgroundColor: '#149447',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20
  },

  newText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700'
  },

  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 12
  },

  activeTab: {
    backgroundColor: '#149447',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20
  },

  activeTabText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700'
  },

  tabText: {
    fontSize: 10,
    color: '#777',
    marginLeft: 17
  },

  card: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 15
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#D8EADB',
    justifyContent: 'center',
    alignItems: 'center'
  },

  avatarText: {
    color: '#149447',
    fontWeight: '700'
  },

  userInfo: {
    flex: 1,
    marginLeft: 10
  },

  name: {
    fontSize: 11,
    fontWeight: '700',
    color: '#333'
  },

  subject: {
    fontSize: 9,
    color: '#149447',
    marginTop: 2
  },

  time: {
    color: '#999',
    fontSize: 9
  },

  question: {
    color: '#444',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 10
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  answers: {
    color: '#999',
    fontSize: 10
  },

  like: {
    color: '#999',
    fontSize: 10
  },

  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    flexDirection: 'row'
  },

  tabBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  icon: {
    fontSize: 19,
    color: '#777'
  },

  text: {
    fontSize: 9,
    color: '#777',
    marginTop: 3
  },

  activeIcon: {
    fontSize: 19,
    color: '#149447'
  },

  activeText: {
    fontSize: 9,
    color: '#149447',
    fontWeight: '700',
    marginTop: 3
  }

});