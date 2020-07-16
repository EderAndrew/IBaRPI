/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { connect } from 'react-redux' //Conectar no redux
import { fireLogin, fireMsg } from '../../dbFirebase/firebaseActions';
import {View, Text, StyleSheet, ImageBackground, StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import C_Button from '../../components/buttons.component';

const Login = (props) => {
  const facebookIcon = <Icon name="facebook" size={22} color="#FFF" />
  return (
    <ImageBackground source={require('../../../assets/img/trigo.jpg')} style={{width: '100%', height: '100%'}}>
    <StatusBar barStyle="light-content" backgroundColor="#9194a5"/>
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/img/logo.png')} style={{width: 120, height: 80}}/>
        <Text style={styles.title}>IBaRPI</Text>
        <Text style={styles.descricao}>Igreja Batista Regular em Parque Ipê</Text>
      </View>
      <C_Button
        backColor={{ backgroundColor: 'blue' }}
        Icon={facebookIcon}
        title="Acessar com o Facebook"
        onPress={()=>{}}
      />
      <C_Button
        backColor={{ backgroundColor: '#F2B705' }}
        title="Fazer cadastro"
        onPress={()=> props.navigation.navigate('Cadastrar')}
      />
      <C_Button
        backColor={{ backgroundColor: '#04D94F' }}
        title="Fazer Acesso"
        onPress={()=> props.navigation.navigate('Acessar')}
      />
      <Text>{props.msg}</Text>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

//ler
const mapStateToProps = (state) => {
  return {
  };
};
//executar, realizar mudança
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
