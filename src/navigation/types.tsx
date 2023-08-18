import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    HomeScreen: undefined;
    LoginScreen: undefined;
    SplashScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

//----------------------------------------------------------------------------------------
// Screen names
//----------------------------------------------------------------------------------------
const SCREEN_NAMES = {
    HOME_SCREEN: 'HomeScreen',
    LOGIN_SCREEN: 'LoginScreen',
    SPLASH_SCREEN: 'SplashScreen',
};

export { SCREEN_NAMES };
