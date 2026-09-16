import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function Grupos({ navigation }) {

  const grupos = [
    ['Matemática ENEM', '128 membros'],
    ['Física - Ensino Médio', '86 membros'],
    ['Vestibular 2026', '245 membros'],
    ['Biologia', '74 membros']
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
            Grupos
          </Text>

          <TouchableOpacity>
            <Text style={styles.add}>
              +
            </Text>
          </TouchableOpacity>

        </View>

        {grupos.map((grupo, index) => (

          <TouchableOpacity
            key={index}
            style={styles.card}
          >

            <View style={styles.groupIcon}>
              <Text style={styles.groupIconText}>
                #
              </Text>
            </View>

            <View style={styles.info}>

              <Text style={styles.groupName}>
                {grupo[0]}
              </Text>

              <Text style={styles.members}>
                {grupo[1]}
              </Text>

            </View>

            <Text style={styles.arrow}>
              ›
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
    alignItems: 'center',
    justifyContent: 'space-between',
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

  add: {
    fontSize: 30,
    color: '#149447'
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    marginBottom: 12
  },

  groupIcon: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#EAF7EE',
    alignItems: 'center',
    justifyContent: 'center'
  },

  groupIconText: {
    color: '#149447',
    fontSize: 22,
    fontWeight: '700'
  },

  info: {
    flex: 1,
    marginLeft: 12
  },

  groupName: {
    color: '#333',
    fontSize: 13,
    fontWeight: '700'
  },

  members: {
    color: '#999',
    fontSize: 10,
    marginTop: 4
  },

  arrow: {
    color: '#AAA',
    fontSize: 22
  }

});