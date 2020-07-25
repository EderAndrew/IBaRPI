/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import BannerComponent from '../../components/videos/banner.component';
import Card from '../../components/homeComponents/card.component';
import { db_getName, get_image, get_allImages } from '../../dbFirebase/Sistema';
import CardWarning from '../../components/homeComponents/warning.component';
import CardDate from '../../components/homeComponents/cardDate.component';
import Titulos from '../../components/homeComponents/titulos.component';

const Home = (props) => {
    let dataImages = [...props.images];
    useEffect(()=>{
        props.getName(props.uid);

        //Get one Image to banner
        get_image((url)=>{
            props.getImage({uri: url});

        });
        //get all images
        get_allImages((snapshot) =>{
            dataImages.push({uri: snapshot, key: snapshot});
            props.getAllImages(dataImages);
        });
    },[props.getName, props.getAllImages]);

    const goToPerfil = () => {
        props.navigation.navigate('Perfil');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
            <BannerComponent
                uri={props.image}
                perfil={goToPerfil}
            />
            <Text>{props.videosData}</Text>
            <CardDate name={props.name}/>
            <Card />
            <View style={styles.card_warning}>
                <Titulos
                    title="Avisos"
                    icon="warning"
                />
                <FlatList
                  horizontal
                  data={props.images}
                  renderItem={({item})=><CardWarning uri={item.uri} />}
                  keyExtractor={item=>item.key}
                />
            </View>
            <View style={styles.card_videos}>
                <Titulos
                    title="Vídeos"
                    icon="play-circle"
                />
                <View style={styles.card_Videos}>
                 <View style={styles.video}>
                    <Text>Videos</Text>
                 </View>
                 <View style={styles.video}>
                    <Text>Videos</Text>
                 </View>
                 <View style={styles.video}>
                    <Text>Videos</Text>
                 </View>
                </View>
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    card_warning: {
        flex:1,
        width: '100%',
        marginLeft: '5%',
        marginTop: '3%',
    },
    card_videos: {
        width: '100%',
        marginLeft: '5%',
        marginTop: '3%',
    },
    card_Videos: {
        flex: 1,
        flexDirection:'row',
    },
    video: {
        width: 130,
        height: 200,
        backgroundColor: '#DDD',
        marginRight: 10,
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
        getAllVideos: (videos) => dispatch({ type: 'GET_VIDEOSDATA', payload: {videos} }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
