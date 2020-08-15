import {ScaledSheet} from 'react-native-size-matters';

export const styleInitCampaign = (Color) => {
    return ScaledSheet.create({

    });
};

export const styleSeupKeyWord = (Color) => {
    return ScaledSheet.create({
        container:{
            flex:1
        },
        view_checkboxs:{
            flexDirection:'row',
            width:'100%',
            alignItems:"center",
            // borderTopWidth: '0.5@ms',
            // borderTopColor:Blues.blue_6,
            paddingVertical:'10@vs',
        },
        text_chexkbox:{
            // color:Blues.blue_6,
            fontSize:'16@ms0.3',
            // marginVertical: '10@vs',
            paddingLeft:'10@s'
        },
        title:{
            fontSize:'30@ms0.3',
            fontWeight:'bold',
            width:'100%',
            paddingVertical: '20@ms',
            textAlign:'center',
            backgroundColor: 'red'
        },
        detail:{
            fontSize:'15@ms0.3',
            fontWeight:'bold'
        },
        inputText:{
            width: '85%',
            padding: 0,
            height: '30@vs',
            color:Color.blue
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
    });
};
