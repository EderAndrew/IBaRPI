import React, { useState } from 'react'
import { connect } from 'react-redux'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { save_verses } from '../../dbFirebase/Sistema'

const CardVerses = (props) => {
    const {number, name, chapter, text, setVerses} = props
    const [toogleVerses, setToogleVerses] = useState(false)
    const toogleHandler = () => {
        if(toogleVerses === false){
            save_verses(name, chapter, number, text)
            setToogleVerses(true)
            setVerses(toogleVerses)
        } else {
            setToogleVerses(false)
            setVerses(toogleVerses)
        }
    }

    return(
        <TouchableOpacity onPress={toogleHandler}>
            <View style={toogleVerses ? styles.cardTrue : styles.card}>
                <Text style={toogleVerses ? styles.verseTrue : styles.verse}>{number} - {text}</Text>
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
        color:'#03061A'
    },
    cardTrue: {
        borderBottomWidth: 1,
        borderBottomColor:'#DDD',
        margin:10,
        paddingBottom:10,
        backgroundColor: '#03061A'
    },
    verseTrue: {
        fontSize:16,
        color:'#FFF',
    }
})

const mapStateToProps = state => {
    return{
        toogle_verses: state.systemReducer.toogle_verses,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setVerses: (verse) => dispatch({type: 'SET_VERSES', payload: { verse }}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardVerses)