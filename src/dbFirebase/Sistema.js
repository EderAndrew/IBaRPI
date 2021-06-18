/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import '@react-native-firebase/storage';

//Action de Cadastro
export const db_register = async (name, email, pwd, login, dispatch) => {
    //Cria um email e senha de autenticação
  if (name !== '', email !== '' && pwd !== '') {
    await firebase.auth().createUserWithEmailAndPassword(email, pwd)
    .then(()=>{
      let uid = firebase.auth().currentUser.uid;//Pega o id do usuário cadastrado
      //Cria uma coleção de usuário e insere um id no documento
      firebase.firestore().collection('users').doc(uid).set({
        login: new Boolean(login),
        name: name,
        age: 0,
        date: new Date(),
      });
      //insere o id no reducer
      return dispatch({ type: 'SET_UID', payload: { uid }});
    })
    .catch(error=>{
      alert(error.code);
    });
  } else {
    alert('Preencha todos os campos');
  }
};

//Action de Login
export const db_sigin = async (email, pwd, login, dispatch) => {
  if (email !== '' && pwd !== '') {
    await firebase.auth().signInWithEmailAndPassword(email, pwd)
    .then(()=>{
      let uid = firebase.auth().currentUser.uid;

      //atualiza o login
      firebase.firestore().collection('users').doc(uid).update({login: login.toString()})
  
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
export const save_avatar = (response, callback) => {
  let uid = firebase.auth().currentUser.uid
  let uri = response.uri.replace('file://', ''); 
  
  return new Promise(async (res, rej) => {
    const resposta = await fetch(uri)
    const file = await resposta.blob()

    let upload = firebase.storage().ref(`${uid}`).child('avatar').put(file)

    await upload.on('state_changed', snapshot => {}, err=>{
      rej(err)
    },
    async () => {
      const url = await upload.snapshot.ref.getDownloadURL().then(callback)
      res(url)
    })
  })
}

//get Avatar
export const get_avatar = async (uid, callback) => {
  try{
    await firebase.storage().ref().child(`${uid}/avatar`).getDownloadURL().then(callback);
  } catch (error) {
    console.log(error.message)
  }
  
}

//Save Verses
export const save_verses = async (book, chapter, verse, text) => {
  let uid = firebase.auth().currentUser.uid
  try {
    await firebase.firestore().collection('users').doc(uid).collection('verses').add({
      book_name: book, 
      chapter: chapter, 
      number_verse: verse, 
      text: text,
    })
    .then(()=>alert('Salvo com sucesso'))
    .catch((error)=>alert(error.message))
  } catch (error) {
    console.log(error.message)
  }
}

//save pray
export const save_myPray = async (uid, id, img, name, pray) => {
  try {
    await firebase.firestore().collection('users').doc(uid).collection('pray').add({
      id: id,
      img: img,
      name: name,
      pray: pray,
      friend: 0,
      heart: 0
    })
    .then(()=>save_pray_in_public(uid, id, name, img, pray))
    .catch(error=>console.log('Erro ao salvar Oração: '+ error.message))
  }catch(error){
    console.log(error.message)
  }
}

//save in a new paste for the feed
const save_pray_in_public = async (uid, id, name, img, pray  ) => {
  try{
    await firebase.firestore().collection('publicPray').doc(uid).set({
      id: id,
      name: name,
      img: img,
      pray: pray,
      friend: 0,
      heart: 0
    })
    .then(()=>console.log('Salvo na pasta publica'))
    .catch(error=>console.log(error.message))
  }catch(error){
    console.log(error.message)
  }
}

//update image on firestore case the user change the photo on perfil page!
export const update_img = async (uid, photo) => {
  try {
    await firebase.firestore().collection('users').doc(uid).collection('pray').get()
    .then(snapshot => {
      snapshot.docs.forEach(item=>{
        console.log(item)
        firebase.firestore().collection('users').doc(uid).collection('pray').doc(item.id)
        .update({
          img: photo
        })
      })
    })
  } catch(error){
    console.log(error.message)
  }
}

//Get all Prays
export const get_prays = async (uid, callback) => {
  try{
    await firebase.firestore().collection('users').doc(uid).collection('pray').get()
    .then(snapshot => {
      snapshot.docs.forEach(callback)
    })
  }catch(error){
    console.log(error.message)
  }
  
}

//Para adicionar 1 ao coração ou na oração
export const sumHeart = async (uid, id, heart) => {
  await firebase.firestore().collection('users').doc(uid).collection('pray').doc(id)
  .update({
    heart: heart
  })
}