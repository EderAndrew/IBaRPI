/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

const CardDate = (props) => {
    const [msg, setMsg] = useState('');

    useEffect(()=>{
        showDate();
        ShowEducatedMsg();
    },[]);

    const showDate = () => {
        let d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();

        ShowEducatedMsg();
        let newDate = `${day}/${month}/${year}`;
        props.setDate(newDate);
    };

    const ShowEducatedMsg = () => {
        let h = new Date();
        let hour = h.getHours() + 1;
        let m = '';

        if (hour >= 0 && hour <= 11) {
            m = 'Bom dia, ';
        } else if (hour >= 12 && hour <= 18) {
            m = 'Boa Tarde, ';
        } else {
            m = 'Boa Noite, ';
        }

        setMsg(m);
    };

    return (
        <View style={styles.feed}>
            <Text style={styles.feed_name}>{msg}{props.name}</Text>
            <Text style={styles.feed_date}>{props.date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

const mapStateToProps = state => {
    return {
        date: state.systema.date,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setDate: (date) => dispatch({ type: 'SET_DATE', payload: {date} }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDate);
