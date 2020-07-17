/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Card = () => {
  const maisVersiculo = () => {
    alert('Mostrar mais versiculos')
  };
  return (
    <View style={styles.card_vers}>
      <View style={styles.card_container_title}>
        <Text style={styles.title_vers}>Versiculo do dia:</Text>
        <TouchableOpacity onPress={maisVersiculo}>
          <Icon name="dots-three-horizontal" size={22} color="#000"/>
        </TouchableOpacity>
      </View>
      <Text style={styles.text_vers}>O SENHOR é o meu pastor, nada me faltará.</Text>
        <Text style={styles.vers}>Salmos 23:1</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    card_vers: {
        width: '90%',
        borderWidth: 1,
        alignSelf: 'center',
        padding: 10,
        borderColor: '#CCC',
        borderRadius:10,
        marginTop: '5%',
        shadowColor:'black',
        shadowOpacity: 0.2,
        shadowOffset:{width:0, height: 32},
        shadowRadius:10,
    },
    card_container_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#DDD',
    },
    title_vers: {
        fontSize: 15,
    },
    text_vers: {
        marginTop: '2%',
        alignSelf: 'center',
    },
    vers: {
        alignSelf: 'center',
    },
});

export default Card;


