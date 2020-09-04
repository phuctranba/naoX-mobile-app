import * as STYLE from '../../Utils/Values/general_style';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {Task_Colors} from '../../Utils/Values';

export default style = (Color) => {
    return ScaledSheet.create({
        //style view chính
        safeView: {
            flex: 1,
            // backgroundColor: Color.background,
        },
        container: {
            flex: 1,
            marginHorizontal: '16@s',
            marginTop: '16@vs',
        },
        scrollviewContent: {
            paddingHorizontal: '2@s',
        },
        topView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '15@ms1',
        },
        leftTop: {},
        campaign: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
        },
        nameCampaign: {
            fontSize: '24@ms0.3',
            fontWeight: 'bold',
            marginRight: 4,
            color: Color.blue,
        },
        notification: {},
        unitAnalytics: {
            fontSize: '16@ms0.3',
            color: Color.blue,
        },

        //style overview
        containerOverview: {
            flexDirection: 'row',
            width: '100%',
            justifyContent:'space-between',
            paddingHorizontal:'2@s'
        },
        touchopaOverview: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Task_Colors.task_white_blue,
            borderRadius:'16@s',
            width: '45%',
            height:'135@s',
            ...STYLE.SHADOW,
        },
        titleOverview: {
            textAlign: 'center',
            fontSize: '15@ms0.3',
            color:Task_Colors.task_elegant
        },
        valueOverview: {
            textAlign: 'center',
            fontSize: '22@ms0.3',
            fontWeight: 'bold',
            marginVertical: '20@vs',
            color:Color.blue
        },
        fluctuationsOverview: {
            textAlign: 'center',
            fontSize: '18@ms0.3',
            fontWeight: 'bold',
        },

        //style ChartView
        touchopaChartView:{
            justifyContent: 'center',
            backgroundColor: Color.background,
            borderRadius:'16@s',
            width: '100%',
            height:'200@ms1',
            marginTop:'16@vs',
            padding:'10@ms1',
            ...STYLE.SHADOW_2,
        }
    });
};
