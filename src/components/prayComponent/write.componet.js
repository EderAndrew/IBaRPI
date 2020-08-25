import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Write = props => {
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Icon name="feather" size={32} color="#FFF" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        backgroundColor: '#03061A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        alignSelf:'flex-end',
    }
})

export default Write