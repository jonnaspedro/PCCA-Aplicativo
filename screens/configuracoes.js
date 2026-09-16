import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch
} from 'react-native';

export default function Configuracoes({ navigation }) {

  const [notificacoes, setNotificacoes] = useState(true);
  const [email, setEmail] = useState(true);

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
            Configurações
          </Text>

          <View style={{ width: 30 }} />

        </View>

        <Text style={styles.section}>
          Preferências
        </Text>

        <View style={styles.item}>

          <View style={styles.info}>

            <Text style={styles.itemTitle}>
              Notificações
            </Text>

            <Text style={styles.itemDescription}>
              Receber notificações do aplicativo
            </Text>

          </View>

          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
            trackColor={{
              false: '#DDD',
              true: '#8BD4A2'
            }}
            thumbColor={
              notificacoes
                ? '#149447'
                : '#FFF'
            }
          />

        </View>

        <View style={styles.item}>

          <View style={styles.info}>

            <Text style={styles.itemTitle}>
              E-mails
            </Text>

            <Text style={styles.itemDescription}>
              Receber novidades por e-mail
            </Text>

          </View>

          <Switch
            value={email}
            onValueChange={setEmail}
            trackColor={{
              false: '#DDD',
              true: '#8BD4A2'
            }}
            thumbColor={
              email
                ? '#149447'
                : '#FFF'
            }
          />

        </View>

        <Text style={styles.section}>
          Conta
        </Text>

        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>
            Alterar senha
          </Text>
          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>
            Editar perfil
          </Text>
          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate('Ajuda')}
        >
          <Text style={styles.linkText}>
            Ajuda e suporte
          </Text>
          <Text style={styles.arrow}>
            ›
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
    padding: 20,
    paddingTop: 48
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
  },

  back: {
    fontSize: 36
  },

  title: {
    color: '#149447',
    fontSize: 21,
    fontWeight: '700'
  },

  section: {
    fontSize: 14,
    fontWeight: '700',
    color: '#555',
    marginTop: 10,
    marginBottom: 8
  },

  item: {
    minHeight: 65,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center'
  },

  info: {
    flex: 1
  },

  itemTitle: {
    fontSize: 13,
    color: '#333',
    fontWeight: '600'
  },

  itemDescription: {
    fontSize: 10,
    color: '#999',
    marginTop: 3
  },

  link: {
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center'
  },

  linkText: {
    flex: 1,
    color: '#444',
    fontSize: 13
  },

  arrow: {
    fontSize: 22,
    color: '#AAA'
  }

});