import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import CardVerses from '../bibliaComponents/cardVerseComponent'

const Verses = (props) => {
    const { name, verses } = props
    return (
        <View style={styles.container}>           
            {verses.map(resp=><CardVerses
                key={resp.number}
                number={resp.number}
                text={resp.text}
                name={name}/>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '93%',
        alignSelf:'center',
        borderWidth: 1,
        borderColor: '#DDD',
        borderTopLeftRadius:10,
        borderTopRightRadius: 10,
        backgroundColor:'#FFF'
    },
    card_title: {
        height: 160,
        backgroundColor:'#1F1E21',
    },
    title:{
        fontSize: 30,
        color: '#FFF',
        alignSelf: 'center',
    },
    author: {
        color:'#FFF',
        marginLeft: 10
    },
    book: {
        color: '#FFF',
        marginLeft: 10
    },
    chapters:{
        color:'#FFF'
    }

})

export default Verses