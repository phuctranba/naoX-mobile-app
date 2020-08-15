import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import {StatusBar} from 'react-native';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar translucent={true} backgroundColor="#00000000" barStyle="dark-content" />
            <MainNavigation/>
        </NavigationContainer>
    );
}
