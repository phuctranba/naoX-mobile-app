import {SafeAreaView, Text, View, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {ChartPie, ChartStack} from '../../Components/Chart';
import {AnalysisResults, lightMode} from '../../Utils/Values';
import style from './style';
import {AnalysisResultsDetail} from '../../Utils/Values/string';
import ItemDetailChart from '../../Components/ItemDetailChart';

const DATA=[1,2,3,4];

export function Gender() {
    const styles = style(lightMode);

    const aaa=React.createRef();
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerChart}
                //       onPress={()=> {
                //     aaa.current.scrollToIndex({
                //         animated: true,
                //         index: 10,
                //         viewOffset: 0,
                //         viewPosition: 0.5
                //     })
                // }}
            >
                <ChartStack data={AnalysisResults.dataChart[3].value} color={lightMode}/>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={(item)=>ItemDetailChart(item)}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    )
}
