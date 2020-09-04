import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
    TouchableOpacity
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';
import style from './style';

export function ChartBar({data,color}) {
    console.log(data);
    const styles=style(color)
    return(
        <View style={styles.container}>
            <BarChart
                animation={{
                    durationY: 1000,
                    easingY: "bounce"
                }}
                style={styles.chart}
                xAxis={data.xAxis}
                data={data.data}
                legend={data.legend}
                chartDescription={data.description}
                drawValueAboveBar={true}
                onChange={(event) => console.log(event.nativeEvent)}
                highlights={data.highlights}
                drawHighlightArrow={true}
            />
        </View>
    )
}
