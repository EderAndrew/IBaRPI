/* eslint-disable prettier/prettier */
import React from 'react';
import {connect} from 'react-redux';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Avatar = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.perfil}>
                <Image style={styles.img_avatar} source={props.photo} />
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
        borderWidth: 2,
        borderColor: '#CCC',
    },
});

const mapStateToProps = state => {
    return {
        photo: state.user.photo,
    };
};
export default connect(mapStateToProps)(Avatar);
