import React, {useRef} from 'react';
import {Text, View, Animated, TextInput} from 'react-native';
import {styleTabConfirm} from './style';
import {moderateScale} from 'react-native-size-matters';

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


export const TabConfirm = ({Color}) => {
    const styles = styleTabConfirm(Color);

    return (
        <View style={styles.container}>
            <Text allowFontScaling={false} style={styles.title}>Đưa vào chiến dịch</Text>

            <View style={styles.element_view}>
                <Text style={styles.detail}>Tên đơn vị phân tích:</Text>
                <View style={styles.viewInputRound}>
                    <TextInput style={styles.inputText}
                               underlineColorAndroid={'transparent'}
                               returnKeyType={'next'}
                               allowFontScaling={false}
                               placeholderTextColor={Color.blue_opa_50}
                               blurOnSubmit={false}
                               placeholder={'Tên đơn vị phân tích'}
                               onFocus={() => {
                               }}/>
                </View>
            </View>

            <View style={styles.element_view}>
                <Text style={styles.detail}>Thuộc chiến dịch:</Text>
                <View style={styles.viewInput}>
                    <TextInput style={styles.viewInputSquare}
                               underlineColorAndroid={'transparent'}
                               returnKeyType={'next'}
                               allowFontScaling={false}
                               placeholderTextColor={Color.blue_opa_50}
                               blurOnSubmit={false}
                               placeholder={'Chọn chiến dịch'}
                               onFocus={() => {
                               }}/>
                </View>
            </View>

            <Text allowFontScaling={false} style={styles.note_title}>Ghi chú:</Text>
            <Text allowFontScaling={false} style={styles.note_content}>*Chiến dịch: Các đợt phân tích đánh giá cho một chiến dịch marketing,
            dự án cần khảo sát thị trường.</Text>
            <Text allowFontScaling={false} style={styles.note_content}>*Đơn vị phân tích: Các đơn vị, nhóm từ khóa, nhóm yếu tố cụ thể
            muốn tìm kiếm và phân tích phục vụ cho mục đích chạy chiến dịch.</Text>


        </View>
    );
};
