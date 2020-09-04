import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
} from 'react-native';

import {LineChart} from 'react-native-charts-wrapper';
import style from './style';

export function ChartLine({data,color}) {
    const styles=style(color)
    return(
        <View style={styles.container}>
            <LineChart
                style={styles.chart}
                data={data}
                chartDescription={{ text: "" }}
                legend={data.legend}
                marker={data.marker}
                xAxis={data.xAxis}
                yAxis={data.yAxis}
                autoScaleMinMaxEnabled={true}
                animation={{
                    durationY: 1000,
                    easingY: "bounce"
                }}
                drawGridBackground={false}
                drawBorders={false}
                touchEnabled={true}
                dragEnabled={false}
                scaleEnabled={false}
                scaleXEnabled={false}
                scaleYEnabled={false}
                pinchZoom={false}
                doubleTapToZoomEnabled={false}
                dragDecelerationEnabled={true}
                dragDecelerationFrictionCoef={0.99}
                keepPositionOnRotation={false}
                // onSelect={this.handleSelect.bind(this)}
                onChange={event => console.log(event.nativeEvent)}
            />
        </View>
    )
}
