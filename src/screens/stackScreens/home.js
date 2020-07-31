/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import {View, Text, StyleSheet, FlatList, ScrollView, StatusBar} from 'react-native';
import BannerComponent from '../../components/videos/banner.component';
import Card from '../../components/homeComponents/card.component';
import { db_getName, get_image } from '../../dbFirebase/Sistema';
import CardWarningHome from '../../components/homeComponents/cardsHome/warningHome';
import CardDate from '../../components/homeComponents/cardDate.component';
import Titulos from '../../components/homeComponents/titulos.component';
import { Culto_louvor } from '../../api/youtube/youtube.api';
import CardVideos from '../../components/videos/cardVideos';

const Home = (props) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        props.getName(props.uid);

        //Get one Image to banner
        get_image((url)=>{
            props.getImage({uri: url});

        });
        
        Culto_louvor((json) => {
            setData(json.items);
        })
    },[props.getName]);

    //mostrar a tela de video
    const on_Video = () => {
        props.navigation.dispatch(CommonActions.reset({
            index: 1,
            routes: [{ name: 'Video' }]
        }))
    }

    const goToPerfil = () => {
        props.navigation.navigate('Perfil');
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
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
                <CardWarningHome />
            </View>
            <View style={styles.card_videos}>
                <Titulos
                    title="Vídeos"
                    icon="play-circle"
                />
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({item})=><CardVideos onPress={on_Video} data={item.snippet} />}
                    keyExtractor={item=>item.id.videoId}
                />

                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({item})=><CardVideos data={item.snippet} />}
                    keyExtractor={item=>item.id.videoId}
                />
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
        image: state.user.image,
        imgYoutube: state.systema.imgYoutube,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getName: (uid) => db_getName(uid, dispatch),
        getImage: (image) => dispatch({ type: 'GET_IMAGE', payload: {image} }),
        getImgYoutube: (data) => dispatch({ type: 'GET_IMGYOUTUBE', payload: { data } }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
