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
    const {chapter, setChapter} = props //redux
    
    const [book, setBook] = useState([])//state para manipular os capitulos
    const [numberChapters, setNumberChapters] = useState([])//state para manipular os numeros dos capitulos

    //id para os numeros dos capitulos. Cria um id para cada item do array
    let numkey = Math.floor(new Date() / 1000);

    //Ao iniciar a tela, ja mostra os capitulos
    //Qualquer alteração nos capitulos é monitorado
    useEffect(()=>{
        getBook(abbrev, chapter, ({data})=>{
            let itens = []
            itens.push(data)
            setBook(itens)
        })
        .catch(error=>console.log(error.message))
        Chapters()
    },[chapter])

    //Preenche a quantidade de capitulos dentro de um array
    const Chapters = ()=>{
        let d = []
        for(let i = 1; i <= chapters; i++){
            d.push(i)
        }
        setNumberChapters(d)
    }

    //Ao apertar para a direita, aumenta um capitulo
    const chapterRight = () => {
        let n = 0
        n = chapter + 1
        setChapter(n)
    }

    //ao apertar para a esquerda, diminui um capitulo
    const chapterLeft = () => {
        let n = 0
        n = chapter - 1
        setChapter(n)
        if(n < 1){
            setChapter(1)
        }
    }

    //Escolher o capitulo que quer ler
    const chooseChapter = (item) => {
        getBook(abbrev, item, ({data})=>{
            let itens = []
            itens.push(data)
            setBook(itens)
        })
        .catch(error=>console.log(error.message))
        //Iguala o numero ao capitulo
        setChapter(item)
    }

    return(
        <View style={styles.container}>
            <View style={styles.card_title}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.author}>Autor: {author}</Text>
                <Text style={styles.book}>Grupo: {group}</Text>
                <Text style={styles.chapt}>Capitulos: {chapters}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item=>item}
                    data={numberChapters}
                    renderItem={({item})=>{
                        return(
                            <View>
                                {item === chapter ?
                                    <View style={styles.num_field}>
                                        <Text style={styles.chapters_noFill}>{item}</Text>
                                    </View>
                                    :
                                    <TouchableOpacity onPress={()=>chooseChapter(item)}>
                                        <View style={styles.num_field_fill}>
                                            <Text style={styles.chapters}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            </View>                            
                        )
                    }}
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
    chapt: {
        color: '#FFF',
        marginLeft: 10 
    },
    num_field: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor:'#FFF',
        marginHorizontal: 10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 100,
        marginTop: 10,
        backgroundColor:'#FFF'
    },
    num_field_fill: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor:'#FFF',
        marginHorizontal: 10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 100,
        marginTop: 10
    },
    chapters_noFill: {
        color: '#000',
        fontSize: 16,
        fontWeight:'bold'
    },
    chapters:{
        color: '#FFF',
        fontSize: 16,
    },
    flat_container: {
        marginTop: -60,
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