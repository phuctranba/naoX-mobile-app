import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Containers/Login/Login';
import InitCampaign from '../Containers/InitCampaign/InitCampaign';
import News from '../Containers/NewFeeds';
import Actions from '../Containers/Actions';

const Stack = createStackNavigator();

function MainNavigation() {
    return (
        <Stack.Navigator initialRouteName="Actions">
            <Stack.Screen name="Login" component={Actions} options={{ headerShown: false }}/>
            <Stack.Screen name="InitCampaign" component={InitCampaign} options={{ headerShown: false }}/>
            <Stack.Screen name="News" component={News} options={{ headerShown: false }}/>
            <Stack.Screen name="Actions" component={Actions} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default MainNavigation;
