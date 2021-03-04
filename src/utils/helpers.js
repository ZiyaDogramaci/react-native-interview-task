import {
    Dimensions,
} from 'react-native';
import { getStatusBarHeight } from "react-native-status-bar-height";

const VIDEO_ASPECT_RATIO = 1.77;
const IMAGE_ASPECT_RATIO = 1.53;

const GRID_CELL_MIN_WIDTH = 200;

const CalculateHeight = (width, aspectRatio) => Math.round(width / aspectRatio);

export const ScreenWidth = Dimensions.get('screen').width;
export const StatusBarHeight = getStatusBarHeight();

export const NUMBER_OF_CELLS_PER_GRID_ROW = Math.round(ScreenWidth / GRID_CELL_MIN_WIDTH);
export const GRID_CELL_WIDTH = Math.round(ScreenWidth / NUMBER_OF_CELLS_PER_GRID_ROW);
export const HEADER_HEIGHT = Platform.OS === 'ios' ? 45 : 35;

export const CalculateVideoPlayerHeight = (width) => CalculateHeight(width, VIDEO_ASPECT_RATIO);
export const CalculateImageCarouselHeight = (width) => CalculateHeight(width, IMAGE_ASPECT_RATIO);
export const IsStringValidAndNotEmpty = str => (str && typeof(str) === 'string' && str.length);
