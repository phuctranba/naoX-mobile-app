import React, {useRef} from 'react';
import {ScrollView, Text, View, Animated} from 'react-native';
import {styleTabPreview} from './style';
import FastImage from 'react-native-fast-image';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Icon from '../../Components/icon';
import {convertNumberWithCharacters} from '../../Utils/Functions/convent_big_number';
import {FakeDataPreview} from '../../Utils/Values';

const _render_item = (item, index, styles, Color) => {
    return (
        <View key={index} style={styles.view_post}>

            {/*Tên page và avatar*/}
            <View style={styles.header_post}>
                <FastImage
                    style={styles.avatar}
                    source={{uri: item.avatar}}
                    resizeMode={FastImage.resizeMode.stretch}
                />

                {/*Tên và thời gian post*/}
                <View style={styles.view_infor_header}>
                    <Text allowFontScaling={false} style={styles.text_user_name} numberOfLines={1}
                          ellipsizeMode={'tail'}>{item.user_name}</Text>
                    <Text allowFontScaling={false} style={styles.text_time_posted}>{item.time_posted}</Text>
                </View>
            </View>

            {/*Phần nội dung*/}
            <Text allowFontScaling={false} style={styles.content} numberOfLines={6}
                  ellipsizeMode={'tail'}>{item.content}</Text>


            {/*Phần like, cmt,..*/}
            <View style={styles.view_info}>

                {/*like*/}
                <View style={[styles.view_info_detail]}>
                    <Icon type={'AntDesign'} name={'like1'} color={Color.blue_light} size={moderateScale(15)}/>
                    <Text allowFontScaling={false} style={styles.text_detail}>{convertNumberWithCharacters(item.react_count)}</Text>
                </View>

                {/*Đường kẻ*/}
                <View style={styles.line}/>

                {/*cmt*/}
                <View style={[styles.view_info_detail]}>
                    <Icon type={'FontAwesome'} name={'comment'} color={Color.blue_light}
                          size={moderateScale(15)}/>
                    <Text allowFontScaling={false} style={styles.text_detail}>{convertNumberWithCharacters(item.cmt_count)}</Text>
                </View>

                {/*Đường kẻ*/}
                <View style={styles.line}/>

                {/*Share*/}
                <View style={[styles.view_info_detail]}>
                    <Icon type={'FontAwesome'} name={'share'} color={Color.blue_light} size={moderateScale(15)}/>
                    <Text allowFontScaling={false}
                          style={styles.text_detail}>{convertNumberWithCharacters(item.share_count)}</Text>
                </View>
            </View>
        </View>

    );
};

export const TabPreview = ({Color}) => {
    const styles = styleTabPreview(Color);
    const elevationAni = useRef(new Animated.Value(0)).current

    return (
        <View style={styles.container}>
            <Text allowFontScaling={false} style={styles.title}>Đánh giá kết quả</Text>
            <Animated.View style={[styles.stroke_shadow,{elevation:elevationAni.interpolate({
                    inputRange: [0, verticalScale(10)],
                    outputRange: [0, 2],
                    extrapolate: 'clamp',
                }),
                shadowOpacity: elevationAni.interpolate({
                    inputRange: [0, verticalScale(50)],
                    outputRange: [0, 0.6],
                    extrapolate: 'clamp',
                })}]} />
            <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.containerScrollview}
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
                <Text allowFontScaling={false}
                      style={styles.text_suggest}>{'Đây có chính xác là những gì bạn muốn phân tích và đánh giá?\n' +
                'Tiếp tục nếu đúng, nếu không hãy chỉnh sửa bộ từ khóa tại bước trước.'}</Text>

                {FakeDataPreview.map((post, index) => _render_item(post, index, styles, Color))}
            </ScrollView>
        </View>
    );
};
