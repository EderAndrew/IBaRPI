/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { get_avatar } from '../../dbFirebase/Sistema'

const Avatar = (props) => {
    useEffect(()=>{
        get_avatar(props.uid, async (url)=>{
            await props.setPhoto({uri: url})
        })
    },[])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container_avatar} onPress={props.perfil}>
                {props.photo === null ?
                    <Icon name="user" size={52} color="#252326" />
                    :
                    <Image style={styles.img_avatar} source={props.photo} />
                }
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        paddingHorizontal: 10,
    },
    container_avatar:{
        width: '20%',
        height: 80,
        alignSelf: 'flex-end',
        marginRight: '4.2%',
        marginTop: '6%',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#CCC',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },
});

const mapStateToProps = state => {
    return {
        uid: state.user.uid,
        photo: state.user.photo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPhoto: (photo) => dispatch({ type: 'SET_PHOTO', payload: {photo} }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
