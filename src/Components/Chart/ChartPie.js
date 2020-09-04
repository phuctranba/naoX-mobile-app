import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
} from 'react-native';

import {PieChart} from 'react-native-charts-wrapper';
import style from './style';
import {moderateScale} from "react-native-size-matters";

export function ChartPie({data,color}) {
    const styles=style(color)
    return(
        <View style={styles.container}>
            <PieChart
                style={styles.chart}
                logEnabled={true}
                chartBackgroundColor={processColor('#00000000')}
                chartDescription={data.description}
                data={data.data}
                legend={data.legend}
                highlights={data.highlights}
                entryLabelColor={processColor('green')}
                entryLabelTextSize={20}
                drawEntryLabels={false}
                rotationEnabled={false}
                rotationAngle={-90}
                usePercentValues={true}
                styledCenterText={{text:'Cơ cấu\nthành phần\nđiểm', color: processColor('#3565dd'), size: moderateScale(15)}}
                centerTextRadiusPercent={100}
                holeRadius={1}
                holeColor={processColor('#f0f0f0')}
                transparentCircleRadius={1}
                transparentCircleColor={processColor('#f0f0f088')}
                maxAngle={360}
                onChange={(event) => console.log(event.nativeEvent)}
            />
        </View>
    )
}
