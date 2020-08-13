import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const CardVerses = (props) => {
    const {number, name, text} = props
    
    return(
        <TouchableOpacity onPress={()=>alert(`${number} - ${text} - ${name}`)}>
            <View style={styles.card}>
                <Text style={styles.verse}>{number} - {text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderBottomWidth: 1,
        borderBottomColor:'#DDD',
        margin:10,
        paddingBottom:10
    },
    verse:{
        fontSize:16,
    }
})

export default CardVerses