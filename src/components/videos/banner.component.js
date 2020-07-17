/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Avatar from '../avatar/avatar.component';

const BannerComponent = () => {
    const image = 'https://images.unsplash.com/photo-1594794031248-c58cbc04fd13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    return (
        <ImageBackground source={{uri: image}} style={{width:'100%', height: 300}}>
            <View>
                <Avatar />
            </View>
            <View style={styles.container}>
                <View style={styles.banner_title}>
                    <Text style={styles.title}>Titulo da Imagem</Text>
                    <Text style={styles.description}>Descrição da imagem</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        color: '#FFF',
        marginLeft: '5%',
        marginBottom: '2%',
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        color: '#FFF',
        marginLeft: '5%',
        marginBottom: '3%',
        fontSize: 16,
    },
    banner_title: {
        backgroundColor: 'rgba(52, 52, 61, 0.6)',
    },
});

export default BannerComponent;
