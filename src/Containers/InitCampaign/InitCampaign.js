import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import Icon from '../../Components/icon';
import {lightMode} from '../../Utils/Values/color';
import {moderateScale} from 'react-native-size-matters';
import {Task_Colors} from '../../Utils/Values';
import {TabInit} from './TabInit';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TabPreview} from './TabPreview';
import {TabConfirm} from './TabConfirm';
import LinearGradient from 'react-native-linear-gradient';
import {styleInitCampaign} from './style';


const stepStyles = {
    stepIndicatorSize: moderateScale(50),
    currentStepIndicatorSize: moderateScale(60),
    separatorStrokeWidth: moderateScale(2),
    currentStepStrokeWidth: moderateScale(3),
    stepStrokeCurrentColor: lightMode.green_dark,
    stepStrokeWidth: moderateScale(3),
    separatorStrokeFinishedWidth: moderateScale(4),
    stepStrokeFinishedColor: lightMode.green_dark,
    stepStrokeUnFinishedColor: Task_Colors.task_load_gray,
    separatorFinishedColor: lightMode.green_dark,
    separatorUnFinishedColor: Task_Colors.task_load_gray,
    stepIndicatorFinishedColor: lightMode.green_dark,
    stepIndicatorUnFinishedColor: lightMode.background,
    stepIndicatorCurrentColor: lightMode.background,
    stepIndicatorLabelFontSize: moderateScale(13, 0.3),
    currentStepIndicatorLabelFontSize: moderateScale(13, 0.3),
    stepIndicatorLabelCurrentColor: lightMode.green_dark,
    stepIndicatorLabelFinishedColor: lightMode.background,
    stepIndicatorLabelUnFinishedColor: Task_Colors.task_load_gray,
    labelColor: Task_Colors.task_stylish,
    labelSize: moderateScale(13, 0.3),
    currentStepLabelColor: lightMode.green_dark,
};


export default class InitCampaign extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posi: 0,
        };
        this.ListTab = [
            {
                nameButton: 'Kiểm thử',
                screen: <TabInit Color={lightMode}/>,
            }
            ,
            {
                nameButton: 'Xác nhận',
                screen: <TabPreview Color={lightMode}/>,
            },
            {
                nameButton: 'Thi hành',
                screen: <TabConfirm Color={lightMode}/>,
            }];
    };

    onStepPress = (position: number) => {
        this.setState({posi: position});
    };

    renderViewPagerPage = (data: any, index, styles) => {
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
        const styles = styleInitCampaign(lightMode);
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.stepIndicator}>
                    <StepIndicator
                        stepCount={3}
                        customStyles={stepStyles}
                        currentPosition={this.state.posi}
                        onPress={this.onStepPress}
                        renderStepIndicator={this.renderStepIndicator}
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
                        this.setState({posi: page});
                    }}
                    showsPagination={false}
                >
                    {this.ListTab.map((page, index) => this.renderViewPagerPage(page.screen, index, styles))}
                </Swiper>

                <TouchableOpacity activeOpacity={0.5} style={styles.touchConfirm}>
                    <Text style={styles.textConfirm}>{this.ListTab[this.state.posi].nameButton}</Text>
                </TouchableOpacity>
                <LinearGradient colors={[lightMode.transparent, lightMode.background]}
                                locations={[0, 0.8]}
                                start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={styles.viewGardient}/>
            </SafeAreaView>
        );
    }
}
