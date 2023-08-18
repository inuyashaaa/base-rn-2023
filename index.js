import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

if (__DEV__) {
    import('./Reactotron').then(() => {
        console.log('Reactotron Configured!!!');
    });

    LogBox.ignoreLogs([
        'Setting a timer for a long period of time, i.e. multiple minutes',
        'Require cycle: node_module',
        'ViewPropTypes will be removed from React Native',
        'Non-serializable values were found in the navigation state',
    ]);
} else {
    // TODO: Setting sentry
}

AppRegistry.registerComponent(appName, () => App);
