import React, {useRef} from 'react';
import {ScrollView, Text, View, Animated} from 'react-native';
import {styleTabPreview} from './style';
import FastImage from 'react-native-fast-image';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Icon from '../../Components/icon';
import {convertNumber} from '../../Utils/Functions/convent_big_number';

const datas = [
    {
        avatar: 'https://im4.ezgif.com/tmp/ezgif-4-7583d9b70f58.png',
        user_name: 'Trần Bá Phúc',
        time_posted: '20/07/2020',
        content: 'Mong ad duyệt hộ bài giùm mình với ạ!!!\n' +
            '.......\n' +
            'Mình có đặt đồ ăn trên Now, mình có post bài review món ăn nhưng bị bên Now gỡ bỏ do vi phạm những quán bán chạy ảnh hưởng tới doanh thu của Now. Rất độc tài và coi thường sức khoẻ khách hàng miễn đem về lợi nhuận cho họ thì họ sẵn sàng bịt mồm...\n' +
            '..... Chuyện là mình có đặt suất cơm gà bento 30k. Mình thấy quán trang trí suất ăn khá bắt mắt, đùi gà to tướng. Điều này là điểm ưu đánh vào tâm lý khách hàng.',
        images: [],
        react_count: 34,
        react_type: {
            like: 12,
            love: 43,
            support: 4,
            haha: 7,
            wow: 1,
            sorry: 7,
            anger: 0,
        },
        cmt_count: 345,
        share_count: 23,
    },
    {
        avatar: 'https://im4.ezgif.com/tmp/ezgif-4-7583d9b70f58.png',
        user_name: 'Trần Bá Phúc',
        time_posted: '20/07/2020',
        content: 'Mong ad duyệt hộ bài giùm mình với ạ!!!\n' +
            '.......\n' +
            'Mình có đặt đồ ăn trên Now, mình có post bài review món ăn nhưng bị bên Now gỡ bỏ do vi phạm những quán bán chạy ảnh hưởng tới doanh thu của Now. Rất độc tài và coi thường sức khoẻ khách hàng miễn đem về lợi nhuận cho họ thì họ sẵn sàng bịt mồm...\n' +
            '..... Chuyện là mình có đặt suất cơm gà bento 30k. Mình thấy quán trang trí suất ăn khá bắt mắt, đùi gà to tướng. Điều này là điểm ưu đánh vào tâm lý khách hàng.',
        images: [],
        react_count: 34,
        react_type: {
            like: 12,
            love: 43,
            support: 4,
            haha: 7,
            wow: 1,
            sorry: 7,
            anger: 0,
        },
        cmt_count: 345,
        share_count: 23,
    },
    {
        avatar: 'https://im4.ezgif.com/tmp/ezgif-4-7583d9b70f58.png',
        user_name: 'Trần Bá Phúc',
        time_posted: '20/07/2020',
        content: 'Mong ad duyệt hộ bài giùm mình với ạ!!!\n' +
            '.......\n' +
            'Mình có đặt đồ ăn trên Now, mình có post bài review món ăn nhưng bị bên Now gỡ bỏ do vi phạm những quán bán chạy ảnh hưởng tới doanh thu của Now. Rất độc tài và coi thường sức khoẻ khách hàng miễn đem về lợi nhuận cho họ thì họ sẵn sàng bịt mồm...\n' +
            '..... Chuyện là mình có đặt suất cơm gà bento 30k. Mình thấy quán trang trí suất ăn khá bắt mắt, đùi gà to tướng. Điều này là điểm ưu đánh vào tâm lý khách hàng.',
        images: [],
        react_count: 34,
        react_type: {
            like: 12,
            love: 43,
            support: 4,
            haha: 7,
            wow: 1,
            sorry: 7,
            anger: 0,
        },
        cmt_count: 345,
        share_count: 23,
    },
    {
        avatar: 'https://im4.ezgif.com/tmp/ezgif-4-7583d9b70f58.png',
        user_name: 'Trần Bá Phúc',
        time_posted: '20/07/2020',
        content: 'Mong ad duyệt hộ bài giùm mình với ạ!!!\n' +
            '.......\n' +
            'Mình có đặt đồ ăn trên Now, mình có post bài review món ăn nhưng bị bên Now gỡ bỏ do vi phạm những quán bán chạy ảnh hưởng tới doanh thu của Now. Rất độc tài và coi thường sức khoẻ khách hàng miễn đem về lợi nhuận cho họ thì họ sẵn sàng bịt mồm...\n' +
            '..... Chuyện là mình có đặt suất cơm gà bento 30k. Mình thấy quán trang trí suất ăn khá bắt mắt, đùi gà to tướng. Điều này là điểm ưu đánh vào tâm lý khách hàng.',
        images: [],
        react_count: 34,
        react_type: {
            like: 12,
            love: 43,
            support: 4,
            haha: 7,
            wow: 1,
            sorry: 7,
            anger: 0,
        },
        cmt_count: 345,
        share_count: 23,
    },
    {
        avatar: 'https://im4.ezgif.com/tmp/ezgif-4-7583d9b70f58.png',
        user_name: 'Trần Bá Phúc',
        time_posted: '20/07/2020',
        content: 'Mong ad duyệt hộ bài giùm mình với ạ!!!\n' +
            '.......\n' +
            'Mình có đặt đồ ăn trên Now, mình có post bài review món ăn nhưng bị bên Now gỡ bỏ do vi phạm những quán bán chạy ảnh hưởng tới doanh thu của Now. Rất độc tài và coi thường sức khoẻ khách hàng miễn đem về lợi nhuận cho họ thì họ sẵn sàng bịt mồm...\n' +
            '..... Chuyện là mình có đặt suất cơm gà bento 30k. Mình thấy quán trang trí suất ăn khá bắt mắt, đùi gà to tướng. Điều này là điểm ưu đánh vào tâm lý khách hàng.',
        images: [],
        react_count: 34,
        react_type: {
            like: 12,
            love: 43,
            support: 4,
            haha: 7,
            wow: 1,
            sorry: 7,
            anger: 0,
        },
        cmt_count: 345,
        share_count: 23,
    },
];

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
                    <Text allowFontScaling={false} style={styles.text_detail}>{convertNumber(item.react_count)}</Text>
                </View>

                {/*Đường kẻ*/}
                <View style={styles.line}/>

                {/*cmt*/}
                <View style={[styles.view_info_detail]}>
                    <Icon type={'FontAwesome'} name={'comment'} color={Color.blue_light}
                          size={moderateScale(15)}/>
                    <Text allowFontScaling={false} style={styles.text_detail}>{convertNumber(item.cmt_count)}</Text>
                </View>

                {/*Đường kẻ*/}
                <View style={styles.line}/>

                {/*Share*/}
                <View style={[styles.view_info_detail]}>
                    <Icon type={'FontAwesome'} name={'share'} color={Color.blue_light} size={moderateScale(15)}/>
                    <Text allowFontScaling={false}
                          style={styles.text_detail}>{convertNumber(item.share_count)}</Text>
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

                {datas.map((post, index) => _render_item(post, index, styles, Color))}
            </ScrollView>
        </View>
    );
};
