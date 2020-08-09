import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const CardVerses = (props) => {
    const {number, text} = props

    return(
        <View style={styles.card}>
            <Text style={styles.verse}>{number} - {text}</Text>
        </View>
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