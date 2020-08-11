import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Books = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.book_container} onPress={props.onPress}>
                <Text style={styles.abbrev}>{props.abrev}</Text>
                <Text style={styles.name}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    book_container: {
      backgroundColor: '#1F1E21',
      marginVertical: 10,
      height: 80,
      alignItems: 'center',
      borderRadius: 10,
      marginHorizontal: 10,
      width: 115,
    },
    abbrev: {
        fontSize: 24,
        alignSelf: 'center',
        fontWeight:'bold',
        color: '#FFF',
    },
    name: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold',
    },
})

export default Books