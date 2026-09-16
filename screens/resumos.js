import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function Resumos({ navigation }) {

  const resumos = [
    ['Matemática', 'Funções do 1º e 2º grau', '12 min'],
    ['Física', 'Movimento Retilíneo Uniforme', '8 min'],
    ['História', 'Era Vargas', '15 min'],
    ['Biologia', 'Sistema Respiratório', '10 min']
  ];

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
            Meus resumos
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Criar')}
          >
            <Text style={styles.add}>
              +
            </Text>
          </TouchableOpacity>

        </View>

        {resumos.map((item, index) => (

          <TouchableOpacity
            key={index}
            style={styles.card}
          >

            <View style={styles.icon}>
              <Text style={styles.iconText}>
                ≡
              </Text>
            </View>

            <View style={styles.info}>

              <Text style={styles.subject}>
                {item[0]}
              </Text>

              <Text style={styles.name}>
                {item[1]}
              </Text>

              <Text style={styles.time}>
                Leitura de {item[2]}
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
    paddingTop: 50
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25
  },

  back: {
    fontSize: 36,
    color: '#222'
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#149447'
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

  icon: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#EAF7EE',
    alignItems: 'center',
    justifyContent: 'center'
  },

  iconText: {
    color: '#149447',
    fontSize: 20
  },

  info: {
    flex: 1,
    marginLeft: 12
  },

  subject: {
    color: '#149447',
    fontSize: 10,
    fontWeight: '700'
  },

  name: {
    color: '#333',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 3
  },

  time: {
    color: '#999',
    fontSize: 9,
    marginTop: 4
  },

  arrow: {
    fontSize: 22,
    color: '#AAA'
  }

});