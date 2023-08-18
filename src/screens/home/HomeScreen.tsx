import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MainText } from '@app/components';
import { RootStackScreenProps } from '@app/navigation/types';

type Props = RootStackScreenProps<'HomeScreen'>;

const HomeScreen = (_props: Props) => {
    return (
        <View style={styles.container}>
            <MainText>HomeScreen</MainText>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
