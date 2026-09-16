import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';

export default function Perfil({ navigation }) {

  function sair() {

    Alert.alert(
      'Sair',
      'Deseja realmente sair da conta?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Sair',
          onPress: () =>
            navigation.replace('Login')
        }
      ]
    );

  }

  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >

        <View style={styles.profileHeader}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              J
            </Text>
          </View>

          <View style={styles.profileInfo}>

            <Text style={styles.name}>
              Jonnas Pedro
            </Text>

            <Text style={styles.email}>
              jonnas@email.com
            </Text>

          </View>

          <TouchableOpacity>
            <Text style={styles.edit}>
              ✎
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.menu}>

          <MenuItem
            icon="□"
            text="Minhas atividades"
          />

          <MenuItem
            icon="▤"
            text="Meus resumos"
            onPress={() => navigation.navigate('Resumos')}
          />

          <MenuItem
            icon="?"
            text="Perguntas feitas"
            onPress={() => navigation.navigate('Perguntas')}
          />

          <MenuItem
            icon="✓"
            text="Respostas dadas"
          />

          <View style={styles.separator} />

          <MenuItem
            icon="⚙"
            text="Configurações"
            onPress={() =>
              navigation.navigate('Configuracoes')
            }
          />

          <MenuItem
            icon="?"
            text="Ajuda e suporte"
            onPress={() =>
              navigation.navigate('Ajuda')
            }
          />

          <View style={styles.separator} />

          <TouchableOpacity
            style={styles.logout}
            onPress={sair}
          >

            <Text style={styles.logoutIcon}>
              ⇥
            </Text>

            <Text style={styles.logoutText}>
              Sair
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

      <BottomBar navigation={navigation} />

    </View>
  );
}

function MenuItem({ icon, text, onPress }) {

  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={onPress}
    >

      <View style={styles.menuIcon}>
        <Text style={styles.menuIconText}>
          {icon}
        </Text>
      </View>

      <Text style={styles.menuText}>
        {text}
      </Text>

      <Text style={styles.menuArrow}>
        ›
      </Text>

    </TouchableOpacity>
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

      <TouchableOpacity style={styles.tab}>
        <Text style={styles.activeIcon}>♙</Text>
        <Text style={styles.activeText}>Perfil</Text>
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
    paddingBottom: 100
  },

  profileHeader: {
    backgroundColor: '#149447',
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 28,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },

  avatarText: {
    color: '#149447',
    fontSize: 27,
    fontWeight: '700'
  },

  profileInfo: {
    flex: 1,
    marginLeft: 13
  },

  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700'
  },

  email: {
    color: '#DDF5E4',
    fontSize: 10,
    marginTop: 3
  },

  edit: {
    color: '#FFFFFF',
    fontSize: 23
  },

  menu: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    overflow: 'hidden'
  },

  menuItem: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4'
  },

  menuIcon: {
    width: 30
  },

  menuIconText: {
    color: '#555',
    fontSize: 18
  },

  menuText: {
    flex: 1,
    color: '#444',
    fontSize: 13
  },

  menuArrow: {
    color: '#999',
    fontSize: 22
  },

  separator: {
    height: 10,
    backgroundColor: '#F8F8F8'
  },

  logout: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14
  },

  logoutIcon: {
    color: '#D71920',
    fontSize: 20,
    width: 30
  },

  logoutText: {
    color: '#D71920',
    fontSize: 13,
    fontWeight: '600'
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
    color: '#777',
    fontSize: 19
  },

  text: {
    color: '#777',
    fontSize: 9,
    marginTop: 3
  },

  activeIcon: {
    color: '#149447',
    fontSize: 19
  },

  activeText: {
    color: '#149447',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 3
  }

});