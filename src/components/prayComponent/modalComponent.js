import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { View, Text, Modal, StyleSheet, TextInput} from 'react-native'
import C_Button from '../buttons.component.js'
import { save_myPray } from '../../dbFirebase/Sistema'

const ModalPray = props => {
    const { uid, photo, name } = props
       
    const [prayText, setPrayText] = useState('')
    let id = Math.floor(Date.now() / 1000)//timestamp for save a diferent Id everytime

    const savePray = () => {
        if(prayText !== null || prayText !== " ") {
            save_myPray(uid, id, photo, name, prayText)
            props.closeModal()
        }else {
            props.closeModal()
        }
        
    }
    
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <View style={styles.box_title}>
                    <Text style={styles.title}>Escreva seu pedido de Oração para que as pessoas possam orar por você e por sua familia!</Text>
                </View>
                <View style={styles.textArea}>
                    <TextInput
                        style={styles.area}
                        underlineColorAndroid="transparent"
                        multiline={true}
                        numberOfLines={10}
                        value={prayText}
                        onChangeText={(text)=>setPrayText(text)}
                        placeholder="Meu Pedido de Oração"
                    />
                </View>
                <C_Button
                  titleColor={{color:"#FFF"}}
                  backColor={{backgroundColor:'#000'}}
                  title="Salvar Oração"
                  onPress={savePray}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    box_title: {
        height: 80,
        borderBottomWidth: 1,
        borderColor:'#DDD',
        justifyContent: 'center',
        alignContent:'center'
    },
    title: {
        marginHorizontal: 10,
        alignSelf:'center',
        textAlign:'center'
    },
    textArea:{
        borderWidth: 1,
        borderColor:'#CCC',
        padding: 5,
        width:'90%',
        alignSelf:'center',
        marginVertical: 20,
        borderRadius: 10

    },
    area: {
        height: 120,
        justifyContent:'flex-start',
    }
})

const mapStateToProps = state => {
    return {
        uid: state.userReducer.uid,
        name: state.userReducer.name,
        photo: state.userReducer.photo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPrayText: (text) => dispatch({ type: 'SET_PRAYTEXT', payload: {text} })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalPray)