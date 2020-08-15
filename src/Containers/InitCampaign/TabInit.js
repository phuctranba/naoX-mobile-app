import React from 'react';
import {Animated, Text, TextInput, View, ScrollView, TouchableOpacity} from 'react-native';
import {styleSeupKeyWord} from './style';
import {moderateScale} from 'react-native-size-matters';
import Icon from '../../Components/icon';

export const SetupKeyWord = ({Color}) => {
    const style = styleSeupKeyWord(Color)

    return (
        <ScrollView style={style.container} stickyHeaderIndices={[0]}>
            <View style={{flex:1}}>
                <Text allowFontScaling={false} style={style.title}>Thiết lập từ khóa</Text>
            </View>
            <View>
                <View>
                    <Text style={style.detail}>Tôi muốn tìm kiếm chính xác những từ...</Text>
                    <View style={style.viewInput}>
                        <TextInput style={style.inputText}
                                   underlineColorAndroid={'transparent'}
                                   returnKeyType={'next'}
                                   allowFontScaling={false}
                                   placeholderTextColor={Color.blue}
                                   blurOnSubmit={false}
                                   placeholder={'Email'}
                                   onFocus={() => {}}/>
                    </View>
                </View>
                <View>
                    <Text style={style.detail}>Có thể bao gồm những từ...</Text>
                    <View style={style.viewInput}>
                        <TextInput style={style.inputText}
                                   underlineColorAndroid={'transparent'}
                                   returnKeyType={'next'}
                                   allowFontScaling={false}
                                   placeholderTextColor={Color.blue}
                                   blurOnSubmit={false}
                                   placeholder={'Email'}
                                   onFocus={() => {}}/>
                    </View>
                </View>
                <View>
                    <Text style={style.detail}>Ngoại trừ những từ...</Text>
                    <View style={style.viewInput}>
                        <TextInput style={style.inputText}
                                   underlineColorAndroid={'transparent'}
                                   returnKeyType={'next'}
                                   allowFontScaling={false}
                                   placeholderTextColor={Color.blue}
                                   blurOnSubmit={false}
                                   placeholder={'Email'}
                                   onFocus={() => {}}/>
                    </View>
                </View>
                <View>
                    <Text style={style.detail}>Bao gồm tại địa điểm...</Text>
                    <View style={style.viewInput}>
                        <TextInput style={style.inputText}
                                   underlineColorAndroid={'transparent'}
                                   returnKeyType={'next'}
                                   allowFontScaling={false}
                                   placeholderTextColor={Color.blue}
                                   blurOnSubmit={false}
                                   placeholder={'Email'}
                                   onFocus={() => {}}/>
                    </View>
                </View>

                <View>
                    <Text style={style.detail}>Bao gồm tại địa điểm...</Text>
                    <TouchableOpacity activeOpacity={1} style={style.view_checkboxs}
                                      onPress={()=> {

                                      }}
                                      hitSlop={{left: 20, right: 20}}>
                        <Icon size={moderateScale(20)} color={Color.green_dark} name={true?"checkbox-marked":"checkbox-blank-outline"} type={"MaterialCommunityIcons"} />
                        <Text allowFontScaling={false} style={style.text_chexkbox}>Nhà hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={style.view_checkboxs}
                                      onPress={()=> {

                                      }}
                                      hitSlop={{left: 20, right: 20}}>
                        <Icon size={moderateScale(20)} color={Color.green_dark} name={true?"checkbox-marked":"checkbox-blank-outline"} type={"MaterialCommunityIcons"} />
                        <Text allowFontScaling={false} style={style.text_chexkbox}>Nhà hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={style.view_checkboxs}
                                      onPress={()=> {

                                      }}
                                      hitSlop={{left: 20, right: 20}}>
                        <Icon size={moderateScale(20)} color={Color.green_dark} name={true?"checkbox-marked":"checkbox-blank-outline"} type={"MaterialCommunityIcons"} />
                        <Text allowFontScaling={false} style={style.text_chexkbox}>Nhà hàng</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    );
};
