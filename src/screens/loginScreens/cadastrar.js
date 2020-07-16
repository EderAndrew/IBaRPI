/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import C_Button from '../../components/buttons.component';
import { db_register } from '../../dbFirebase/firebaseActions'

const Cadastrar = (props) => {
  useEffect(()=>{
    if (props.status === 1){
      Keyboard.dismiss();
      props.navigation.navigate('MainBottom')
    }
  })

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
      <View style={styles.margem}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <Icon name="arrow-left-l" size={60} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Cadastrar</Text>
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
        </View>
        <C_Button
          backColor={{ backgroundColor: '#F2B705' }}
          title="Cadastrar"
          onPress={()=>props.signup(props.email, props.pwd)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
});

const mapStateToProps = state => {
  return {
    email: state.user.email,
    pwd: state.user.pwd,
    status: state.user.status,
    uid: state.user.uid,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEmail: (email) => dispatch({ type:'SET_EMAIL', payload: { email } }),
    setPwd: (pwd) => dispatch({ type:'SET_PWD', payload: { pwd } }),
    signup: (email, pwd) => db_register(email, pwd, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cadastrar);
