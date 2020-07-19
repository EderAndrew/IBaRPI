/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import BannerComponent from '../../components/videos/banner.component';
import Card from '../../components/homeComponents/card.component';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { db_getName } from '../../dbFirebase/firebaseActions';

const Home = (props) => {
    useEffect(()=>{
        props.getName(props.uid);
    },[]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <BannerComponent />
                <View style={styles.feed}>
                    <Text style={styles.feed_name}>Bom dia, {props.name}</Text>
                    <Text style={styles.feed_date}>01/01/2020</Text>
                </View>
                <Card />
                <View style={styles.card_warning}>
                    <View style={styles.warning_title}>
                        <Text style={styles.warning_text}>Avisos</Text>
                        <Icon style={styles.warning_icon} name="warning" size={22} color="black" />
                    </View>
                    <View style={styles.remove}>
                        <TouchableOpacity>
                            <ImageBackground style={styles.bg_Warning} source={{uri: 'https://images.unsplash.com/photo-1594987121044-d21eb351dc22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}}>
                                <Text style={styles.txt_warning}>Avisos</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground style={styles.bg_Warning} source={{uri: 'https://images.unsplash.com/photo-1594987121044-d21eb351dc22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}}>
                                <Text style={styles.txt_warning}>Avisos</Text>
                            </ImageBackground>
                        </TouchableOpacity>
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
    bg_Warning: {
        width: 230,
        height: 160,
        justifyContent:'center',
        marginRight: '3%',
    },
    txt_warning: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.5)',
        alignSelf: 'center',
    },
    card_warning: {
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
        marginRight: '5%',
        fontWeight: 'bold',
    },
    warning_icon: {
        marginTop: '2%',
    },
    remove: {
        flexDirection: 'row',
    },
});

const mapStateToProps = state => {
    return {
        uid: state.user.uid,
        name: state.user.name,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getName: (uid) => db_getName(uid, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
