import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {View, FlatList} from 'react-native'
import { get_allImages } from '../../../dbFirebase/Sistema'
import CardWarning from '../warning.component';

const CardWarningHome = (props) => {
    let dataImages = [...props.images];
    useEffect(()=>{
        //get all images
        get_allImages((snapshot) =>{
            dataImages.push({uri: snapshot, key: snapshot});
            props.getAllImages(dataImages);
        });
    },[])

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.images}
                renderItem={({item})=><CardWarning uri={item.uri} />}
                keyExtractor={item=>item.key}
            />
        </View>
    )
}
const mapStateToProps = state => {
    return {
        images: state.userReducer.images,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllImages: (images) => dispatch({ type: 'GET_ALLIMAGES', payload: { images } }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardWarningHome)