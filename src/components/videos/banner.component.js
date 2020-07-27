/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Avatar from '../avatar/avatar.component';

const BannerComponent = (props) => {
    return (
        <ImageBackground source={props.uri} style={{width:'100%', height: 300}} resizeMode="stretch">
            <View>
                <Avatar perfil={props.perfil}/>
            </View>
            <View style={styles.container}>
                <View style={styles.banner_title}>
                    <Text style={styles.title}>Culto de Louvor e Adoração</Text>
                    <Text style={styles.description}>Todos os Domingos as 19hs</Text>
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
