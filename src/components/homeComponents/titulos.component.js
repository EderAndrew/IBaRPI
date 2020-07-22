/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Titulos = (props) => {
    return (
        <View style={styles.warning_title}>
            <Text style={styles.warning_text}>{props.title}</Text>
            <Icon style={styles.warning_icon} name={props.icon} size={22} color="#710DC2" />
        </View>
    );
};

const styles = StyleSheet.create({
    warning_title: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    warning_text: {
        fontSize: 26,
        marginRight: '3%',
        fontWeight: 'bold',
        color: '#710DC2',
    },
    warning_icon: {
        marginTop: '2%',
    },
})

export default Titulos;
