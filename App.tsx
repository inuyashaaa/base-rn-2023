import React from 'react';
import '@app/i18n';
import CustomThemeProvider from '@app/theme';
import MainStack from '@app/navigation/MainStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@app/redux/store';

declare global {
    interface Console {
        tron: any;
    }
}

// if (!__DEV__) {
//     Sentry.init({
//         dsn: 'https://0bd994a67fb74b0ca148b3ba1ca72220@o271020.ingest.sentry.io/6526732',
//         tracesSampleRate: 1.0,
//     });
// }

const App = () => {
    return (
        <CustomThemeProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MainStack />
                </PersistGate>
            </Provider>
        </CustomThemeProvider>
    );
};

export default App;
