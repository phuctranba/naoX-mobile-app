import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import Icon from '../../Components/icon';
import {lightMode} from '../../Utils/Values/color';
import {moderateScale} from 'react-native-size-matters';
import {Task_Colors} from '../../Utils/Values';
import {SetupKeyWord} from './TabInit';


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
        this.ListTab = [<SetupKeyWord Color={lightMode}/>, <SetupKeyWord Color={lightMode}/>, <SetupKeyWord Color={lightMode}/>];
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
            <View style={styles.container}>
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
                    onIndexChanged={(page) => {
                        this.setState({posi:page});
                    }}
                >
                    {this.ListTab.map((page,index) => this.renderViewPagerPage(page,index))}
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    stepIndicator: {
        marginVertical: 20,
        backgroundColor: 'red'
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
