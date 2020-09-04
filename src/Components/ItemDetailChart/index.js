import {Text, View} from 'react-native';
import {ChartPie} from '../Chart';
import {AnalysisResultsDetail} from '../../Utils/Values/string';
import {lightMode} from '../../Utils/Values';
import React from 'react';
import style from './style';

export default function ItemDetailChart(item) {
    const styles = style(lightMode);

    return (
        <View style={styles.containerDetail} key={item.index.toString()}>
            <Text style={styles.textTime}>➤ 20/07/1999 - 08/12/2020</Text>
            <View style={styles.viewIteamDetal}>
                <Text style={styles.textOverview}>{'4.934.242\ncảm xúc'}</Text>
                <View style={styles.viewDetalChart}>
                    <ChartPie data={AnalysisResultsDetail[0].value} color={lightMode}/>
                </View>
                <View style={styles.viewDetalValue}>
                    <View style={styles.viewDetalValueType}>
                        <Text style={[styles.textDetalValue,{color:'rgb(70,163,99)'}]}>823.834</Text>
                        <Text style={[styles.textDetalValue,{color:'rgb(116,116,116)'}]}>56.827</Text>
                        <Text style={[styles.textDetalValue,{color:'rgb(193,74,74)'}]}>2.798.821</Text>
                    </View>
                    <View style={styles.viewDetalValueType}>
                        <Text style={[styles.textDetalNameType,{color:'rgb(70,163,99)'}]}>tích cực</Text>
                        <Text style={[styles.textDetalNameType,{color:'rgb(116,116,116)'}]}>trung tính</Text>
                        <Text style={[styles.textDetalNameType,{color:'rgb(193,74,74)'}]}>tiêu cực</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
