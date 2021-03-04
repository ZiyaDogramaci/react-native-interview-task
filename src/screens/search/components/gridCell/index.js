import React from 'react';
import {
  Image
} from 'react-native';
import {
    GRID_CELL_WIDTH,
    NUMBER_OF_CELLS_PER_GRID_ROW
} from "../../../../utils/helpers";
import Video from "react-native-video";

const defaultImage = require('../../../../assets/default.jpg');

const GridCell = ({source, type, isPaused}) => {
    return type === 'video'
        ? <Video style={{
            width : GRID_CELL_WIDTH, 
            height : GRID_CELL_WIDTH
        }}
            source={source}
            resizeMode='cover'
            paused={isPaused}
        />
        : <Image source={source} 
            resizeMode='cover'
            style={{
                width : GRID_CELL_WIDTH,
                height : GRID_CELL_WIDTH
            }}
        />;
};

export default GridCell;