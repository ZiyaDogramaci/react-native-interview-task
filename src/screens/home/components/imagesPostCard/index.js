import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  CalculateImageCarouselHeight,
  ScreenWidth
} from "../../../../utils/helpers";
import Carousel, {Pagination} from "react-native-snap-carousel";

const defaultImage = require('../../../../assets/default.jpg');

const ImagesPostCard = ({images, reactions, userName, profilePicture, message, containerStyle}) => {
    const [currentImageIndex, setCurenntImageIndex] = useState(0);

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
        <View>
            <Carousel 
                data={images}
                sliderWidth={ScreenWidth}
                itemWidth={ScreenWidth}
                renderItem={({item, index}) => (
                    <Image 
                        style={{
                            width : ScreenWidth,
                            height : CalculateImageCarouselHeight(ScreenWidth)
                        }}
                        source={item}
                        defaultSource={defaultImage}
                    />
                )}
                onSnapToItem={(index) => setCurenntImageIndex(index)}
            />
            <Pagination
                dotsLength={images.length}
                activeDotIndex={currentImageIndex}
                containerStyle={Styles.paginationContainer}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />            
        </View>
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
    },
    paginationContainer : {
        position : 'absolute',
        alignSelf : 'center',
        bottom : -20,
    }
});

export default ImagesPostCard;