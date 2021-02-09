import * as STYLE from '../../Utils/Values/general_style';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {Task_Colors} from '../../Utils/Values';

const style = (Color) => {
    return ScaledSheet.create({
        //style Shade
        container:{
            flex:1
        },
        containerChart:{
            height:'300@ms1',
            padding:'20@s',
            backgroundColor:'white',
            margin:'10@s',
            borderRadius:'20@ms1',
            ...STYLE.SHADOW_2
        },
        containerSnapcarousel:{
            flex:1,
            padding:'20@s',
            backgroundColor:'white',
            margin:'10@s',
            borderRadius:'20@ms1',
            ...STYLE.SHADOW_2
        },


        //style ItemDetail
        containerDetail:{
            height:'130@ms1',
            backgroundColor:Color.background,
            borderRadius:'10@ms1',
            marginHorizontal:'10@s',
            marginVertical:'5@vs',
            justifyContent:'center',
            paddingHorizontal:'10@s',
            paddingVertical:'8@ms1',
            ...STYLE.SHADOW_2
        },
        viewIteamDetal:{
            flexDirection:'row',
            flex:1,
            alignItems:'center',
        },
        textTime:{
            color:Color.blue,
            fontSize:'14@ms0.3',
            marginVertical:'5@ms1'
        },
        textOverview:{
            flex:1,
            textAlign:'center',
            fontWeight:'bold',
            color:Color.blue,
            fontSize:'15@ms0.3'
        },
        viewDetalChart:{
            flex:1,
            marginHorizontal: '15@s'
        },
        viewDetalValue:{
            flex:1.5,
            flexDirection:'row',
            justifyContent: 'space-between',
            marginRight: '15@s'
        },
        textDetalValue:{
            fontSize: '13@ms0.3',
            fontWeight: 'bold',
            textAlign: 'left'
        },
        textDetalNameType:{
            fontSize: '13@ms0.3',
            fontWeight: 'bold',
            textAlign: 'right'
        },
        viewDetalValueType:{
            height:'80%',
            justifyContent:'space-evenly'
        },
    });
};

export default style
