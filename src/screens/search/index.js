import React, { useLayoutEffect, useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import ImmerProduce from "immer";
import { useDebounce } from "use-lodash-debounce";

import CustomNavigationHeader from "./components/navigationHeader";
import LoadingContainer from "../../components/loadingContainer";
import GridCell from "./components/gridCell";

import { NUMBER_OF_CELLS_PER_GRID_ROW, IsStringValidAndNotEmpty } from "../../utils/helpers";
import { mockSearch } from "../../mockApi/index";

const viewabilityConfig = {
  itemVisiblePercentThreshold: 75,
};

const DEBOUNCE_TIMEOUT = 1000;

const SearchScreen = ({route, navigation}) => {
  const [ searchText, setSearchText ] = useState('');
  const [ searchResultsData, setSearchResultsData ] = useState(undefined);
  const [ changedItems, setChangedItems ] = useState( undefined );
  const [ isSearching, setIsSearching ] = useState(true);
  const debouncedSearchText = useDebounce(searchText, DEBOUNCE_TIMEOUT);

  useEffect(() => {
    setIsSearching(true);
    mockSearch({token : route.params.token, searchText : debouncedSearchText})
      .then((e) => {
        setIsSearching(false);
        setSearchResultsData({
          data : e,
          isPausedStates : e.map(item => ({
            id : item.id,
            isPaused : item.type === 'video' ? true : undefined
          }))
        });
      });
  },[debouncedSearchText]);

  useEffect(() => {
    if(changedItems){
      const newState = ImmerProduce(searchResultsData, draftState => {
        changedItems.forEach((item) => {
          if( item.item.type === 'video' ){
            draftState.isPausedStates[item.index].isPaused = !item.isViewable;
          }
        });
      });

      setSearchResultsData(newState);
    }
  },[changedItems]);

  const _onVieweableItemsChanged = useCallback(({ changed }) => {
    setChangedItems(changed);
  },[]);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: ({...props}) => (
        <CustomNavigationHeader {...props}
          onSearchTextChanged={e => setSearchText(e)}
        />),
    });      
  }, [navigation])

  if(!searchResultsData || isSearching){
    return <LoadingContainer/>
  }

  return (
    <View style={Styles.pageContainer}>
      <FlatList
        horizontal={false}
        data={searchResultsData.data}
        extraData={searchResultsData.isPausedStates}
        numColumns={NUMBER_OF_CELLS_PER_GRID_ROW}
        keyExtractor={item => item.id}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps='always'
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        windowSize={5}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={_onVieweableItemsChanged}
        removeClippedSubviews={true}
        renderItem={({item, index}) => {
          return  <GridCell 
            type={item.type} 
            source={item.source}
            isPaused={searchResultsData.isPausedStates[index].isPaused}
          />;
        }}
      />    
    </View>
  )
}

const Styles = StyleSheet.create({
  pageContainer : {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

export default SearchScreen;