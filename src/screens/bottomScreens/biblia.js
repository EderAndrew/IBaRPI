import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { allBooks } from '../../api/biblia/biblia.api'
import Books from '../../components/bibliaComponents/Books.component'

const Biblia = (props) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        allBooks(({data})=>setData(data))
        .catch(error=>console.log(error.message))
    },[])  

    const goChapters = (abbrev, name, author, group, chapters) => {
        props.navigation.navigate('Capitulos',{
            abbrev,
            name,
            author,
            group,
            chapters,        
        })
        props.setChapter(1)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Livros Sagrados</Text>
            <FlatList
                keyExtractor={item=>item.abbrev.pt}
                data={data}
                renderItem={({item})=> <Books  abrev={item.abbrev.pt} name={item.name} onPress={()=>goChapters(item.abbrev.pt, item.name, item.author, item.group, item.chapters)}/>}
                numColumns={3}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 24,
        color: '#1F1E21',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 10
    }

})

const mapStateToProps = state => {
    return {
        booksData: state.biblia.booksData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBooks: (data) => dispatch({type: 'SET_BOOKS', payload: { data }}),
        setChapter: (chapter) => dispatch({ type: 'SET_CHAPTER', payload: { chapter } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Biblia)