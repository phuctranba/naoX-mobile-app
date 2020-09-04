import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale, ScaledSheet} from "react-native-size-matters";

const style=(Color)=>{ return ScaledSheet.create({
    container: {
        flex: 1,
        // padding:'15@ms',
    },
    chart: {
        flex: 1
    },
    title_local_chart:{
        marginHorizontal: '20@ms',
        marginTop: '5@vs',
        fontSize:'13@ms0.4',
        fontWeight: '500',
        color:'#4c4c4c'
    }
})};
export default style;
