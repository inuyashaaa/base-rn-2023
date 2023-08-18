import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export const guidelineBaseWidth = 375;

export const scale = size => (size / guidelineBaseWidth) * width;
export const s = scale;
