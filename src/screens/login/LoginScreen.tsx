import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MainText } from '@app/components';
import { RootStackScreenProps } from '@app/navigation/types';

type Props = RootStackScreenProps<'LoginScreen'>;

const LoginScreen = (_props: Props) => {
    return (
        <View style={styles.container}>
            <MainText>LoginScreen</MainText>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
