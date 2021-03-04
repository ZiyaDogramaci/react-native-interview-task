import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import ImmerProduce from "immer";

import LoadingContainer from "../../components/loadingContainer";
import VideoPostCard from "./components/videoPostCard";
import ImagesPostCard from "./components/imagesPostCard";

import { mockFeed } from "../../mockApi/index";

const viewabilityConfig = {
  itemVisiblePercentThreshold: 75,
};

const HomeScreen = ({ route, navigation }) => {
  const [ feedData, setFeedData ] = useState( undefined );
  const [ changedItems, setChangedItems ] = useState( undefined );

  useEffect(() => {
    mockFeed({ token : route.params.token})
      .then(data => setFeedData({
        data : data.posts,
        isPausedStates : data.posts.map(item => ({
          id : item.id,
          isPaused : item.type === 'video' ? true : undefined
        }))
      }));
  },[]);

  useEffect(() => {
    if(changedItems){
      const newState = ImmerProduce(feedData, draftState => {
        changedItems.forEach((item) => {
          if( item.item.type === 'video' ){
            draftState.isPausedStates[item.index].isPaused = !item.isViewable;
          }
        });
      });
      setFeedData(newState);
    }
  },[changedItems]);

  const _onVieweableItemsChanged = useCallback(({ changed }) => {
    setChangedItems(changed);
  },[]);

  if(!feedData){
    return <LoadingContainer/>
  }

  return (
    <View style={Styles.pageContainer}>
      <FlatList
        extraData={feedData.isPausedStates}
        data={feedData.data}
        keyExtractor={item => item.id}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        windowSize={5}
        viewabilityConfig={viewabilityConfig}
        removeClippedSubviews={true}
        onViewableItemsChanged={_onVieweableItemsChanged}
        renderItem={({item, index}) => (
          item.type === 'video'
            ? <VideoPostCard
              video={item.video}
              profilePicture={item.postedBy.profilePicture}
              userName={item.postedBy.userName}
              reactions={item.reactions}
              message={item.message}
              containerStyle={Styles.postCard}
              isPaused={feedData.isPausedStates[index].isPaused}
            />
            : <ImagesPostCard
              images={item.images}
              profilePicture={item.postedBy.profilePicture}
              userName={item.postedBy.userName}
              reactions={item.reactions}
              message={item.message}
              containerStyle={Styles.postCard}
            />
        )}
      />
    </View>
  )
}

const Styles = StyleSheet.create({
  pageContainer : {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingVertical : 10
  },
  postCard : {
    marginBottom : 10
  }
});

export default HomeScreen;