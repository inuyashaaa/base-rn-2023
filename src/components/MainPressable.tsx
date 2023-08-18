import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

interface NewPressableProps {
    isEnableHapticFeedback: boolean;
}

type Props = NewPressableProps & React.ComponentProps<typeof Pressable>;

const MainPressable = (props: Props) => {
    const { isEnableHapticFeedback = false, children, onPress } = props;

    const handlePress = (event: GestureResponderEvent) => {
        if (isEnableHapticFeedback) {
            ReactNativeHapticFeedback.trigger('impactLight');
        }
        onPress?.(event);
    };

    return (
        <Pressable {...props} onPress={handlePress}>
            {children}
        </Pressable>
    );
};

export default MainPressable;
