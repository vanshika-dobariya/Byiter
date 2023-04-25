/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { StatusBar, ActivityIndicator } from 'react-native';
import store from './redux/store/index.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { colors } from './constants/index';
import App from './navigation';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import environments from './environments/index';

/**
 * @class Index
 * @description  Tattlebox init function
 */
export default function index() {

    // Initialize Apollo Client
    const client = new ApolloClient({
        uri: environments.graphqlServerUrl.backendGraphqlPathUrl,
        cache: new InMemoryCache()
    });
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, []);

    return (
        // <Provider store={store}>
        //     <ApolloProvider client={client}>
        //         <App />
        //     </ApolloProvider>
        // </Provider >
        <Provider store={store}>
            <App />
        </Provider>
    );
}


