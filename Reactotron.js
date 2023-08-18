import Reactotron from 'reactotron-react-native';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import { NativeModules } from 'react-native';
import { reactotronRedux } from 'reactotron-redux';
import { storageReactotron } from '@app/storage';
import mmkvPlugin from 'reactotron-react-native-mmkv';

let scriptHostname = 'localhost';

if (__DEV__) {
    const { scriptURL } = NativeModules.SourceCode;
    scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

Reactotron.clear();
const reactotron = Reactotron.configure({
    name: 'Fantasy',
    host: scriptHostname,
    createSocket: path => new ReactotronFlipper(path),
})
    .use(reactotronRedux())
    .use(mmkvPlugin({ storage: storageReactotron, ignore: ['secret', 'persist:root'] }))
    .useReactNative({})
    .connect();

global.tron = __DEV__ ? Reactotron : { log: () => {} };

export default reactotron;
