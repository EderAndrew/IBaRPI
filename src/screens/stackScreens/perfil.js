/* eslint-disable prettier/prettier */
import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import { save_avatar } from '../../dbFirebase/Sistema';

const Perfil = (props) => {
    const go_settings = () => {
        alert('Go to Settings')
    };

    const take_picture = () => {
        const options = {
            noData: true,
            title: 'Mudar foto de perfil',
            takePhotoButtonTitle: 'Tirar nova foto',
            chooseFromLibraryButtonTitle: 'Escolha nova foto da galeria',
        };

        ImagePicker.showImagePicker(options, (response)=>{
            console.log(response)
            if (response.uri) {
                let foto = {uri: response.uri};
                props.setPhoto(foto);

                save_avatar(response);
            }
        });
    };
    let img = {uri: 'https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'}

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bg_banner} source={{uri: 'https://images.unsplash.com/photo-1594903819709-069c1bdca6a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80'}}>
                <View style={styles.container_config}>
                    <TouchableOpacity onPress={go_settings}>
                        <View style={styles.area_config}>
                            <Icon style={styles.icon} name="settings" size={30} color="#000" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_photo}>
                    <View style={styles.area_avatar}>
                        <Image style={styles.img_perfil} source={props.photo}/>
                    </View>
                </View>
            </ImageBackground>
            <TouchableOpacity onPress={take_picture}>
                <View style={styles.camera}>
                    <Icon name="photo-camera" size={30} color="#000"/>
                </View>
            </TouchableOpacity>
            <View style={styles.name_container}>
                <Text style={styles.name}>Jhon Doe</Text>
            </View>
            <Text>{`${props.pct}%`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container_1: {
        flex:1,
        backgroundColor: '#CCC',
    },
    bg_banner: {
        width:'100%',
        height: 250,
    },
    container_config: {
        flex: 1,
    },
    container_photo: {
        flex: 4,
        justifyContent:'center',
        alignItems:'center',
    },
    area_avatar: {
        width: 160,
        height: 160,
        backgroundColor:'#FFF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
        borderWidth: 3,
        borderColor:'#DDD',
    },
    img_perfil: {
        width:'100%',
        height: '100%',
        borderRadius: 100,
    },
    camera: {
        width: 50,
        height: 50,
        backgroundColor:'#CCC',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 100,
        alignSelf: 'center',
        marginLeft: 130,
        marginTop: 10,
    },
    area_config: {
        width: 35,
        height: 35,
        backgroundColor: '#fff',
        alignSelf: 'flex-end',
        marginRight:'5%',
        marginTop:'1.5%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name_container: {
        width: '100%',
        alignItems: 'center',
        marginTop: '2%',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1F1E21',
    },
});

const mapStateToProps = state => {
    return {
        uid: state.user.uid,
        photo: state.user.photo,
        pct: state.systema.pct,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPhoto: (photo) => dispatch({ type: 'SET_PHOTO', payload: {photo} }),
        setPct: (pct) => dispatch({ type: 'SET_PCT', payload: { pct } })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
