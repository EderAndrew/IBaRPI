/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

//Action de Cadastro
export const db_register = async (email, pwd, dispatch) => {
    //Cria um email e senha de autenticação
  if (email !== '' && pwd !== '') {
    await firebase.auth().createUserWithEmailAndPassword(email, pwd)
    .then(()=>{
      let uid = firebase.auth().currentUser.uid;//Pega o id do usuário cadastrado
      //Cria uma coleção de usuário e insere um id no documento
      firebase.firestore().collection('users').doc(uid).set({name: 'Membro'});
      //insere o id no reducer
      return dispatch({ type: 'SET_UID', payload: { uid } });
    })
    .catch(error=>{
      alert(error.code);
    });
  } else {
    alert('Preencha os campos de email e Senha');
  }
};

//Action de Login
export const db_sigin = async (email, pwd, dispatch) => {
  if (email !== '' && pwd !== '') {
    await firebase.auth().signInWithEmailAndPassword(email, pwd)
    .then(()=>{
      let uid = firebase.auth().currentUser.uid;
  
      return dispatch({ type: 'SET_UID', payload: { uid } });
    })
    .catch(error=>{
      alert(error.code);
    });
  } else {
    alert('Preencha os campos de email e Senha');
  }
 
};

//Action de Mensagem
export const fireMsg = (msg, dispatch) => {
    return dispatch({ type: 'SET_MSG', payload: { msg } });
};
