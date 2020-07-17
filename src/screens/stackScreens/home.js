/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Text>Bem vindo a nova home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
});

export default Home;
