import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function Cronograma({ navigation }) {

  const [dia, setDia] = useState(20);

  const tarefas = [
    {
      materia: 'Matemática',
      titulo: 'Exercícios sobre funções',
      cor: '#3976D8'
    },
    {
      materia: 'Física',
      titulo: 'Leitura: Movimento Retilíneo',
      cor: '#A742A7'
    },
    {
      materia: 'História',
      titulo: 'Resumo: Era Vargas',
      cor: '#F29A21'
    }
  ];

  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.scroll}
      >

        <View style={styles.header}>

          <Text style={styles.title}>
            Cronograma
          </Text>

          <TouchableOpacity>
            <Text style={styles.calendar}>
              □
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.month}>

          <TouchableOpacity>
            <Text style={styles.arrow}>
              ‹
            </Text>
          </TouchableOpacity>

          <Text style={styles.monthText}>
            Maio 2025
          </Text>

          <TouchableOpacity>
            <Text style={styles.arrow}>
              ›
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.week}>
          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(
            (item, index) => (
              <Text
                key={index}
                style={styles.weekDay}
              >
                {item}
              </Text>
            )
          )}
        </View>

        <View style={styles.days}>

          {[18, 19, 20, 21, 22, 23, 24].map(
            number => (

              <TouchableOpacity
                key={number}
                onPress={() => setDia(number)}
                style={[
                  styles.day,
                  dia === number && styles.selectedDay
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    dia === number &&
                      styles.selectedDayText
                  ]}
                >
                  {number}
                </Text>
              </TouchableOpacity>

            )
          )}

        </View>

        <View style={styles.taskHeader}>

          <Text style={styles.taskTitle}>
            Tarefas do dia
          </Text>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>
              + Adicionar tarefa
            </Text>
          </TouchableOpacity>

        </View>

        {tarefas.map((task, index) => (

          <View
            key={index}
            style={styles.task}
          >

            <View
              style={[
                styles.line,
                {
                  backgroundColor: task.cor
                }
              ]}
            />

            <View style={styles.taskInfo}>

              <Text style={styles.subject}>
                {task.materia}
              </Text>

              <Text style={styles.taskName}>
                {task.titulo}
              </Text>

            </View>

            <TouchableOpacity>
              <Text style={styles.checkbox}>
                □
              </Text>
            </TouchableOpacity>

          </View>

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
        style={styles.tab}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.icon}>⌂</Text>
        <Text style={styles.text}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('Estudar')}
      >
        <Text style={styles.icon}>▣</Text>
        <Text style={styles.text}>Estudos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <Text style={styles.activeIcon}>□</Text>
        <Text style={styles.activeText}>Cronograma</Text>
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

  calendar: {
    fontSize: 22,
    color: '#555'
  },

  month: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },

  arrow: {
    fontSize: 25,
    color: '#555'
  },

  monthText: {
    fontWeight: '700',
    color: '#444'
  },

  week: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },

  weekDay: {
    fontSize: 11,
    color: '#999',
    width: 35,
    textAlign: 'center'
  },

  days: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8
  },

  day: {
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  selectedDay: {
    backgroundColor: '#149447'
  },

  dayText: {
    fontSize: 12,
    color: '#555'
  },

  selectedDayText: {
    color: '#FFFFFF',
    fontWeight: '700'
  },

  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },

  taskTitle: {
    fontSize: 15,
    fontWeight: '700'
  },

  addButton: {
    backgroundColor: '#149447',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20
  },

  addText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600'
  },

  task: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE'
  },

  line: {
    width: 3,
    height: 42,
    borderRadius: 3
  },

  taskInfo: {
    flex: 1,
    marginLeft: 12
  },

  subject: {
    fontSize: 11,
    color: '#444',
    fontWeight: '700'
  },

  taskName: {
    fontSize: 10,
    color: '#888',
    marginTop: 3
  },

  checkbox: {
    fontSize: 20,
    color: '#AAA'
  },

  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    flexDirection: 'row'
  },

  tab: {
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