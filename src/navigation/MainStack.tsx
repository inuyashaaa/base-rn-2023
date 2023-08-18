import React, { useContext } from 'react';
import { HomeScreen, LoginScreen, SplashScreen } from '@app/screens';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '@app/theme';
import { navigationRef } from '@app/utils/NavigationHelper';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <NavigationContainer ref={navigationRef} theme={theme.isDarkTheme ? DarkTheme : DefaultTheme}>
            <Stack.Navigator
                initialRouteName={'SplashScreen'}
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}>
                <Stack.Screen
                    name={'SplashScreen'}
                    component={SplashScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'LoginScreen'}
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'HomeScreen'}
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
