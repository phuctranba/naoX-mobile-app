import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Containers/Login/Login';
import InitCampaign from '../Containers/InitCampaign/InitCampaign';

const Stack = createStackNavigator();

function MainNavigation() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="InitCampaign" component={InitCampaign} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default MainNavigation;
