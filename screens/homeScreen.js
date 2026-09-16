import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >

        <View style={styles.header}>

          <View>
            <Text style={styles.hello}>
              Olá, Jonnas! 👋
            </Text>

            <Text style={styles.question}>
              O que você quer aprender hoje?
            </Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Notificacoes')
            }
          >
            <Text style={styles.notification}>
              ♧
            </Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                2
              </Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.search}>

          <Text style={styles.searchIcon}>
            ⌕
          </Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Buscar conteúdo, perguntas..."
            placeholderTextColor="#999"
          />

        </View>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Próximas tarefas
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Cronograma')
            }
          >
            <Text style={styles.seeAll}>
              Ver todas
            </Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity
          style={styles.task}
          onPress={() => navigation.navigate('Estudar')}
        >

          <View style={[styles.subjectIcon, { backgroundColor: '#EEE8FF' }]}>
            <Text>∑</Text>
          </View>

          <View style={styles.taskInfo}>

            <Text style={styles.taskSubject}>
              Matemática
            </Text>

            <Text style={styles.taskName}>
              Exercícios sobre funções
            </Text>

          </View>

          <Text style={styles.date}>
            20/05
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.task}>

          <View style={[styles.subjectIcon, { backgroundColor: '#FFE8E8' }]}>
            <Text>▣</Text>
          </View>

          <View style={styles.taskInfo}>

            <Text style={styles.taskSubject}>
              Física
            </Text>

            <Text style={styles.taskName}>
              Leitura: Movimento Retilíneo
            </Text>

          </View>

          <Text style={styles.date}>
            21/05
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.task}>

          <View style={[styles.subjectIcon, { backgroundColor: '#FFF0D8' }]}>
            <Text>▤</Text>
          </View>

          <View style={styles.taskInfo}>

            <Text style={styles.taskSubject}>
              História
            </Text>

            <Text style={styles.taskName}>
              Resumo: Era Vargas
            </Text>

          </View>

          <Text style={styles.date}>
            22/05
          </Text>

        </TouchableOpacity>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Atividades recentes
          </Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>
              Ver todas
            </Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity
          style={styles.activity}
          onPress={() =>
            navigation.navigate('Perguntas')
          }
        >

          <View style={styles.activityIcon}>
            <Text>?</Text>
          </View>

          <View style={styles.activityInfo}>

            <Text style={styles.activityTitle}>
              Nova resposta na sua pergunta
            </Text>

            <Text style={styles.activityText}>
              Alguém respondeu sua dúvida sobre Matemática
            </Text>

          </View>

        </TouchableOpacity>

      </ScrollView>

      <BottomBar navigation={navigation} />

    </View>
  );
}

function BottomBar({ navigation }) {

  return (
    <View style={styles.bottom}>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.activeIcon}>⌂</Text>
        <Text style={styles.activeText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('Estudar')}
      >
        <Text style={styles.icon}>▣</Text>
        <Text style={styles.text}>Estudos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('Cronograma')}
      >
        <Text style={styles.icon}>□</Text>
        <Text style={styles.text}>Cronograma</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('Perguntas')}
      >
        <Text style={styles.icon}>♧</Text>
        <Text style={styles.text}>Comunidade</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
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
    paddingBottom: 100
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 18
  },

  hello: {
    color: '#149447',
    fontSize: 19,
    fontWeight: '700'
  },

  question: {
    color: '#777',
    fontSize: 12,
    marginTop: 3
  },

  notification: {
    fontSize: 25,
    color: '#222'
  },

  badge: {
    position: 'absolute',
    right: -4,
    top: -5,
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#D71920',
    justifyContent: 'center',
    alignItems: 'center'
  },

  badgeText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '700'
  },

  search: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12
  },

  searchIcon: {
    fontSize: 23,
    color: '#777'
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 13,
    color: '#222'
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222'
  },

  seeAll: {
    fontSize: 11,
    color: '#149447',
    fontWeight: '600'
  },

  task: {
    minHeight: 65,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9
  },

  subjectIcon: {
    width: 38,
    height: 38,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  taskInfo: {
    flex: 1,
    marginLeft: 12
  },

  taskSubject: {
    fontSize: 12,
    fontWeight: '700',
    color: '#444'
  },

  taskName: {
    fontSize: 11,
    color: '#777',
    marginTop: 2
  },

  date: {
    fontSize: 9,
    color: '#999'
  },

  activity: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row'
  },

  activityIcon: {
    width: 36,
    height: 36,
    backgroundColor: '#EEE8FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  activityInfo: {
    flex: 1,
    marginLeft: 10
  },

  activityTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#444'
  },

  activityText: {
    fontSize: 10,
    color: '#888',
    marginTop: 3
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
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
    fontSize: 20,
    color: '#149447'
  },

  activeText: {
    fontSize: 9,
    color: '#149447',
    fontWeight: '700',
    marginTop: 3
  }

});