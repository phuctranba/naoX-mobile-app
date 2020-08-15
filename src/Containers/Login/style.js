import {ScaledSheet} from 'react-native-size-matters';

export default style = (Color) => {
    return ScaledSheet.create({
        container:{
            flex:1,
            backgroundColor: Color.background,
            justifyContent: 'center',
            alignItems: 'center',
        },
        container_input:{
            marginVertical:'20@ms'
        },
        slogan:{
            color: Color.blue,
            fontSize: '20@ms0.3',
            marginVertical:'15@vs',
            fontWeight: 'bold'
        },
        detail:{
            marginHorizontal:'15%',
            textAlign:'center',
            color: Color.blue,
            fontSize: '14@ms0.3',
            height:'65@ms',
        },
        viewInput:{
            width: '300@ms',
            height: '46@vs',
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
            backgroundColor: Color.background
        },
        buttonSignIn:{
            justifyContent: 'center',
            width: '300@ms',
            height: '46@vs',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: '25@ms',
            paddingHorizontal: '10@ms',
            marginTop: '20@vs',
            elevation:4
        },
        viewOr:{
            width: '300@ms',
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: '10@vs',
            alignItems: 'center',
        },
        viewButtonBottom:{
            flexDirection: 'row',
            width: '300@ms',
            justifyContent: 'space-between',
            marginBottom: '20@vs',
        },
        buttonBottom:{
            flexDirection: 'row',
            width: '135@ms',
            borderRadius: '25@ms',
            alignItems: 'center',
            height: '46@vs',
            justifyContent:'center',
            elevation: 4
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
            textAlign: 'center'
        },
        textDescription:{
            color: Color.blue,
            marginBottom: '25@vs',
            fontSize: '12@ms0.3',
            textAlign: 'center',
        },
        image_logo:{
            height:'150@ms',
            width:'100%',
            backgroundColor:Color.transparent,
        },
    });
};
