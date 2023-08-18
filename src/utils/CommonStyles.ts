import { Dimensions, Platform } from 'react-native';
import { scale } from './ScaleUtils';
import { isIphoneX } from './Utils';

class CommonSize {
    static srcWidth = Dimensions.get('window').width;

    static srcHeight = Dimensions.get('window').height;

    static paddingTopHeader = Platform.OS === 'ios' ? (isIphoneX() ? scale(34) : scale(20)) : 0;

    static headerHeight = scale(50);

    static paddingBottom = isIphoneX() ? scale(20) : 0;
}

/**
 * Common weight name mapping
 * Value            Name
 * ---------------------------
 * 400              Normal
 * 500              Medium
 * 600              Semi Bold
 * 700              Bold
 *
 */
const Fonts = {
    defaultRegular: {
        fontFamily: 'Roboto-Regular',
    },
    defaultMedium: {
        fontFamily: 'Roboto-Medium',
    },
    defaultMediumItalic: {
        fontFamily: 'Roboto-MediumItalic',
    },
    defaultBold: {
        fontFamily: 'Roboto-Bold',
    },
    defaultBoldItalic: {
        fontFamily: 'Roboto-BoldItalic',
    },
    defaultItalic: {
        fontFamily: 'Roboto-Italic',
    },
    defaultLight: {
        fontFamily: 'Roboto-Light',
    },
    defaultLightItalic: {
        fontFamily: 'Roboto-LightItalic',
    },
    defaultBlack: {
        fontFamily: 'Roboto-Black',
    },
    defaultBlackItalic: {
        fontFamily: 'Roboto-BlackItalic',
    },
    defaultThin: {
        fontFamily: 'Roboto-Thin',
    },
    defaultThinItalic: {
        fontFamily: 'Roboto-ThinItalic',
    },
};

const HitSlop = {
    default: {
        top: scale(10),
        bottom: scale(10),
        left: scale(10),
        right: scale(10),
    },
    big: {
        top: scale(20),
        bottom: scale(20),
        left: scale(20),
        right: scale(20),
    },
};

export { CommonSize, Fonts, HitSlop };
