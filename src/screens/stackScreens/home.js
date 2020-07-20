/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import BannerComponent from '../../components/videos/banner.component';
import Card from '../../components/homeComponents/card.component';
import Icon from 'react-native-vector-icons/FontAwesome';
import { db_getName, get_image, get_allImages } from '../../dbFirebase/Sistema';
import CardWarning from '../../components/homeComponents/warning.component';

const Home = (props) => {
    let data = [...props.images];

    useEffect(()=>{
        props.getName(props.uid);

        get_image((url)=>{
            props.getImage({uri: url});

        });

        get_allImages(url=>{
            data.push({uri: url});
            props.getAllImages(data);
        });
    },[props.getName]);

    return (
        <View style={styles.container}>
            <BannerComponent
                uri={props.image}
            />
            <View style={styles.feed}>
                <Text style={styles.feed_name}>Bom dia, {props.name}</Text>
                <Text style={styles.feed_date}>01/01/2020</Text>
            </View>
            <Card />
            <View style={styles.card_warning}>
                <View style={styles.warning_title}>
                    <Text style={styles.warning_text}>Avisos</Text>
                    <Icon style={styles.warning_icon} name="warning" size={22} color="#710DC2" />
                </View>
                <FlatList
                  horizontal
                  keyExtractor={item=>item.id}
                  data={props.images}
                  renderItem={({item})=><CardWarning uri={item.uri} />}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    feed: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '2%',
    },
    feed_name: {
        marginLeft: '5%',
        fontSize: 16,
        fontWeight: 'bold',
    },
    feed_date: {
        marginRight: '5%',
    },
    card_warning: {
        flex:1,
        width: '100%',
        marginLeft: '5%',
        marginTop: '3%',
    },
    warning_title: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    warning_text: {
        fontSize: 26,
        marginRight: '3%',
        fontWeight: 'bold',
        color: '#710DC2',
    },
    warning_icon: {
        marginTop: '2.8%',
    },
    foto: {
        width: 300,
        height: 300,
    },
});

const mapStateToProps = state => {
    return {
        uid: state.user.uid,
        name: state.user.name,
        videosData: state.y_data.videosData,
        images: state.user.images,
        image: state.user.image,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getName: (uid) => db_getName(uid, dispatch),
        getImage: (image) => dispatch({ type: 'GET_IMAGE', payload: {image} }),
        getAllImages: (images) => dispatch({ type: 'GET_ALLIMAGES', payload: { images } }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
