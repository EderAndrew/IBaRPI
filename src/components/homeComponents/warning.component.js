/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const CardWarning = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.bg_Warning} source={{uri: `${props.uri}`}} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 280,
        height: 160,
        flexDirection:'row',
        marginRight: 10,
    },
    bg_Warning: {
        width: 280,
        height: 160,
        justifyContent:'center',
        marginRight: '3%',
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#DDD'
    },
});

export default CardWarning;
