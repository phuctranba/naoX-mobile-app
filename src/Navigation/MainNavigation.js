import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Containers/Login/Login';
import InitCampaign from '../Containers/InitCampaign/InitCampaign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '../Components/icon';
import Tab1 from '../Containers/Tab1';
import Tab2 from '../Containers/Tab2';
import Tab3 from '../Containers/Tab3';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Task_Colors} from '../Utils/Values/color';
import {lightMode} from '../Utils/Values';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBottom() {
    return (
        <Tab.Navigator
            initialRouteName="Tab1"
            // barStyle={{backgroundColor: '#ffffff'}}
            tabBarOptions={{
                activeTintColor:lightMode.green_dark,
                inactiveTintColor:Task_Colors.task_load_gray,
                showLabel:false,
                style: {
                    backgroundColor: lightMode.blue_light,
                    marginHorizontal: scale(60),
                    marginBottom: verticalScale(15),
                    paddingHorizontal: verticalScale(10),
                    elevation: 2,
                    borderRadius: verticalScale(25),
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // borderWidth: moderateScale(0.5),
                    borderColor: Task_Colors.task_load_gray,
                    height: verticalScale(46),
                },
            }}>
            <Tab.Screen name="Tab1" component={Tab1}
                        options={{
                            tabBarLabel: 'Tab1',
                            tabBarIcon: ({color, focused}) => (
                                <Icon type={'FontAwesome'} name="group" color={color} size={focused ? 23 : 18}/>
                            ),
                        }}/>
            <Tab.Screen name="Tab2" component={Tab2}
                        options={{
                            tabBarLabel: 'Tab2',
                            tabBarIcon: ({color, focused}) => (
                                <Icon type={'FontAwesome'} name="book" color={color} size={focused ? 23 : 18}/>
                            ),
                        }}/>
            <Tab.Screen name="Tab3" component={Tab3}
                        options={{
                            tabBarLabel: 'Tab3',
                            tabBarIcon: ({color, focused}) => (
                                <Icon type={'FontAwesome'} name="list-alt" color={color} size={focused ? 23 : 18}/>
                            ),
                        }}/>
        </Tab.Navigator>
    );
}

function MainNavigation() {
    return (
        <Stack.Navigator initialRouteName="Login"
                         screenOptions={{
                             headerShown: false,
                         }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="InitCampaign" component={InitCampaign}/>

            <Stack.Screen name="Tab" component={TabBottom}/>

        </Stack.Navigator>
    );
}

export default MainNavigation;
