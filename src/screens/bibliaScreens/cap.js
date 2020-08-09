import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native'
import { getBook} from '../../api/biblia/biblia.api'
import Verses from '../../components/bibliaComponents/versesComponent'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Chapters = (props) => {
    const route = useRoute()
    const {abbrev, name, author, group, chapters} = route.params
    const {chapter, setChapter} = props
    
    const [book, setBook] = useState([])
    const [teste, setTeste] = useState([])

    useEffect(()=>{
        getBook(abbrev, chapter, ({data})=>{
            let itens = []
            itens.push(data)
            setBook(itens)
        })
        .catch(error=>console.log(error.message))
        getChapters()
    },[chapter])
    const getChapters = ()=>{
        let i = 0
        while(i <= chapters){
            i++
            
        }
        return i
    }
    const chapterRight = () => {
        let n = 0
        n = chapter + 1
        setChapter(n)
    }

    const chapterLeft = () => {
        let n = 0
        n = chapter - 1
        setChapter(n)
        if(n < 1){
            setChapter(1)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.card_title}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.author}>Autor: {author}</Text>
                <Text style={styles.book}>Grupo: {group}</Text>
                <FlatList
                    data={}
                />
            </View>
            <FlatList
                style={styles.flat_container}
                showsVerticalScrollIndicator={false}
                keyExtractor={item=>item.book.abbrev.pt}
                data={book}
                renderItem={({item})=> <Verses
                    name={item.book.name}
                    author={item.book.author}
                    group={item.book.group}
                    chapters={item.chapter.number}
                    verses={item.verses}
                />}
            />
            <View style={styles.container_buttons}>
                <TouchableOpacity onPress={chapterLeft}>
                    <Icon name="chevron-circle-left" size={30} color="#1F1E21" />
                </TouchableOpacity>
                <TouchableOpacity onPress={chapterRight}>
                    <Icon name="chevron-circle-right" size={30} color="#1F1E21" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    },
    card_title: {
        height: 250,
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
    flat_container: {
        marginTop: -80,
    },
    container_buttons: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 10,
        marginBottom: 10,
    },
})

const mapStateToProps = state => {
    return {
        book: state.biblia.book,
        chapter: state.biblia.chapter,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBook: (book) => dispatch({ type: 'GET_BOOK', payload: { book } }),
        setChapter: (chapter) => dispatch({ type: 'SET_CHAPTER', payload: { chapter } })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chapters);