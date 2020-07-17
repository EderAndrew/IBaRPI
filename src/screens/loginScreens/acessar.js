/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import C_Button from '../../components/buttons.component';
import { db_sigin } from '../../dbFirebase/firebaseActions'

const Acessar = (props) => {
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
        <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
          <Icon name="arrow-left-l" size={60} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Acessar</Text>
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
          backColor={{ backgroundColor: '#710DC2' }}
          title="Acessar"
          onPress={()=>props.signin(props.email, props.pwd)}
        />
      </View>
      <Text style={styles.info}>Ainda não tem uma conta?</Text>
      <TouchableOpacity style={styles.b_info}onPress={()=>props.navigation.navigate('Cadastrar')}>
        <Text style={styles.b_title}>Cadastrar</Text>
      </TouchableOpacity>
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
    signin: (email, pwd) => db_sigin(email, pwd, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Acessar);
