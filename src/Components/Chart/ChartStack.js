import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';
import style from './style';

export function ChartStack({data,color}) {
    const styles=style(color)
    return(
        <View style={styles.container}>
            <BarChart
                style={styles.chart}
                xAxis={data.xAxis}
                data={data.data}
                legend={data.legend}
                drawValueAboveBar={false}
                chartDescription={{text: ''}}
                animation={{
                    durationY: 1000,
                    easingY: "bounce"
                }}
                onSelect={(e)=>console.log(e.nativeEvent)}
                onChange={(event) => console.log(event.nativeEvent)}
            />
        </View>
    )
}
