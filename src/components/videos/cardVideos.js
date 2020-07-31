import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const CardVideos = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.img_container} onPress={props.onclick}>
                <Image style={styles.image_video} source={{uri: `${props.data.thumbnails.medium.url}`}} width={200} height={110} resizeMode="contain"/>
            </TouchableOpacity>
            <View style={styles.card_title}>
                <Text style={styles.title}>{props.data.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 110,
        backgroundColor: '#DDD',
        marginRight: 10,
        marginVertical: 20
    },
    img_container: {
        borderWidth: 1,
        borderColor: '#DDD'
    },
    image_video: {
        width: 130,
        height: 200,
    },
    card_title: {
        backgroundColor:'#000',
        
    },
    title: {
        color: '#FFF',
    },
})

export default CardVideos;