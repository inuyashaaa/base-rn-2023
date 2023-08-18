import React from 'react';
import { Dimensions, Text, StyleSheet, TextProps } from 'react-native';
import { Fonts } from '@app/utils/CommonStyles';
import { guidelineBaseWidth } from '@app/utils/ScaleUtils';
const { width, height } = Dimensions.get('window');
const realWidth = height > width ? width : height;

const scaleText = (fontSize: number = 14, lineHeight: number = fontSize * 1.2) => ({
    fontSize: Math.round((fontSize * realWidth) / guidelineBaseWidth),
    lineHeight: Math.round((lineHeight * realWidth) / guidelineBaseWidth),
});

interface NewTextProps extends TextProps {
    children: any;
}

const ScalableText = (props: NewTextProps) => {
    const { style = {}, children } = props;
    const { fontSize, lineHeight } = StyleSheet.flatten(style);
    return (
        <Text allowFontScaling={false} {...props} style={[styles.container, style, scaleText(fontSize, lineHeight)]}>
            {children}
        </Text>
    );
};

export default ScalableText;

const styles = StyleSheet.create({
    container: {
        ...Fonts.defaultRegular,
        paddingTop: 0,
        paddingBottom: 0,
    },
});
