import React, {Component} from 'react';
import {Animated, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {lightMode} from '../../Utils/Values';
import LottieView from 'lottie-react-native';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, verticalScale} from 'react-native-size-matters';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.style = style(lightMode);
        this.state = {
            button1: {name: 'Đăng nhập', value: 1, displayBigButton: 'Đăng nhập'},
            button2: {name: 'Quên mật khẩu', value: 2, displayBigButton: 'Xác nhận'},
            button3: {name: 'Đăng ký', value: 3, displayBigButton: 'Đăng ký'},
        };
        this.ani_signup = new Animated.Value(0);
        this.ani_forget = new Animated.Value(100);

        this.ani_button = new Animated.Value(0);
    };

    componentDidMount(): void {
        this.playIcon(this.icon_user, 30, 30);
        this.playIcon(this.icon_password, 50, 50);
        this.playIcon(this.icon_repassword, 50, 50);
        this.playIcon(this.icon_email, 30, 30);
    }

    playIcon(icon, from, to) {
        icon.play(from, to);
    }

    switchButton(value, numberButton) {
        let value_ani_signup, value_ani_forget, value_ani_button;
        if(numberButton===1&&this.state.button1.value===2){
            let switch_btn =this.state.button2;
            this.state.button2=this.state.button1;
            this.state.button1=switch_btn;
        }
        switch (value) {
            case 1:
                value_ani_signup = 0;
                value_ani_forget = 100;
                value_ani_button = 0;
                break;
            case 2:
                value_ani_signup = 0;
                value_ani_forget = 0;
                value_ani_button = 100;
                break;
            case 3:
                value_ani_signup = 100;
                value_ani_forget = 100;
                value_ani_button = 0;
                break;
        }
        Animated.timing(this.ani_button, {
            toValue: value_ani_button,
            duration: 300,
            useNativeDriver: false,
        }).start();
        Animated.timing(this.ani_signup, {
            toValue: value_ani_signup,
            duration: 300,
            useNativeDriver: false,
        }).start();

        Animated.timing(this.ani_forget, {
            toValue: value_ani_forget,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }

    render() {
        const height_signup = this.ani_signup.interpolate({
            inputRange: [0, 100],
            outputRange: [0, verticalScale(56)],
        });
        const translatey_name = this.ani_signup.interpolate({
            inputRange: [0, 100],
            outputRange: [verticalScale(-28), 0],
        });
        const translatey_repass = this.ani_signup.interpolate({
            inputRange: [0, 100],
            outputRange: [verticalScale(-56), 0],
        });
        const opa_signup = this.ani_signup.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
        });
        const translatey_pass = this.ani_forget.interpolate({
            inputRange: [0, 100],
            outputRange: [verticalScale(-56), 0],
        });
        const opa_pass = this.ani_forget.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
        });

        const height_forget = this.ani_forget.interpolate({
            inputRange: [0, 100],
            outputRange: [0, verticalScale(56)],
        });

        const height_forget_detail = this.ani_forget.interpolate({
            inputRange: [0, 100],
            outputRange: [moderateScale(60), 0],
        });

        const colorButtonSmall = this.ani_button.interpolate({
            inputRange: [0, 100],
            outputRange: [lightMode.green_dark,lightMode.blue],
        });

        const sizeButtonSmall = this.ani_button.interpolate({
            inputRange: [0, 100],
            outputRange: ['37%','48.5%'],
        });

        const sizeTextButtonSmall = this.ani_button.interpolate({
            inputRange: [0, 100],
            outputRange: [moderateScale(13),moderateScale(16)],
        });

        const colorButtonBig = this.ani_button.interpolate({
            inputRange: [0, 100],
            outputRange: [lightMode.blue,lightMode.green_dark],
        });

        return (
            <LinearGradient colors={[lightMode.blue_light, lightMode.background]}
                            locations={[0, 0.35]}
                            start={{x: 1, y: 0}} end={{x: 0, y: 1}} style={this.style.container}>

                <Image
                    style={this.style.image_logo}
                    resizeMode={'center'}
                    source={require('../../Assets/Images/logo-naox-nospace.png')}
                />
                <Text allowFontScaling={false} style={this.style.slogan}>Giúp bạn tìm mọi thứ</Text>

                <Animated.Text allowFontScaling={false}
                               style={[this.style.detail, {height: height_forget_detail}]}>
                    {'Chúng tôi sẽ gửi mật khẩu mởi vào email bạn đã đăng ký tài khoản.\nNhập email bên dưới và kiểm tra hòm thư.'}
                </Animated.Text>


                {/*form*/}
                <View style={this.style.container_input}>
                    {/*Email*/}
                    <View style={[this.style.viewInput, {zIndex: 2}]}>
                        <View style={this.style.view_icon_input}>
                            <LottieView ref={view => this.icon_email = view} loop={false}
                                        source={require('../../Assets/Lottie/email.json')}
                                        style={this.style.iconUser}
                                        speed={2}
                                        colorFilters={[{
                                            keypath: 'Layer 8 Outlines 2',
                                            color: lightMode.blue,
                                        }, {
                                            keypath: 'Layer 8 Outlines 4',
                                            color: lightMode.background,
                                        }]}/>
                        </View>

                        <TextInput style={this.style.inputText}
                                   underlineColorAndroid={'transparent'}
                                   returnKeyType={'next'}
                                   allowFontScaling={false}
                                   onSubmitEditing={() => {
                                       this.input_pass.focus();
                                   }}
                                   placeholderTextColor={lightMode.blue}
                                   blurOnSubmit={false}
                                   placeholder={'Email'}
                                   onFocus={() => this.playIcon(this.icon_email, 0, 30)}/>
                    </View>

                    {/*Họ tên*/}
                    <Animated.View
                        style={[this.style.viewMultipleInput, {
                            zIndex: 0,
                            height: height_signup,
                            transform: [{translateY: translatey_name}],
                            opacity: opa_signup,
                        }]}>

                        <Animated.View
                            style={[this.style.viewInput, {
                                marginVertical: verticalScale(10),
                                width: '60%',
                                marginRight: verticalScale(10),
                            }]}>
                            <View style={this.style.view_icon_input}>
                                <LottieView ref={view => this.icon_user = view} loop={false}
                                            source={require('../../Assets/Lottie/user.json')}
                                            style={this.style.iconUser}
                                            speed={2}
                                            colorFilters={[{
                                                keypath: 'User Outlines 2',
                                                color: lightMode.blue,
                                            }, {
                                                keypath: 'User Outlines',
                                                color: lightMode.background,
                                            }]}/>
                            </View>

                            <TextInput style={[this.style.inputText, {width: '75%'}]}
                                       underlineColorAndroid={'transparent'}
                                       returnKeyType={'next'}
                                       allowFontScaling={false}
                                       onSubmitEditing={() => {
                                           this.input_pass.focus();
                                       }}
                                       placeholderTextColor={lightMode.blue}
                                       blurOnSubmit={false}
                                       placeholder={'Họ và tên đệm'}
                                       onFocus={() => this.playIcon(this.icon_user, 0, 30)}/>
                        </Animated.View>

                        <Animated.View style={[this.style.viewInput, {
                            flex: 1,
                            marginVertical: verticalScale(10),
                            justifyContent: 'center',
                        }]}>
                            <TextInput style={this.style.inputText}
                                       underlineColorAndroid={'transparent'}
                                       returnKeyType={'next'}
                                       allowFontScaling={false}
                                       onSubmitEditing={() => {
                                           this.input_pass.focus();
                                       }}
                                       placeholderTextColor={lightMode.blue}
                                       blurOnSubmit={false}
                                       placeholder={'Tên'}
                                       onFocus={() => {
                                       }}/>
                        </Animated.View>

                    </Animated.View>

                    {/*Mật khẩu*/}
                    <Animated.View style={[{
                        height: height_forget,
                        zIndex: 1,
                        transform: [{
                            translateY: translatey_pass,
                        }],
                        opacity:opa_pass
                    }]}>
                        <View style={this.style.viewInput}>
                            <View style={this.style.view_icon_input}>
                                <LottieView ref={view => this.icon_password = view}
                                            source={require('../../Assets/Lottie/password.json')}
                                            style={this.style.iconPassword}
                                            speed={2} loop={false}
                                            colorFilters={[{
                                                keypath: 'Layer 9 Outlines',
                                                color: lightMode.blue,
                                            }, {
                                                keypath: 'Layer 2 Outlines',
                                                color: lightMode.blue,
                                            }]}/>
                            </View>

                            <TextInput style={this.style.inputText}
                                       underlineColorAndroid={'transparent'}
                                       returnKeyType={'done'}
                                       allowFontScaling={false}
                                       ref={view => this.input_pass = view}
                                       blurOnSubmit={false}
                                       placeholderTextColor={lightMode.blue}
                                       placeholder={'Mật khẩu'}
                                       onFocus={() => this.playIcon(this.icon_password, 0, 50)}/>
                        </View>
                    </Animated.View>


                    {/*Xác nhận mật khẩu*/}
                    <Animated.View style={[{
                        zIndex: 0,
                        height: height_signup,
                        transform: [{translateY: translatey_repass}],
                        opacity: opa_signup,
                    }]}>
                        <View style={this.style.viewInput}>
                            <View style={this.style.view_icon_input}>
                                <LottieView ref={view => this.icon_repassword = view}
                                            source={require('../../Assets/Lottie/rePassword.json')}
                                            style={this.style.iconUser}
                                            speed={2} loop={false}
                                            colorFilters={[{
                                                keypath: 'Layer 9 Outlines',
                                                color: lightMode.blue,
                                            }, {
                                                keypath: 'Layer 2 Outlines',
                                                color: lightMode.blue,
                                            }]}/>
                            </View>

                            <TextInput style={this.style.inputText}
                                       underlineColorAndroid={'transparent'}
                                       returnKeyType={'done'}
                                       allowFontScaling={false}
                                       ref={view => this.input_pass = view}
                                       blurOnSubmit={false}
                                       placeholderTextColor={lightMode.blue}
                                       placeholder={'Xác nhận mật khẩu'}
                                       onFocus={() => this.playIcon(this.icon_repassword, 0, 50)}/>
                        </View>

                    </Animated.View>
                </View>

                <View>
                    {/*Nút trên*/}
                    <Animated.View style={[this.style.buttonSignIn,{backgroundColor: colorButtonBig}]}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('InitCampaign')
                            }}>
                            <Text allowFontScaling={false}
                                  style={this.style.textSignIn}>{this.state.button1.displayBigButton}</Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <View style={this.style.viewOr}>
                        <View style={this.style.viewStrokeOr}/>
                        <Text allowFontScaling={false} style={this.style.textOr}>Hoặc</Text>
                        <View style={this.style.viewStrokeOr}/>
                    </View>


                    {/*2 nút dưới*/}
                    <View style={this.style.viewButtonBottom}>

                        <Animated.View style={[this.style.buttonBottom, {backgroundColor: colorButtonSmall, width: sizeButtonSmall,marginRight:'3%'}]}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.switchButton(this.state.button2.value,0);
                                    this.setState({
                                        button1: this.state.button2,
                                        button2: this.state.button1,
                                    });

                                }}>
                                <Animated.Text allowFontScaling={false}
                                      style={[this.style.textBottom, {
                                          fontSize: sizeTextButtonSmall,
                                          fontWeight:this.state.button2.value===2?'normal':'bold'
                                      }]}>{this.state.button2.name}</Animated.Text>
                            </TouchableOpacity>
                        </Animated.View>


                        <Animated.View style={[this.style.buttonBottom, {backgroundColor: lightMode.blue, flex:1}]}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.switchButton(this.state.button3.value,1);
                                    this.setState({
                                            button1: this.state.button3,
                                            button3: this.state.button1,
                                        },
                                    );
                                }}>
                                <Text allowFontScaling={false}
                                      style={[this.style.textBottom, {
                                          fontSize: moderateScale(16),
                                          fontWeight: 'bold',
                                      }]}>{this.state.button3.name}</Text>
                            </TouchableOpacity>
                        </Animated.View>

                    </View>
                </View>


            </LinearGradient>
        );
    }
}
