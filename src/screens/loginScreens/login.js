/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import C_Button from '../../components/buttons.component';

const Login = (props) => { 
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
      <View style={styles.container_1}>
        <View style={styles.logo}>
          <Image source={require('../../../assets/img/logo.png')} style={{width: 120, height: 80}}/>
          <Text style={styles.title}>IBaRPI</Text>
          <Text style={styles.descricao}>Igreja Batista Regular Parque Ipê</Text>
        </View>
      </View>
      <View style={styles.container_2}>
      <C_Button
        backColor={{ backgroundColor: '#03061A' }}
        title="Fazer cadastro"
        onPress={()=> props.navigation.navigate('Cadastrar')}
      />
      <C_Button
        backColor={{ backgroundColor: '#FFF', borderWidth: 1, borderColor: '#03061A' }}
        titleColor={{ color: '#03061A' }}
        title="Fazer Acesso"
        onPress={()=> props.navigation.navigate('Acessar')}
      />
      <Text style={styles.version}>Versão: 1.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  container_1:{
    flex: 1,
    justifyContent: 'center',
  },
  container_2: {
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '26%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular.ttf'
  },
  descricao: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  version: {
    marginTop: '42%',
    fontSize: 12,
    color: '#ccc',
  },
});


export default Login;
