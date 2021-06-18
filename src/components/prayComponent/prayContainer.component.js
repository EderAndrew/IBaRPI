import React from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { sumHeart } from '../../dbFirebase/Sistema'
import Icon from 'react-native-vector-icons/Ionicons'
import IconPray from 'react-native-vector-icons/FontAwesome5'

const PrayContainer = props => {
    const handleHeart = () => {
        let s = 0
        s += 1
        sumHeart(props.uid, props.id, s)

    }

    const handlePray = () => {
        //boleano coloca flag como true para coração e false para oração
        //caso true
            //soma 1 ao coração
        //caso false e coração for maior que zero
            //subtrai 1 de coração
    }

    return(
        <View style={styles.container}>
        <View style={styles.boxContainer}>
            <View style={styles.imagePerfil}>
                <Image style={styles.image} source={props.img}/> 
            </View>
            <View style={styles.box}>
                <Text style={styles.box_name}>{props.name}</Text>
                <Text>{props.pray}</Text>
            </View>
        </View>
        <View style={styles.boxIcons}>
            <TouchableOpacity onPress={handleHeart}>
                <Icon style={styles.image_icon} name="heart" size={25} color="red" />
            </TouchableOpacity>
            <Text style={styles.icon}>{props.heart}</Text>
            <IconPray style={styles.image_icon} name="pray" size={25} color="blue" />
            <Text style={styles.icon}>{props.friend}</Text>
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
    box_name: {
        fontSize: 18,
    },
    boxIcons: {
        flexDirection: 'row',
    },
    image_icon:{
        marginLeft: 30,
    },
    icon: {
        alignSelf:'flex-end',
        fontSize: 10
    }
})

const mapStateToProps = state => {
    return {
        uid: state.userReducer.uid
    }
}

export default  connect(mapStateToProps)(PrayContainer)