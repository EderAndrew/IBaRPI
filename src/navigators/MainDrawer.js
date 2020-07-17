/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainDrawer = () => {
    return (
        <View style={styles.container}>
            <Text>Tela MainDrawer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MainDrawer;