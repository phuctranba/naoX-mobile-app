import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {lightMode} from '../../Utils/Values';
import * as STYLE from '../../Utils/Values/general_style';

export default style = (Color) => {
    return ScaledSheet.create({
        container:{
            flex:1,
            backgroundColor: Color.background,
            justifyContent: 'center',
            alignItems: 'center',
        },
        slogan:{
            color: Color.blue,
            fontSize: '20@ms0.3',
            marginVertical:'15@vs',
            fontWeight: 'bold'
        },
        forget_pass_text:{
            color: Color.blue,
            fontSize: '15@ms0.3',
            margin:'10@vs',
        },
        view_forget_pass_text:{
            alignSelf: 'flex-end',
        },
        detail:{
            marginHorizontal:'10%',
            textAlign:'center',
            color: Color.blue,
            fontSize: '14@ms0.3',
            height:'65@ms',
        },
        viewInput:{
            width: '300@ms',
            height: '46@ms1',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: Color.blue,
            borderRadius: '25@ms',
            borderWidth: 1,
            paddingHorizontal: '10@ms',
            marginVertical: '5@vs',
            backgroundColor: Color.background
        },
        viewMultipleInput:{
            width: '300@ms',
            height: '56@vs',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
        },
        buttonSignIn:{
            justifyContent: 'center',
            width: '300@ms',
            height: '46@ms1',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: '25@ms',
            marginTop: '10@vs',
            ...STYLE.SHADOW,
            backgroundColor:Color.blue,

        },
        viewOr:{
            width: '300@ms',
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: '15@vs',
            alignItems: 'center',
        },
        viewButtonBottom:{
            flexDirection: 'row',
            width: '300@ms',
            justifyContent: 'center',
        },
        buttonBottom:{
            flexDirection: 'row',
            alignItems: 'center',
            height: '46@ms1',
            justifyContent:'center',
        },
        touchBottom:{
            width: '100%',
            alignItems: 'center',
            height: '100%',
            justifyContent:'center',
            borderRadius: '25@ms',
            backgroundColor: Color.green_dark,
            ...STYLE.SHADOW,
        },
        view_icon_input:{
            width: '25@ms',
            marginRight: '5@ms',
            justifyContent:'center',
            alignItems:'center',
        },
        iconUser:{
            width: '20@ms',
            height: '20@ms',
        },
        iconPassword:{
            width: '25@ms',
            height: '25@ms',
        },
        inputText:{
            width: '85%',
            padding: 0,
            height: '30@vs',
            color:Color.blue
        },
        textSignIn: {
            color: Color.background,
            fontWeight: 'bold',
            fontSize: '18@ms0.3'
        },
        textOr:{
            color: Color.blue,
            fontSize: '15@ms0.3',
            alignSelf: 'center',
            backgroundColor: Color.transparent,
            paddingHorizontal: '10@ms',
        },
        viewStrokeOr:{
            flex:1,
            backgroundColor: Color.blue,
            height: 1,
        },
        textBottom:{
            color: Color.background,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '16@ms0.3'
        },
        textDescription:{
            color: Color.blue,
            marginBottom: '25@vs',
            fontSize: '12@ms0.3',
            textAlign: 'center',
        },
        image_logo:{
            height:'120@vs',
            backgroundColor:Color.transparent,
        },
    });
};
