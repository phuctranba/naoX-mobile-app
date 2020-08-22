import {ScaledSheet} from 'react-native-size-matters';
import {sizes, Task_Colors} from '../../Utils/Values';
import {sizes as Sizes} from '../../Utils/Values/sizes';

export const styleInitCampaign = (Color) => {
    return ScaledSheet.create({

    });
};

export const styleTabInit = (Color) => {
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
            paddingVertical:'7@vs',
        },
        element_view:{
            marginVertical:'7@vs',
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
            color:Color.blue,
            alignSelf:'center'
        },
        detail:{
            fontSize:'16@ms0.3',
            fontWeight:'bold',
            color:Color.blue
        },
        inputText:{
            width: '85%',
            paddingVertical: 0,
            paddingHorizontal: "10@ms",
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
        stroke_shadow:{
            width:'100%',
            height:'0.5@vs',
            backgroundColor:Color.transparent
        }
    });
};

export const styleTabPreview = (Color) => {
    return ScaledSheet.create({
        container:{
            flex:1,
            width:Sizes.Width_Window,
        },
        title:{
            fontSize:'30@ms0.3',
            fontWeight:'bold',
            width:'100%',
            paddingTop: '20@ms',
            paddingBottom: '10@ms',
            textAlign:'center',
            color:Color.blue,
            alignSelf:'center',
        },
        text_suggest:{
            fontSize:'13@ms0.3',
            width: '330@ms',
            marginBottom: '10@ms',
            textAlign:'center',
            color:Color.blue,
            alignSelf:'center'
        },
        view_post:{
            flex:1,
            width: '290@s',
            // height: "100%",
            backgroundColor:"#fff",
            justifyContent: "space-between",
            paddingHorizontal: "3%",
            paddingTop: "3%",
            marginTop:'3@vs',
            marginBottom:'10@ms',
            elevation: 2,
            alignSelf:'center',
            borderRadius: '4@ms'
        },
        avatar:{
            width:'33@ms',
            height:'33@ms',
        },
        content:{
            width:"100%",
            color:"#2f2f2f",
            fontSize:'13@ms0.3',
            marginVertical:"2%",
            textAlign: "left",
        },
        text_user_name:{
            color:Color.blue_light,
            marginLeft:"4%",
            fontSize:'16@ms0.3',
            fontWeight:"bold"
        },
        text_time_posted:{
            color:Task_Colors.task_elegant_dark,
            marginLeft:"4%",
            fontSize:'13@ms0.3',
        },
        text_detail:{
            color:Task_Colors.task_elegant_dark,
            fontSize:'12.24@ms0.3',
            marginLeft:"8%",
            height:"48%",
            textAlign: "left"
        },
        view_info_detail:{
            flexDirection:'row',
            width:"33%",
            height:"100%",
            justifyContent:"center",
            alignItems: "center",
        },
        header_post:{
            width:"100%",
            height:'33@ms',
            flexDirection:"row",
            alignItems:"center"
        },
        view_infor_header:{
            justifyContent: 'center',
            marginHorizontal:'5@ms'
        },
        view_info:{
            width:"100%",
            height:'30@ms',
            flexDirection:"row",
            alignItems:"center",
            marginBottom:'5@vs'
        },
        line:{
            width:"1@ms",
            height:"80%",
            backgroundColor:"#8b8b8b"
        },
        stroke_shadow:{
            width:'100%',
            height:'0.5@vs',
            backgroundColor:Color.transparent
        }
    });
};

export const styleTabConfirm = (Color) => {
    return ScaledSheet.create({
        container:{
            flex:1,
            width:Sizes.Width_Window,
            alignItems:'center'
        },
        title:{
            fontSize:'30@ms0.3',
            fontWeight:'bold',
            width:'100%',
            marginVertical: '20@ms',
            textAlign:'center',
            color:Color.blue,
            alignSelf:'center',
            // backgroundColor:'red'
        },
        element_view:{
            marginVertical:'15@vs',
        },
        detail:{
            fontSize:'16@ms0.3',
            fontWeight:'bold',
            color:Color.blue
        },
        inputText:{
            width: '85%',
            paddingVertical: 0,
            paddingHorizontal: "10@ms",
            height: '30@vs',
            color:Color.blue
        },
        viewInputRound:{
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
        viewInputSquare:{
            width: '300@ms',
            height: '46@vs',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: Color.blue,
            borderRadius: '5@ms',
            borderWidth: 1,
            paddingHorizontal: '10@ms',
            marginVertical: '5@vs',
            backgroundColor: Color.background
        },
        note_title:{
            width: '300@ms',
            fontSize:'15@ms0.3',
            fontWeight:'bold',
            marginVertical: '5@ms',
            color:Color.blue,
        },
        note_content:{
            width: '300@ms',
            fontSize:'14@ms0.3',
            marginVertical: '2@ms',
            color:Color.blue,
        },
    });
};
