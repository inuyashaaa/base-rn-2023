import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainText } from '@app/components';
import { RootStackScreenProps, SCREEN_NAMES } from '@app/navigation/types';
import { navigate } from '@app/utils/NavigationHelper';

type Props = RootStackScreenProps<'SplashScreen'>;

const SplashScreen = (_props: Props) => {
    useEffect(() => {
        setTimeout(() => {
            navigate(SCREEN_NAMES.HOME_SCREEN);
        }, 1000);
    }, []);

    return (
        <View style={styles.container}>
            <MainText>SplashScreen</MainText>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
