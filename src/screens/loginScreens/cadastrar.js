/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Keyboard,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import C_Button from '../../components/buttons.component';
import { db_register } from '../../dbFirebase/Sistema'

const Cadastrar = (props) => {
  const { 
    name,
    email,
    pwd,
    status,
    navigation,
    setName,
    setEmail,
    setPwd,
    login,
    setLogin,
    signup
  } = props
  
  useEffect(()=>{
    if (name !== null && email !== null && pwd !== null ) {
      if (status === 1){
        Keyboard.dismiss();
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'MainBottom' }]
      }))
      }
    } else {
      alert('Precisa preencher os campos');
    }
  })

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
      <View style={styles.container_1}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Icon name="arrow-left-l" size={60} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Cadastrar</Text>
      </View>
      <View style={styles.container_2}>
        <View style={styles.formulario}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={n=>setName(n)}
          />
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={t => setEmail(t)}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Senha"
            value={pwd}
            onChangeText={t => setPwd(t)}
          />
          <Text>Manter Logado?</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#B32922", true: "#28559A" }}
            thumbColor={login ? "#28559A" : "#B32922"}
            value={login}
            onValueChange={(logIn) => setLogin(logIn)}
          />
        </View>
      </View>
      <View style={styles.container_3}>
        <C_Button
          backColor={{ backgroundColor: '#03061A' }}
          title="Cadastrar"
          onPress={()=>signup(name, email, pwd)}
        />
        <Text style={styles.info}> Já tem uma conta?</Text>
        <TouchableOpacity style={styles.b_info}onPress={()=>navigation.navigate('Acessar')}>
          <Text style={styles.b_title}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    container_1: {
      flex: 1,
      marginHorizontal: '5%',
    },
    container_2: {
      flex: 2,
      marginHorizontal: '5%',
    },
    container_3: {
      flex: 2,
      justifyContent: 'center',
      marginHorizontal: '5%',
    },
    margem: {
        marginHorizontal: '5%',
    },
    title: {
        fontSize: 28,
        fontFamily: 'Roboto-Medium',
    },
    formulario: {
      marginTop: '12%',
      marginBottom: '30%',
    },
    input: {
      borderBottomWidth: 1,
      borderColor: '#1A0F1F',
      fontSize: 18,
      marginBottom: '10%',
    },
    info: {
      fontSize: 16,
      alignSelf: 'center',
    },
    b_info: {
      alignSelf: 'center',
    },
    b_title: {
      fontSize: 18,
      color: '#B32922',
      fontWeight: 'bold',
      fontFamily: 'Roboto-Bold',
    },
    switch:{
      alignSelf:'flex-start'
    }
});

const mapStateToProps = state => {
  return {
    login: state.systemReducer.login,
    name: state.userReducer.name,
    email: state.userReducer.email,
    pwd: state.userReducer.pwd,
    status: state.userReducer.status,
    uid: state.userReducer.uid,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogin: (login) => dispatch({ type:'SET_LOGIN', payload: { login } }),
    setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } }),
    setEmail: (email) => dispatch({ type:'SET_EMAIL', payload: { email } }),
    setPwd: (pwd) => dispatch({ type:'SET_PWD', payload: { pwd } }),
    signup: (name, email, pwd) => db_register(name, email, pwd, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastrar);
