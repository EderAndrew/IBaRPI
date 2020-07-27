/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { useEffect } from 'react';
import {CommonActions} from '@react-navigation/native'
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
import { db_sigin, db_getName } from '../../dbFirebase/Sistema'

const Acessar = (props) => {
  useEffect(()=>{
    if (props.status === 1){
      Keyboard.dismiss();
      props.navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: 'MainBottom' }]
    }))
    }
  }, [props.status])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
      <View style={styles.container_1}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
          <Icon name="arrow-left-l" size={60} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Acessar</Text>
      </View>
      <View style={styles.container_2}>
        <View style={styles.formulario}>
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            placeholder="Email"
            value={props.email}
            onChangeText={t => props.setEmail(t)}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Senha"
            value={props.pwd}
            onChangeText={t => props.setPwd(t)}
          />
          <View style={styles.card_switch}>
            <Text>Me manter Logado</Text>
            <TouchableOpacity onPress={()=>alert('Esqueci minha senha')}>
              <Text style={styles.forget_pwd}>Esqueci minha senha!</Text>
            </TouchableOpacity>
          </View>
          <Switch
            style={styles.switch}
            trackColor={{ false: "red", true: "blue" }}
            thumbColor={props.login ? "blue" : "red"}
            value={props.login}
            onValueChange={(login) => props.setLogin(login)}
          />
        </View>
      </View>
      <View style={styles.container_3}>
        <C_Button
          backColor={{ backgroundColor: '#710DC2' }}
          title="Acessar"
          onPress={()=>props.signin(props.email, props.pwd, props.login)}
        />
        <Text style={styles.info}>Ainda não tem uma conta?</Text>
        <TouchableOpacity style={styles.b_info}onPress={()=>props.navigation.navigate('Cadastrar')}>
          <Text style={styles.b_title}>Cadastrar</Text>
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
    container_1:{
      flex: 1,
      marginHorizontal:'5%',
    },
    container_2: {
      flex: 2,
      marginHorizontal:'5%',
    },
    container_3: {
      flex: 2,
      justifyContent: 'center',
      marginHorizontal:'5%',
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
      color: '#CC4C12',
      fontWeight: 'bold',
      fontFamily: 'Roboto-Bold',
    },
    card_switch: {
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    forget_pwd: {
      color: 'red',
    },
    switch: {
      alignSelf: 'flex-start',
    },
});

const mapStateToProps = state => {
  return {
    login: state.user.login,
    uid: state.user.uid,
    name: state.user.name,
    email: state.user.email,
    pwd: state.user.pwd,
    status: state.user.status,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogin: (login) => dispatch({type: 'SET_LOGIN', payload: { login }}),
    setEmail: (email) => dispatch({ type:'SET_EMAIL', payload: { email } }),
    setPwd: (pwd) => dispatch({ type:'SET_PWD', payload: { pwd } }),
    signin: (email, pwd, login) => db_sigin(email, pwd, login, dispatch),
    getName: (name) => db_getName(name, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Acessar);
