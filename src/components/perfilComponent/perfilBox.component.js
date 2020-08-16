import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const PerfilBox = (props) => {
    const {title} = props
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Icon name="ellipsis-h" size={22} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf: 'center',
        marginTop: 25,
        alignItems: 'center',
        borderWidth:1,
        padding: 10,
        borderColor: '#DDD',
        borderRadius: 20
    },
    text: {
        fontSize: 22
    }
})

export default PerfilBox