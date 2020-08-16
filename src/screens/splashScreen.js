import React, {useEffect} from 'react';
import { CommonActions } from '@react-navigation/native'
import { connect } from 'react-redux';
import { View, Image, StyleSheet, Text } from 'react-native'

const Splash = (props) => {
    const { login, navigation } = props
    useEffect(()=>{
        if (login === false) {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }]
            }))
        } else {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: 'MainBottom' }]
            }))
        }
    },[])
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/img/logo.png')} />
            <Text style={styles.title}>IBaRPI</Text>
            <Text style={styles.name}>Igreja Batista Parque Ipe</Text>
            <Text>"Tudo posso naquele que me fortalece"</Text>
            <Text>Filipenses 4:13</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    logo: {
        width: 180,
        height: 120
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#252326'

    },
    name: {
        fontSize: 19,
        color: '#252326',
        fontWeight: 'bold',
    },
});

const mapStateToProps = state => {
    return {
        login: state.sys_persist.login,
    }
}

export default connect(mapStateToProps)(Splash);