/**
 * Phân tích
 */

import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context'
import style from './style';
import FilterDate from '../../Components/FilterDate';
import {DataChart, lightMode, Task_Colors} from '../../Utils/Values';
import {AnalysisResults} from '../../Utils/Values';
import {convertNumber} from '../../Utils/Functions/convent_big_number';
import {ChartPie, ChartBar, ChartLine, ChartStack} from '../../Components/Chart';
import Overview from './OverView';



function SwitchChart(data, color) {
    switch (data.type) {
        case 'pie': return (<ChartPie data={data.value} color={color}/>);
        case 'bar': return (<ChartBar data={data.value} color={color}/>);
        case 'line': return (<ChartLine data={data.value} color={color}/>);
        case 'stack': return (<ChartStack data={data.value} color={color}/>);
    }
}

function ChartView(index, data, styles, color, moveToDetail) {

    return(
        <TouchableOpacity activeOpacity={0.7} style={styles.touchopaChartView} key={index.toString()} onPress={()=>moveToDetail()}>

            {SwitchChart(data,color)}

        </TouchableOpacity>
    )
}

function Analysis({navigation}) {
    const styles = style(lightMode);

    const moveToDetail=()=>{
        navigation.navigate('TabDetailAnalysis')
    }

    return (
        <SafeAreaView style={styles.safeView} edges={['right', 'top', 'left']}>

            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.leftTop}>
                        <View style={styles.campaign}>
                            <Text style={styles.nameCampaign}>Tên chiến dịch</Text>
                            <Icon name="assignment" color={lightMode.blue} size={24}/>
                        </View>
                        <Text style={styles.unitAnalytics}>Tên đơn vị phân tích</Text>
                    </View>
                    <Icon name="notifications" color={lightMode.blue_light} size={30}/>
                </View>

                <FilterDate/>

                <ScrollView contentContainerStyle={styles.scrollviewContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.containerOverview}>
                        {AnalysisResults.overview.map((data, index) => Overview(index, data, styles, moveToDetail))}
                    </View>

                    {AnalysisResults.dataChart.map((data, index) => ChartView(index, data, styles, lightMode, moveToDetail))}
                </ScrollView>


            </View>

        </SafeAreaView>
    );
}

export default Analysis;
