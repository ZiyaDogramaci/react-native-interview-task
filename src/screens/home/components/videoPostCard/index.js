import React, { useContext } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image
} from 'react-native';
import Video from "react-native-video";
import {
  CalculateVideoPlayerHeight,
  ScreenWidth
} from "../../../../utils/helpers";

const VideoPostCard = ({video, reactions, userName, profilePicture, message, containerStyle, isPaused}) => {
    return <View style={[Styles.mainContainer, containerStyle]}>
        <View style={Styles.headerContainer}>
            <Image source={{uri : profilePicture}} style={Styles.avatar}/>
            <Text style={Styles.userName} numberOfLines={1}>
                {userName}
            </Text>
        </View>
        <View style={Styles.messageContainer}>
            <Text style={Styles.message}>
                {message}
            </Text>
        </View>
        <Video style={{
                width : ScreenWidth, 
                height : CalculateVideoPlayerHeight(ScreenWidth)
            }}
            source={video}
            paused={isPaused}
        />
        <View style={Styles.footerContainer}>
            <Text style={Styles.reacted} numberOfLines={1}>
                {reactions} kişi beğendi
            </Text>
        </View>
    </View>;
};

const Styles = StyleSheet.create({
    userName : {
        fontWeight : 'bold',
        color : '#0C0C0C',
        marginLeft : 10
    },
    headerContainer : {
        alignSelf : 'stretch',
        alignItems : 'center',
        flexDirection : 'row',
        padding : 10
    },
    messageContainer : {
        alignSelf : 'stretch',
        padding : 10
    },
    message : {
        fontWeight : 'normal',
        color : "#3D3D3D"
    },
    footerContainer : {
        alignSelf : 'stretch',
        alignItems : 'center',
        flexDirection : 'column',
        padding : 10
    },
    reacted : {
        alignSelf : "stretch",
        fontWeight : '600',
        fontSize : 12,
        color : "#3D3D3D"
    },
    avatar : {
        width : 30,
        height : 30,
        borderRadius : 15
    },
    mainContainer : {
        width : '100%',
        flexDirection : 'column',
        backgroundColor : "#FFFFFF",
        borderBottomWidth : 1,
        borderBottomColor : "#EAEAEA",
        borderTopWidth : 1,
        borderTopColor : "#EAEAEA"
    }
});

export default VideoPostCard;