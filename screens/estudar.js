import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function Estudar({ navigation }) {

  const disciplinas = [
    ['Matemática', '12 resumos • 8 perguntas', '#149447'],
    ['Física', '8 resumos • 6 perguntas', '#3976D8'],
    ['Química', '10 resumos • 7 perguntas', '#F29A21'],
    ['Biologia', '9 resumos • 5 perguntas', '#38A852'],
    ['História', '7 resumos • 4 perguntas', '#7439D8']
  ];

  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.title}>
          Estudos
        </Text>

        <View style={styles.search}>

          <Text style={styles.searchIcon}>
            ⌕
          </Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por disciplina ou conteúdo..."
            placeholderTextColor="#999"
          />

        </View>

        <View style={styles.filters}>

          <TouchableOpacity style={styles.activeFilter}>
            <Text style={styles.activeFilterText}>
              Disciplinas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>
              Resumos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>
              Perguntas
            </Text>
          </TouchableOpacity>

        </View>

        {disciplinas.map((item, index) => (

          <TouchableOpacity
            key={index}
            style={styles.subject}
          >

            <View
              style={[
                styles.subjectIcon,
                {
                  backgroundColor: item[2]
                }
              ]}
            >
              <Text style={styles.subjectLetter}>
                {item[0].charAt(0)}
              </Text>
            </View>

            <View style={styles.subjectInfo}>

              <Text style={styles.subjectName}>
                {item[0]}
              </Text>

              <Text style={styles.subjectDescription}>
                {item[1]}
              </Text>

            </View>

            <Text style={styles.arrow}>
              ›
            </Text>

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
        style={styles.tab}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.icon}>⌂</Text>
        <Text style={styles.text}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <Text style={styles.activeIcon}>▣</Text>
        <Text style={styles.activeText}>Estudos</Text>
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
    paddingTop: 50,
    paddingBottom: 100
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#149447',
    marginBottom: 15
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
    fontSize: 22,
    color: '#777'
  },

  searchInput: {
    flex: 1,
    marginLeft: 7,
    fontSize: 12
  },

  filters: {
    flexDirection: 'row',
    marginTop: 18,
    marginBottom: 10
  },

  activeFilter: {
    backgroundColor: '#149447',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20
  },

  activeFilterText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '600'
  },

  filter: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },

  filterText: {
    color: '#777',
    fontSize: 11
  },

  subject: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE'
  },

  subjectIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  subjectLetter: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 17
  },

  subjectInfo: {
    flex: 1,
    marginLeft: 12
  },

  subjectName: {
    fontSize: 13,
    color: '#333',
    fontWeight: '700'
  },

  subjectDescription: {
    fontSize: 10,
    color: '#888',
    marginTop: 3
  },

  arrow: {
    fontSize: 23,
    color: '#AAA'
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
    color: '#777',
    fontSize: 9,
    marginTop: 3
  },

  activeIcon: {
    fontSize: 19,
    color: '#149447'
  },

  activeText: {
    color: '#149447',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 3
  }

});