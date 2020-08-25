import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const PrayContainer = props => {
    return(
        <View style={styles.container}>
        <View style={styles.boxContainer}>
            <View style={styles.imagePerfil}>
                <Image style={styles.image} source={props.img}/> 
            </View>
            <View style={styles.box}>
                <Text>{props.name}</Text>
                <Text>{props.pray}</Text>
            </View>
        </View>
        <View style={styles.boxIcons}>
            <Text style={styles.icon}>heart: {props.heart}</Text>
            <Text style={styles.icon}>Friend: {props.friend}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '80%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor:'#A0C8E8',
        borderRadius: 12,
        padding: 10,
        marginTop: 20,
        backgroundColor: '#CCE4F2'
    },
    boxContainer: {
        width: '80%',
        flexDirection: 'row'
    },
    imagePerfil: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    box: {
        width:'80%',
        marginLeft: 10,
    },
    boxIcons: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    icon: {
        marginLeft: 15
    }
})

export default PrayContainer