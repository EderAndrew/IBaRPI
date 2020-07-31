import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Bible from '../../api/biblia/biblia.api'

const Biblia = (props) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        allBooks()
    },[])

    const allBooks = async () => {
        const data = await Bible.get('books').then(({data})=>data)
        props.setBooks(data)
        console.log(props.booksData)
        setData(data);
    }

    return(
        <View style={styles.container}>
            <Text>Tela da Biblia</Text>
            <FlatList
                keyExtractor={item=>item.abbrev.pt}
                data={data}
                renderItem={({item})=>{
                    return (
                        <Text>{item.name} - {item.abbrev.pt}</Text>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

const mapStateToProps = state => {
    return {
        booksData: state.biblia.booksData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBooks: (data) => dispatch({type: 'SET_BOOKS', payload: { data }})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Biblia)