/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Avatar = () => {
    const irPraPerfil = () => {
        alert('Foi pra perfil')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={irPraPerfil}>
                <Image style={styles.img_avatar} source={{uri: 'https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'}} />
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
    img_avatar: {
        width: '20%',
        height: 80,
        alignSelf: 'flex-end',
        marginRight: '4.2%',
        marginTop: '6%',
        borderRadius: 100,
    },
});

export default Avatar;
