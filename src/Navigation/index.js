import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import {StatusBar} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {lightMode} from '../Utils/Values';
// import Icon from 'react-native-vector-icons/FontAwesome'
// Icon.loadFont();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={lightMode.transparent} barStyle="dark-content" />
            <MainNavigation/>
        </NavigationContainer>
    );
}
