/* eslint-disable prettier/prettier */
const initialState = {
  status:0,//status de login: 0 deslogado, 1: logado
  uid:'',
  name:'',
  email: '',
  pwd: '',
  msg: '',
  images: [],
  image: null,
  photo: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_UID':
            return {...state, status:1, uid:action.payload.uid};
        case 'SET_NAME':
            return {...state, name:action.payload.name};
        case 'SET_EMAIL':
            return {...state, email:action.payload.email};
        case 'SET_PWD':
            return {...state, pwd:action.payload.pwd};
        case 'SET_MSG':
            return {...state, msg:action.payload.msg};
        case 'GET_ALLIMAGES':
            return { ...state, images:action.payload.images };
        case 'GET_IMAGE':
            return { ...state, image:action.payload.image };
        case 'SET_PHOTO':
            return { ...state, photo:action.payload.photo};
        default:
            return {...state};
    }
};
