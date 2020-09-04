import {ScaledSheet} from 'react-native-size-matters';
import {Task_Colors} from '../../Utils/Values';
import * as STYLE from '../../Utils/Values/general_style';

export default style = (Color) => {
    return ScaledSheet.create({
        filterDate: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: '8@ms1',
            backgroundColor: Color.green_gray,
            borderRadius: '10@s',
            marginBottom:'16@vs'
        },
        dateList: {

        },
        fliterButton: {
            margin: '2@ms1',
            padding: '5@ms1',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: '5@s',
            backgroundColor:'red'
        },
        fliterButtonOption: {
            alignItems: 'center',
            marginLeft: '8@ms1',
            padding: '6@ms1',
            borderRadius: '5@s',
            backgroundColor: Color.green_white,
            ...STYLE.SHADOW_2
        },
        viewButtonOption: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: '8@ms1'
        },
        titleButton: {
            marginHorizontal: '2@ms1',
            color: Task_Colors.task_elegant,
            fontSize:'14@ms0.3'
        },
        titleButtonOption: {
            color: Task_Colors.task_elegant,
            fontSize:'13@ms0.3',
        },
    });
};
