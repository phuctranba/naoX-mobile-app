import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Containers/Login';
import InitCampaign from '../Containers/InitCampaign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from '../Components/icon';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Task_Colors} from '../Utils/Values/color';
import {lightMode} from '../Utils/Values';
import Actions from '../Containers/Actions';
import News from '../Containers/NewFeeds';
import Analysis from '../Containers/Analysis';
import {Gender, Shade} from '../Containers/TabDetailAnalysis';
import * as STYLE from '../Utils/Values/general_style';

const TabBottom = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function TabDetailAnalysis() {
    return (
        <TabTop.Navigator
            backBehavior={'none'}
            initialRouteName={'Shade'}
            tabBarPosition={'bottom'}
            lazy={true}
            lazyPreloadDistance={1}
            tabBarOptions={{
                activeTintColor:lightMode.green_dark,
                showIcon:true,
                inactiveTintColor:Task_Colors.task_load_gray,
                upperCaseLabel: false,
                scrollEnabled: true,
                allowFontScaling:false,

                pressColor: lightMode.green,
                pressOpacity: 0.5,
                style: {
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    paddingVertical:verticalScale(5),
                },
                labelStyle: {
                    textTransform: 'none',
                    fontSize: verticalScale(11),
                    marginTop: 0,
                    marginBottom: verticalScale(5),
                    padding: 0
                },
                iconStyle: {
                    margin: 0, padding: 0
                },
                tabStyle: {
                    margin: 0, padding: 0
                },
                indicatorStyle: {
                    backgroundColor: 'transparent',
                },
            }}
        >
            <TabTop.Screen name="Shade" component={Shade}
                           options={{
                               tabBarLabel: 'Sắc thái',
                               tabBarIcon: ({color}) => (
                                   <Icon type={'MaterialCommunityIcons'} name="format-list-text" color={color} size={moderateScale(18,1)}/>
                               ),
                           }}/>
            <TabTop.Screen name="Gender" component={Gender}
                           options={{
                               tabBarLabel: 'Giới tính',
                               tabBarIcon: ({color}) => (
                                   <Icon type={'MaterialCommunityIcons'} name="format-list-text" color={color} size={moderateScale(18,1)}/>
                               ),
                           }}/>
            <TabTop.Screen name="Shade2" component={Shade}
                           options={{
                               tabBarLabel: 'Sắc thái',
                               tabBarIcon: ({color}) => (
                                   <Icon type={'MaterialCommunityIcons'} name="format-list-text" color={color} size={moderateScale(18,1)}/>
                               ),
                           }}/>
            <TabTop.Screen name="Shade3" component={Shade}
                           options={{
                               tabBarLabel: 'Sắc thái',
                               tabBarIcon: ({color}) => (
                                   <Icon type={'MaterialCommunityIcons'} name="format-list-text" color={color} size={moderateScale(18,1)}/>
                               ),
                           }}/>
        </TabTop.Navigator>
    );
}

function TabMain() {
    return (
        <TabBottom.Navigator
            initialRouteName="Analysis"
            // barStyle={{backgroundColor: '#ffffff'}}
            tabBarOptions={{
                activeTintColor:lightMode.green_dark,
                inactiveTintColor:Task_Colors.task_load_gray,
                showLabel:false,
                style: {
                    backgroundColor: lightMode.background,
                    marginHorizontal: scale(80),
                    marginBottom: verticalScale(15),
                    paddingHorizontal: scale(10),
                    elevation: 2,
                    borderRadius: verticalScale(25),
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // borderWidth: moderateScale(0.5),
                    borderColor: Task_Colors.task_load_gray,
                    height: verticalScale(46),
                    ...STYLE.SHADOW_2
                },
                tabStyle: {
                    height: verticalScale(46),
                },
            }}>
            <TabBottom.Screen name="News" component={News}
                        options={{
                            tabBarLabel: 'Tab1',
                            tabBarIcon: ({color, focused}) => (
                                <Icon type={'MaterialCommunityIcons'} name="format-list-text" color={color} size={focused ? moderateScale(25,1) : moderateScale(20,1)}/>
                            ),
                        }}/>
            <TabBottom.Screen name="Analysis" component={Analysis}
                        options={{
                            tabBarLabel: 'Tab2',
                            tabBarIcon: ({color, focused}) => (
                                <Icon type={'MaterialCommunityIcons'} name="chart-bar-stacked" color={color} size={focused ? moderateScale(25,1) : moderateScale(20,1)}/>
                            ),
                        }}/>
            <TabBottom.Screen name="Actions" component={Actions}
                        options={{
                            tabBarLabel: 'Tab3',
                            tabBarIcon: ({color, focused}) => (
                                <Icon type={'MaterialCommunityIcons'} name="format-list-bulleted-type" color={color} size={focused ? moderateScale(25,1) : moderateScale(20,1)}/>
                            ),
                        }}/>
        </TabBottom.Navigator>
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

            <Stack.Screen name="TabMain" component={TabMain}/>
            <Stack.Screen name="TabDetailAnalysis" component={TabDetailAnalysis}/>


        </Stack.Navigator>
    );
}

export default MainNavigation;
