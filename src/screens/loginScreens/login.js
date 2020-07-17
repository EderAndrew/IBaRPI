/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import C_Button from '../../components/buttons.component';

const Login = (props) => {
  const facebookIcon = <Icon name="facebook" size={22} color="#FFF" />
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
      <View style={styles.logo}>
        <Image source={require('../../../assets/img/logo.png')} style={{width: 120, height: 80}}/>
        <Text style={styles.title}>IBaRPI</Text>
        <Text style={styles.descricao}>Igreja Batista Regular Parque Ipê</Text>
      </View>
      <C_Button
        backColor={{ backgroundColor: 'blue' }}
        Icon={facebookIcon}
        title="Acessar com o Facebook"
        onPress={()=>{}}
      />
      <C_Button
        backColor={{ backgroundColor: '#CC4C12' }}
        title="Fazer cadastro"
        onPress={()=> props.navigation.navigate('Cadastrar')}
      />
      <C_Button
        backColor={{ backgroundColor: '#710DC2' }}
        title="Fazer Acesso"
        onPress={()=> props.navigation.navigate('Acessar')}
      />
      <Text style={styles.version}>Versão: 1.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
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
    color: '#ccc'
  },
});

export default Login;
