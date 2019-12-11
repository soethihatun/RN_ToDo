/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import {name as appName} from './app.json';
import { configureStore } from './src/store';
import { Provider as StoreProvider } from 'react-redux'

const Main = () => {
    return <StoreProvider store={configureStore()}>
        <App />
    </StoreProvider>
}

AppRegistry.registerComponent(appName, () => Main);
