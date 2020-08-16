import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const C_Button = (props) => {
    return(
        <TouchableOpacity style={{...styles.container, ...props.backColor}} onPress={props.onPress}>
            <Text style={{...styles.title, ...props.titleColor}}>{props.Icon} {props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        marginVertical: '6%'
    },
    title: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },  
})

export default C_Button