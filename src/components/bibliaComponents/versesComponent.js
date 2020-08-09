import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Verses = () => {
    return (
        <View style={styles.container}>
            <Text>{item.book.name}</Text>
            <Text>Author: {item.book.author}</Text>
            <Text>{item.book.group}</Text>
            <Text>{item.chapters}</Text>
            {item.verses.map(r=><Text key={r.number}>{r.number} - {r.text}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default Verses