import React, {Component} from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import Icon from '../../Components/icon';
import {lightMode} from '../../Utils/Values/color';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Task_Colors} from '../../Utils/Values';
import {TabInit} from './TabInit';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TabPreview} from './TabPreview';
import {TabConfirm} from './TabConfirm';
import LinearGradient from "react-native-linear-gradient";


const secondIndicatorStyles = {
    stepIndicatorSize: moderateScale(50),
    currentStepIndicatorSize: moderateScale(60),
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: lightMode.green_dark,
    stepStrokeWidth: 3,
    separatorStrokeFinishedWidth: 4,
    stepStrokeFinishedColor: lightMode.green_dark,
    stepStrokeUnFinishedColor: Task_Colors.task_load_gray,
    separatorFinishedColor: lightMode.green_dark,
    separatorUnFinishedColor: Task_Colors.task_load_gray,
    stepIndicatorFinishedColor: lightMode.green_dark,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: lightMode.green_dark,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: Task_Colors.task_load_gray,
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: lightMode.green_dark,
};


export default class InitCampaign extends Component {

    constructor(props) {
        super(props);
        this.state={
            posi:0
        }
        this.ListTab = [
            {
                nameButton:"Kiểm thử",
                screen:<TabInit Color={lightMode}/>
            }
            ,
            {
                nameButton:"Xác nhận",
                screen:<TabPreview Color={lightMode}/>
            },
            {
                nameButton:"Thi hành",
                screen:<TabConfirm Color={lightMode}/>
            }];
    };

    onStepPress = (position: number) => {
        this.setState({posi:position});
    };

    renderViewPagerPage = (data: any,index) => {
        return (
            <View key={index} style={styles.page}>
                {data}
            </View>
        );
    };

    renderStepIndicator = (params: any) => (
        <Icon {...this.getStepIndicatorIconConfig(params)} />
    );

    getStepIndicatorIconConfig = ({
                                      position,
                                      stepStatus,
                                  }: {
        position: number;
        stepStatus: string;
    }) => {
        const iconConfig = {
            name: 'feed',
            color: stepStatus === 'finished' ? '#ffffff' : lightMode.green_dark,
            size: 25,
        };
        switch (position) {
            case 0: {
                iconConfig.name = 'playlist-edit';
                iconConfig.type = 'MaterialCommunityIcons';
                break;
            }
            case 1: {
                iconConfig.name = 'format-list-text';
                iconConfig.type = 'MaterialCommunityIcons';
                break;
            }
            case 2: {
                iconConfig.name = 'playlist-check';
                iconConfig.type = 'MaterialCommunityIcons';
                break;
            }
            default: {
                break;
            }
        }
        return iconConfig;
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.stepIndicator}>
                    <StepIndicator
                        stepCount={3}
                        customStyles={secondIndicatorStyles}
                        currentPosition={this.state.posi}
                        onPress={this.onStepPress}
                        renderStepIndicator={this.renderStepIndicator}
                        labels={[
                            'Cart',
                            'Delivery Address',
                            'Order Summary',
                        ]}
                    />
                </View>
                <Swiper
                    style={{flexGrow: 1}}
                    loop={false}
                    index={this.state.posi}
                    autoplay={false}
                    showsButtons
                    nextButton={<Text style={styles.button_pages}>›</Text>}
                    prevButton={<Text style={styles.button_pages}>‹</Text>}
                    onIndexChanged={(page) => {
                        this.setState({posi:page});
                    }}
                    showsPagination={false}
                >
                    {this.ListTab.map((page,index) => this.renderViewPagerPage(page.screen,index))}
                </Swiper>

                <TouchableOpacity style={styles.touchConfirm}>
                    <Text style={styles.textConfirm}>{this.ListTab[this.state.posi].nameButton}</Text>
                </TouchableOpacity>
                <LinearGradient colors={[lightMode.transparent, lightMode.background]}
                                locations={[0, 0.8]}
                                start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={styles.viewGardient}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    touchConfirm:{
        width:200,
        height:50,
        backgroundColor: lightMode.green_dark,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:3,
        borderRadius:15,
        position:'absolute',
        bottom:20,
        alignSelf:'center'
    },
    textConfirm:{
        color:lightMode.background,
        fontWeight:'bold',
        fontSize:20
    },
    viewGardient:{
        width:'100%',
        height:70,
        position:'absolute',
        bottom: 0
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    button_pages:{
      fontSize:60,
      color:lightMode.blue
    },
    stepIndicator: {
        marginTop:verticalScale(20)
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepLabel: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        color: '#999999',
    },
    stepLabelSelected: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        color: '#4aae4f',
    },
});
