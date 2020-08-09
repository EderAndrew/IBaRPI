import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { getBook, getVerses } from '../../api/biblia/biblia.api'

const Chapters = (props) => {
    const route = useRoute()
    const {abbrev} = route.params
    
    const [book, setBook] = useState([])
    const [verses, setVerses] = useState([])

    useEffect(()=>{
        getBook(abbrev, ({data})=>{
            let itens = []
            itens.push(data)
            setBook(itens)
        })
        .catch(error=>console.log(error.message))
    },[])

    return(
        <View style={styles.container}>
            <FlatList 
                keyExtractor={item=>item.book.abbrev.pt}
                data={book}
                renderItem={({item})=>{
                    return(
                        <View>
                            <Text>{item.book.name}</Text>
                            <Text>Author: {item.book.author}</Text>
                            <Text>{item.book.group}</Text>
                            <Text>{item.chapters}</Text>
                            {item.verses.map(r=><Text key={r.number}>{r.number} - {r.text}</Text>)}
                        </View>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    }
})

const mapStateToProps = state => {
    return {
        book: state.biblia.book,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBook: (book) => dispatch({ type: 'GET_BOOK', payload: { book } })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chapters);