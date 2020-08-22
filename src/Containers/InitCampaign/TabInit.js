import React, {useRef} from 'react';
import {Animated, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styleTabInit} from './style';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Icon from '../../Components/icon';

export const TabInit = ({Color}) => {
    const styles = styleTabInit(Color);
    const elevationAni = useRef(new Animated.Value(0)).current

    return (
        <View style={styles.container}>

            <Text allowFontScaling={false} style={styles.title}>Thiết lập từ khóa</Text>
            <Animated.View style={[styles.stroke_shadow,{elevation:elevationAni.interpolate({
                    inputRange: [0, verticalScale(50)],
                    outputRange: [0, 2],
                    extrapolate: 'clamp',
                })}]} />

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
                        onScroll={Animated.event(
                            [{
                                nativeEvent: {
                                    contentOffset: {
                                        y: elevationAni
                                    },
                                },
                            }],
                            {useNativeDriver: false}
                        )}>

                {/*Cụm ô nhập*/}
                <View style={styles.element_view}>
                    <Text style={styles.detail}>Tôi muốn tìm kiếm chính xác những từ...</Text>
                    <View style={styles.viewInput}>
                        <TextInput style={styles.inputText}
                                   underlineColorAndroid={'transparent'}
                                   returnKeyType={'next'}
                                   allowFontScaling={false}
                                   placeholderTextColor={Color.blue_opa_50}
                                   blurOnSubmit={false}
                                   placeholder={'VD: Bún bò Huế, trà sữa, v.v...'}
                                   onFocus={() => {
                                   }}/>
                    </View>
                </View>

                <View style={styles.element_view}>
                    <Text style={styles.detail}>Có thể bao gồm những từ...</Text>
                    <View style={styles.viewInput}>
                        <TextInput style={style.inputText}
                                   underlineColorAndroid={'transparent'}
                                   returnKeyType={'next'}
                                   allowFontScaling={false}
                                   placeholderTextColor={Color.blue_opa_50}
                                   blurOnSubmit={false}
                                   placeholder={'VD: Cung Đình, DingTea, v.v...'}
                                   onFocus={() => {
                                   }}/>
                    </View>
                </View>

                <View style={styles.element_view}>
                    <Text style={styles.detail}>Ngoại trừ những từ...</Text>
                    <View style={styles.viewInput}>
                        <TextInput style={style.inputText}
                                   underlineColorAndroid={'transparent'}
                                   returnKeyType={'next'}
                                   allowFontScaling={false}
                                   placeholderTextColor={Color.blue_opa_50}
                                   blurOnSubmit={false}
                                   placeholder={'VD: Bún thang, cafe, v.v...'}
                                   onFocus={() => {
                                   }}/>
                    </View>
                </View>

                <View style={styles.element_view}>
                    <Text style={styles.detail}>Bao gồm tại địa điểm...</Text>
                    <View style={styles.viewInput}>
                        <TextInput style={styles.inputText}
                                   underlineColorAndroid={'transparent'}
                                   returnKeyType={'next'}
                                   allowFontScaling={false}
                                   placeholderTextColor={Color.blue_opa_50}
                                   blurOnSubmit={false}
                                   placeholder={'VD: Royal City, Giáp Bát, v.v...'}
                                   onFocus={() => {
                                   }}/>
                    </View>
                </View>

                {/*Cụm checkbox*/}
                <View style={styles.element_view}>
                    <Text style={styles.detail}>Thuộc lĩnh vực...</Text>

                    <TouchableOpacity activeOpacity={1} style={styles.view_checkboxs}
                                      onPress={() => {

                                      }}
                                      hitSlop={{left: 20, right: 20}}>
                        <Icon size={moderateScale(20)} color={Color.green_dark}
                              name={true ? 'checkbox-marked' : 'checkbox-blank-outline'}
                              type={'MaterialCommunityIcons'}/>
                        <Text allowFontScaling={false} style={styles.text_chexkbox}>Ăn uống, nhà hàng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} style={styles.view_checkboxs}
                                      onPress={() => {

                                      }}
                                      hitSlop={{left: 20, right: 20}}>
                        <Icon size={moderateScale(20)} color={Color.green_dark}
                              name={true ? 'checkbox-marked' : 'checkbox-blank-outline'}
                              type={'MaterialCommunityIcons'}/>
                        <Text allowFontScaling={false} style={styles.text_chexkbox}>Khách sạn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} style={styles.view_checkboxs}
                                      onPress={() => {

                                      }}
                                      hitSlop={{left: 20, right: 20}}>
                        <Icon size={moderateScale(20)} color={Color.green_dark}
                              name={true ? 'checkbox-marked' : 'checkbox-blank-outline'}
                              type={'MaterialCommunityIcons'}/>
                        <Text allowFontScaling={false} style={styles.text_chexkbox}>Du lịch, trải nghiệm</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};
