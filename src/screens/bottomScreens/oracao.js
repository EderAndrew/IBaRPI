import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Write from '../../components/prayComponent/write.componet'
import PrayContainer from '../../components/prayComponent/prayContainer.component'
import { get_prays } from '../../dbFirebase/Sistema'
import ModalPray from '../../components/prayComponent/modalComponent'


const Oracao = (props) => {
    const {uid, pray, getPray} = props
    const [handleModal, setHandleModal] = useState(false)    
    let d=[]

    useEffect(()=>{
        get_prays(uid, doc=>{
            d.push(doc.data())
            getPray(d)
        })
    },[get_prays])

    const showModal = () => {
        setHandleModal(true)
    }

    return(
        <View style={styles.container}>
            <View style={styles.prayContainer} >
                <Text>Deixe um pedido de Oração</Text>
                <ModalPray visible={handleModal} closeModal={()=>setHandleModal(false)}/>
                <FlatList
                    data={pray}
                    renderItem={({item})=><PrayContainer
                        img={item.img}
                        name={item.name}
                        pray={item.pray}
                        heart={item.heart}
                        friend={item.friend}
                        id={item.id}
                    />}
                    keyExtractor={item=>item.id}
                />
            </View>
            <View style={styles.prayButton}>
                <Write onPress={showModal} />
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFF'
    },
    prayContainer:{
        flex: 1,
    },
    prayButton: {
        width: 70,
        alignSelf:'flex-end',
        marginRight: 20,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 50,
    }
})

const mapStateToProps = state => {
    return {
        uid: state.userReducer.uid,
        pray: state.systemReducer.pray,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPray: (pray) => dispatch({ type: 'GET_PRAY', payload: { pray } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Oracao)