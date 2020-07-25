/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import '@react-native-firebase/storage';
import RNFetchBlob from 'react-native-fetch-blob';

let Blob = RNFetchBlob.polyfill.Blob
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob

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
      return dispatch({ type: 'SET_UID', payload: { uid }});
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
      switch (error.code){
        case 'auth/user-not-found':
          alert('Usuário não encontrado. Tente novamente');
          break;
        case 'auth/email-already-in-use':
          alert('Esse Email ja esta cadastrado');
          break;
      }
    });
  } else {
    alert('Preencha os campos de email e/ou Senha');
  }
};

//Pegar nome do usuário
export const db_getName = async (uid, dispatch) => {
  try {
    await firebase.firestore().collection('users').doc(uid).get()
    .then(snapshot=>{
      let name = snapshot.data().name;

      return dispatch({type: 'SET_NAME', payload: { name }});
    });
  } catch (error){
    alert(error.code);
  }
};

//Action de Mensagem
export const fireMsg = (msg, dispatch) => {
    return dispatch({ type: 'SET_MSG', payload: { msg } });
};

//Action de pegar imagem
export const get_image = async (callback) => {
  await firebase.storage().ref().child('avisos/culto.png').getDownloadURL().then(callback);
};

//Get lis of Images
export const get_allImages = async (callback) => {
  await firebase.storage().ref().child('avisos').listAll()
  .then(res => {
    res.items.forEach(imageRef=>{
      imageRef.getDownloadURL().then(callback);
    });
  });
};


//Save avatar
export const save_avatar = (photo, callback) => {
  let uid = firebase.auth().currentUser.uid
  let uri = photo.uri.replace('file://', '');
  let storageRef = firebase.storage().ref()
  let avatar = storageRef.child('users').child(`${uid}.jpg`);
  let mime = 'image/jpeg'

  try{
    RNFetchBlob.fs.readFile(uri, 'base64')
    .then((data)=>{
      return RNFetchBlob.polyfill.Blob.build(data, {type:`${mime};BASE64`})
    })
    .then((blob)=>{
      console.log(blob, {contentType:mime})
      avatar.put(blob, {contentType:mime})
      .on('state_changed', callback)
    })
    .then(()=>{
      blob.closed()
      console.log(blob)
    })
    .catch((error)=>{
      console.log(error.message);
    })
  } catch (error) {
    console.log(error.message)
  }
}